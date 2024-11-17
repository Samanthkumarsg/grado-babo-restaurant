import Image from "next/image";

export default function Gallery() {
    return (
        <div className="grid gap-1">
            <div className="grid grid-cols-2 gap-1">
                <div className="col-span-1 md:col-span-1 md:row-span-2 relative">
                    <Image
                        src="/images/L1.png"
                        alt="Image 1"
                        width={400}
                        height={600}
                        className="object-cover w-full h-full"
                        draggable="false"
                    />
                </div>
                <div className="grid grid-cols-1 gap-1">
                    <div className="relative">
                        <Image
                            src="/images/R1.png"
                            alt="Image 2"
                            width={200}
                            height={200}
                            className="object-cover w-full h-auto"
                            draggable="false"
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src="/images/R2.png"
                            alt="Image 3"
                            width={200}
                            height={200}
                            className="object-cover w-full h-auto"
                            draggable="false"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-1">
                <div className="relative">
                    <Image
                        src="/images/M1.png"
                        alt="Image 4"
                        width={150}
                        height={150}
                        className="object-cover w-full h-auto"
                        draggable="false"
                    />
                </div>
                <div className="relative">
                    <Image
                        src="/images/M2.png"
                        alt="Image 5"
                        width={150}
                        height={150}
                        className="object-cover w-full h-auto"
                        draggable="false"
                    />
                </div>
                <div className="relative">
                    <Image
                        src="/images/M3.png"
                        alt="Image 6"
                        width={150}
                        height={150}
                        className="object-cover w-full h-auto"
                        draggable="false"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                    <Image
                        src="/images/B1.png"
                        alt="Image 7"
                        width={200}
                        height={150}
                        className="object-cover w-full h-auto"
                        draggable="false"
                    />
                </div>
                <div className="relative">
                    <Image
                        src="/images/B2.png"
                        alt="Image 8"
                        width={200}
                        height={150}
                        className="object-cover w-full h-auto"
                        draggable="false"
                    />
                </div>
            </div>
        </div>
    );
}
