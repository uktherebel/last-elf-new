import { readFile, stat } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

type ZipAsset = {
  publicPath: string;
  zipPath: string;
};

const screenshots: ZipAsset[] = [
  ["crousel-imgs/1.webp", "screenshots/carousel/01-ruined-castle.webp"],
  ["crousel-imgs/2.webp", "screenshots/carousel/02-cursed-approach.webp"],
  ["crousel-imgs/3.webp", "screenshots/carousel/03-monster-encounter.webp"],
  ["crousel-imgs/5.webp", "screenshots/carousel/04-dungeon-passage.webp"],
  ["crousel-imgs/6.webp", "screenshots/carousel/05-dungeon-fight.webp"],
  ["crousel-imgs/8.webp", "screenshots/carousel/06-forgotten-lands.webp"],
  ["crousel-imgs/9.webp", "screenshots/carousel/07-forest-ruins.webp"],
  ["crousel-imgs/10.webp", "screenshots/carousel/08-demon-boss.webp"],
  ["crousel-imgs/11.webp", "screenshots/carousel/09-arena-trial.webp"],
  ["crousel-imgs/12.webp", "screenshots/carousel/10-exploration.webp"],
  ["crousel-imgs/sword-combat.webp", "screenshots/carousel/11-sword-combat.webp"],
  [
    "Screenshots - Refined/dark-fantasy-castle-approach.png",
    "screenshots/refined/01-dark-fantasy-castle-approach.png",
  ],
  [
    "Screenshots - Refined/elf-warrior-combat-stance.png",
    "screenshots/refined/02-elf-warrior-combat-stance.png",
  ],
  [
    "Screenshots - Refined/monster-horde-night-battle.png",
    "screenshots/refined/03-monster-horde-night-battle.png",
  ],
  [
    "Screenshots - Refined/dungeon-hack-and-slash-scene.png",
    "screenshots/refined/04-dungeon-hack-and-slash-scene.png",
  ],
  [
    "Screenshots - Refined/cursed-lands-demon-encounter.png",
    "screenshots/refined/05-cursed-lands-demon-encounter.png",
  ],
  [
    "Screenshots - Refined/ruined-world-exploration-elf.png",
    "screenshots/refined/06-ruined-world-exploration-elf.png",
  ],
  [
    "Screenshots - Refined/sword-combat-real-time-battle.png",
    "screenshots/refined/07-sword-combat-real-time-battle.png",
  ],
  [
    "Screenshots - Refined/demon-boss-arena-fight.png",
    "screenshots/refined/08-demon-boss-arena-fight.png",
  ],
].map(([publicPath, zipPath]) => ({ publicPath, zipPath }));

const logosAndArt: ZipAsset[] = [
  ["RPGGame-Logo-Icon-MainMenu/logo-ios.png", "logos/logo-ios.png"],
  ["press/logos/512.png", "logos/512.png"],
  ["press/logos/512-new.png", "logos/512-new.png"],
  ["press/logos/logo-ios.png", "logos/press-logo-ios.png"],
  ["RPGGame-Logo-Icon-MainMenu/RPG-Logo.png", "logos/RPG-Logo.png"],
  ["RPGGame-Logo-Icon-MainMenu/last-elf-logo.png", "logos/last-elf-logo.png"],
  ["press/art/RPG-Game-Youtube-Thumbnail-2.jpg", "key-art/RPG-Game-Youtube-Thumbnail-2.jpg"],
  ["press/art/Main-Capsule1.jpg", "key-art/Main-Capsule1.jpg"],
  ["press/art/Main-Capsule2.jpg", "key-art/Main-Capsule2.jpg"],
  ["press/art/Main-Capsule-2.jpg", "key-art/Main-Capsule-2.jpg"],
  ["RPG-Game-Capsules-22-January-2026/MainCapsule.jpg", "store-art/MainCapsule.jpg"],
  ["RPG-Game-Capsules-22-January-2026/MainCapsule1.jpg", "store-art/MainCapsule1.jpg"],
  ["RPG-Game-Capsules-22-January-2026/HeaderCapsule.jpg", "store-art/HeaderCapsule.jpg"],
  ["RPG-Game-Capsules-22-January-2026/SmallCapsule.jpg", "store-art/SmallCapsule.jpg"],
  ["RPG-Game-Capsules-22-January-2026/VerticalCapsule.jpg", "store-art/VerticalCapsule.jpg"],
].map(([publicPath, zipPath]) => ({ publicPath, zipPath }));

const packs: Record<string, ZipAsset[]> = {
  "TheLastElf_Screenshots.zip": screenshots,
  "TheLastElf_StoreArt.zip": logosAndArt,
  "TheLastElf_BRoll.zip": [
    {
      publicPath: "press/art/RPG-Game-Youtube-Thumbnail-2.jpg",
      zipPath: "trailer/official-trailer-thumbnail.jpg",
    },
    ...screenshots.map((asset) => ({
      ...asset,
      zipPath: asset.zipPath.replace("screenshots/", "b-roll-reference-stills/"),
    })),
  ],
  "TheLastElf_PressKit.zip": [...screenshots, ...logosAndArt],
};

const crcTable = new Uint32Array(256);

for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c >>> 0;
}

function crc32(data: Buffer) {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function getDosDateTime(date = new Date()) {
  const year = Math.max(date.getFullYear(), 1980);
  const dosTime =
    (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
  const dosDate =
    ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
}

async function readPublicAsset(asset: ZipAsset) {
  const publicRoot = path.join(process.cwd(), "public");
  const resolvedPath = path.resolve(publicRoot, asset.publicPath);

  if (!resolvedPath.startsWith(publicRoot)) {
    throw new Error(`Invalid asset path: ${asset.publicPath}`);
  }

  await stat(resolvedPath);

  return {
    data: await readFile(resolvedPath),
    zipPath: asset.zipPath.replace(/^\/+/, ""),
  };
}

async function createZip(assets: ZipAsset[]) {
  const localParts: Buffer[] = [];
  const centralParts: Buffer[] = [];
  const { dosDate, dosTime } = getDosDateTime();
  let offset = 0;

  for (const asset of assets) {
    const file = await readPublicAsset(asset);
    const name = Buffer.from(file.zipPath);
    const crc = crc32(file.data);
    const size = file.data.length;

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0, 6);
    localHeader.writeUInt16LE(0, 8);
    localHeader.writeUInt16LE(dosTime, 10);
    localHeader.writeUInt16LE(dosDate, 12);
    localHeader.writeUInt32LE(crc, 14);
    localHeader.writeUInt32LE(size, 18);
    localHeader.writeUInt32LE(size, 22);
    localHeader.writeUInt16LE(name.length, 26);
    localHeader.writeUInt16LE(0, 28);

    localParts.push(localHeader, name, file.data);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0, 8);
    centralHeader.writeUInt16LE(0, 10);
    centralHeader.writeUInt16LE(dosTime, 12);
    centralHeader.writeUInt16LE(dosDate, 14);
    centralHeader.writeUInt32LE(crc, 16);
    centralHeader.writeUInt32LE(size, 20);
    centralHeader.writeUInt32LE(size, 24);
    centralHeader.writeUInt16LE(name.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(offset, 42);

    centralParts.push(centralHeader, name);
    offset += localHeader.length + name.length + file.data.length;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(assets.length, 8);
  end.writeUInt16LE(assets.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, centralDirectory, end]);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  const { filename } = await params;
  const assets = packs[filename];

  if (!assets) {
    return new Response("Press asset is not available yet.", { status: 404 });
  }

  const zip = await createZip(assets);

  return new Response(zip, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
