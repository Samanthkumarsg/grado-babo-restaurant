import Image from "next/image";

export default function Contact() {
    return (
        <div className="h-full w-full  border-r py-16 flex flex-col items-center justify-center bg-lightfill bg-local bg-hero  bg-cover bg-center">
            <div className="">
                <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">Everything at glance</h1>
            </div>
            <div className="w-full sm:w-full md:w-full lg:w-full xl:w-3/4 border grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  items-center justify-around gap-4 p-4 mt-8 ">

                <div className="h-full shadow-sm border rounded-xs bg-white flex flex-col items-center justify-center p-11 min-w-24 ">
                    <Image src={'/images/location.svg'} className="h-8 w-8 mb-4" width={32} height={32} alt="gardo-babo-icons"></Image>
                    <h1 className="text-xl font-normal text-strong">Find US</h1>
                    <h6 className="text-base mt-1 line-clamp-2 text-textWeak text-center">Address line 1, Postcode Berlin, Germany</h6>
                </div>

                <div className="h-full shadow-sm border rounded-xs bg-white flex flex-col items-center justify-center p-11 min-w-24">
                    <Image src={'/images/location.svg'} className="h-8 w-8 mb-4" width={32} height={32} alt="gardo-babo-icons"></Image>
                    <h1 className="text-xl font-normal text-strong">Email</h1>
                    <h6 className="text-base mt-1 line-clamp-2 text-textWeak text-center">gradobaboberlin@gmail.com</h6>
                </div>

                <div className="h-full shadow-sm border rounded-xs bg-white flex flex-col items-center justify-center p-11 ">
                    <Image src={'/images/location.svg'} className="h-8 w-8 mb-4" width={32} height={32} alt="gardo-babo-icons"></Image>
                    <h1 className="text-xl font-normal text-strong">Contact</h1>
                </div>

            </div>

        </div>
    )
}