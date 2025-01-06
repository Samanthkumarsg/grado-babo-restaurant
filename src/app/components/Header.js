import Image from 'next/image';

export default function Header() {
    return (
        <div className="w-full bg-fill flex items-center justify-between py-3 ">
            <div className="flex items-center">
                <Image
                    src="/images/Frame 82 left.svg"
                    alt="Responsive SVG"
                    width={324}
                    height={94}
                    quality={100}
                    className="w-auto h-20 pr-5"
                    priority
                />
            </div>
            <div className="flex items-center">
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-[180A0E] text-xl font-medium uppercase tracking-wider '>Grado Babo</h1>
                    <h1 className='text-textWeak text-xs font-normal tracking-wider uppercase '>An Italian Vegan Restaurant</h1>

                </div>
            </div>
            <div className="flex items-center">
                <Image
                    src="/images/Frame 82.svg"
                    alt="Responsive SVG"
                    width={324}
                    height={94}
                    quality={100}
                    className="w-auto h-20 pl-5"
                    priority
                />
            </div>
        </div>
    );
}
