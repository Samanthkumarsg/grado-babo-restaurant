import Image from "next/image";

export default function Services(){
    return(
        <div className="w-full py-12 flex flex-col items-center justify-around border bg-lightfill">
            <div className="">  
                <h1 className="text-lg text-strongText">Our Services</h1>
            </div>
        <div className="w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 border flex flex-wrap items-center justify-around gap-4 p-4 mt-4 ">
            <div className="border-2 border-primary h-40 w-40 rounded-full bg-white flex items-center justify-center">
                <Image src={'/images/Catering.svg'} className="h-28 w-28" width={100} height={100}  alt="gardo-babo-icons"></Image>
            </div>

            <div className="border-2 border-primary h-40 w-40 rounded-full bg-white flex items-center justify-center">
                <Image src={'/images/Catering.svg'} className="h-28 w-28" width={100} height={100}  alt="gardo-babo-icons"></Image>
            </div>

            <div className="border-2 border-primary h-40 w-40 rounded-full bg-white flex items-center justify-center">
                <Image src={'/images/Catering.svg'} className="h-28 w-28" width={100} height={100}  alt="gardo-babo-icons"></Image>
            </div>

            <div className="border-2 border-primary h-40 w-40 rounded-full bg-white flex items-center justify-center">
                <Image src={'/images/Catering.svg'} className="h-28 w-28" width={100} height={100}  alt="gardo-babo-icons"></Image>
            </div>
        </div>

        </div>
    )
}