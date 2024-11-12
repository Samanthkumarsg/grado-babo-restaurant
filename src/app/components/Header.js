import Image from 'next/image';

export default function Header() {
    return (
        <div className=" w-full bg-fill flex items-center justify-between py-3">
            <div className="">
                <Image
                    src="./images/Frame 82 left.svg"
                    alt="Responsive SVG"
                    width={400}
                    height={400}
                    className="w-full h-20 "
                />
            </div>
            <h1 className="font-medium tracking-wider font-figtree text-lg text-strongText uppercase">Grado Babo</h1>
            <div className="">
                <Image
                    src="./images/Frame 82.svg"
                    alt="Responsive SVG"
                    width={400} // specify a width
                    height={400} // specify a height
                    className="w-full h-20"
                />
            </div>
        </div>
    )
}