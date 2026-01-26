import Image from "next/image";

const screenshots = [
    "/Screenshots - Refined/Whisk_ejz3gjmxmgmxmjnz0iykfwotqwzjrtl2edzj1cn.png",
    "/Screenshots - Refined/Whisk_ejzlrmmhjtzlrwyj1cm4itytuznzqtl5mzmx0cz.png",
    "/Screenshots - Refined/Whisk_gzymjgziftmmvmyl1sy2mgotimnwqtlxkznk1co.png",
    "/Screenshots - Refined/Whisk_kto3ijyiltnxugz00im1ywytywz4qtlmzjyi1yy.png",
    "/Screenshots - Refined/Whisk_ego2iwzldtm2qgo20ymkvjytywmzqtl1ywz20sz.png",
    "/Screenshots - Refined/Whisk_ito1mwnmnwo1qmyy0iyifjytatm3qtl0mtm10iz.png",
];

export default function Gallery() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-heading text-white text-center mb-12">Into the Darkness</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {screenshots.map((src, index) => (
                        <div key={index} className="relative aspect-video group overflow-hidden rounded-md border border-white/10">
                            <Image
                                src={src}
                                alt={`The Last Elf Screenshot ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
