import Image from 'next/image';

export default function Header() {
    return (
        <div className=" w-full bg-fill flex items-center justify-between py-3">
            <div className="">
                <Image
                    src="./images/Frame 82 left.svg"
                    alt="Responsive SVG"
                    width={324}
                    height={94}
                    className="w-full h-20 "
                />
            </div>
            <h1 className="font-figtree text-lg text-strongText uppercase font-medium tracking-widest">Grado Babo</h1>
            <div className="">
                <Image
                    src="./images/Frame 82.svg"
                    alt="Responsive SVG"
                    width={324} 
                    height={94} 
                    className="w-full h-20"
                />
            </div>
        </div>
    )
}