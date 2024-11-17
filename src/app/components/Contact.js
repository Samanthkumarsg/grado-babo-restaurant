import Image from "next/image";

export default function Contact() {
    return (
        <div className="h-full w-full border-r py-16 flex flex-col items-center justify-center bg-lightfill bg-local bg-hero bg-cover bg-center">
            <div className="text-center">
                <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                    Everything at glance
                </h1>
            </div>
            <div className="w-full xl:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 mt-8">
                <div className="h-full rounded-xs bg-transparent flex flex-col items-center justify-center p-6">
                    <Image
                        src={'/images/location.svg'}
                        className="mb-4"
                        width={32}
                        height={32}
                        alt="gardo-babo-icons"
                    />
                    <h1 className="text-xl font-normal text-strong">Find Us</h1>
                    <h6 className="text-base mt-1 line-clamp-2 text-textWeak text-center">
                        Address line 1, Postcode Berlin, Germany
                    </h6>
                </div>
                <div className="h-full rounded-xs bg-transparent flex flex-col items-center justify-center p-6">
                    <Image
                        src={'/images/Email.svg'}
                        className="mb-4"
                        width={32}
                        height={32}
                        alt="gardo-babo-icons"
                    />
                    <h1 className="text-xl font-normal text-strong">Email</h1>
                    <h6 className="text-base mt-1 line-clamp-2 text-textWeak text-center">
                        gradobaboberlin@gmail.com
                    </h6>
                </div>
                <div className="h-full rounded-xs bg-transparent flex flex-col items-center justify-center p-6">
                    <Image
                        src={'/images/Contact.svg'}
                        className="mb-4"
                        width={32}
                        height={32}
                        alt="gardo-babo-icons"
                    />
                    <h1 className="text-xl font-normal text-strong">Contact</h1>
                </div>
            </div>
        </div>
    );
}
