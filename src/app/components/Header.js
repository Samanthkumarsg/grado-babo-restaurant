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
                    className="w-auto h-20 pr-5"
                    priority
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/images/Logo.svg"
                    alt="Responsive Logo"
                    width={324}
                    height={94}
                    className="w-auto h-24 py-2"
                    priority
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/images/Frame 82.svg"
                    alt="Responsive SVG"
                    width={324}
                    height={94}
                    className="w-auto h-20  pl-5"
                    priority
                />
            </div>
        </div>
    );
}
