import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-fill py-10 md:py-18 flex flex-col items-center justify-center">
            <div className="flex items-center">
                <Image
                    src="/images/Logo.svg"
                    alt="Responsive Logo"
                    width={324}
                    height={94}
                    className="w-auto h-16 mb-10"
                />

            </div>
            <div className=" uppercase text-[#180A0E] flex items-center justify-center flex-col md:flex-row gap-6 md:gap-12 font-medium font-figtree">
                <h1 className="text-sm md:text-base">imprint</h1>
                <h1 className="text-sm md:text-base">Data Privacy</h1>
                <h1 className="text-sm md:text-base">Change cookie settings</h1>
            </div>
        </div>
    );
}
