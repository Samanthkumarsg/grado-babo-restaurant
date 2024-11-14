import Image from "next/image";

export default function Services() {
    return (
        <div className="w-full py-28 flex flex-col items-center justify-around  bg-lightfill ">
            <div className="">
                <h1 className="text-sm tracking-widest text-strongText uppercase font-medium ">Our Services</h1>
            </div>
            <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 border flex flex-wrap items-center justify-around gap-4 p-4 mt-8 ">

                <div className=" shadow-lg shadow-fill  rounded-full  bg-white flex items-center justify-center flex-col w-48 h-48">
                    <Image src={'/images/Catering.svg'} className="h-24 w-24 " width={100} height={100} alt="gardo-babo-icons"></Image>
                    <h1 className="text-base text-strongText mt-4  ">Catering</h1>
                </div>

                <div className="border shadow-lg shadow-fill  rounded-full bg-white flex items-center justify-center flex-col w-48 h-48">
                    <Image src={'/images/OutsideSeating.svg'} className="h-24 w-24 " width={100} height={100} alt="gardo-babo-icons"></Image>
                    <h1 className="text-base text-strongText mt-4 ">Our Seating</h1>
                </div>

                <div className="border shadow-lg shadow-fill  rounded-full bg-white flex items-center justify-center flex-col w-48 h-48">
                    <Image src={'/images/PetsAllowed.svg'} className="h-24 w-24 " width={100} height={100} alt="gardo-babo-icons"></Image>
                    <h1 className="text-base text-strongText mt-4 ">Takeaway</h1>
                </div>

                <div className="border shadow-lg shadow-fill  rounded-full  bg-white flex items-center justify-center flex-col w-48 h-48">
                    <Image src={'/images/Takeaway.svg'} className="h-24 w-24" width={100} height={100} alt="gardo-babo-icons"></Image>
                    <h1 className="text-base text-strongText mt-4 ">Pets Allowed</h1>
                </div>
            </div>

        </div>
    )
}