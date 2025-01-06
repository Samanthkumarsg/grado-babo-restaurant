import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-strongBrown py-20 md:py-20 flex flex-col items-center justify-center bg-hero">
            <div className="flex items-center">
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-white text-xl font-medium uppercase tracking-wider '>Grado Babo</h1>
                    <h1 className='text-white text-xs font-normal tracking-wider uppercase mt-1 '>An Italian Vegan Restaurant</h1>

                </div>
            </div>
            <div className="mt-10 uppercase text-weak flex items-center justify-center flex-col md:flex-row gap-6 md:gap-12 font-medium font-figtree *:tracking-wider">
                <h1 className="text-xs ">imprint</h1>
                <h1 className="text-xs ">Data Privacy</h1>
                <h1 className="text-xs ">Change cookie settings</h1>
            </div>
        </div>
    );
}
