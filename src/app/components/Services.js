import Image from "next/image";

export default function Services() {
    return (
        <div className="w-full py-28 flex flex-col items-center justify-around bg-lightfill">
            <div>
                <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                    Our Services
                </h1>
            </div>

            <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mt-8">
                <div className="flex items-center justify-center flex-col">
                    <div className="shadow-md shadow-fill rounded-full bg-white flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48">
                        <Image
                            src={'/images/Catering.svg'}
                            width={96}
                            height={96}
                            alt="Catering Icon"
                            className="h-20 w-20"
                        />
                    </div>
                    <h1 className="text-base text-strongText mt-4 text-center">Catering</h1>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <div className="shadow-md shadow-fill rounded-full bg-white flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48">
                        <Image
                            src={'/images/OutsideSeating.svg'}
                            width={96}
                            height={96}
                            alt="Outside Seating Icon"
                            className="h-20 w-20"
                        />
                    </div>
                    <h1 className="text-base text-strongText mt-4 text-center">Our Seating</h1>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <div className="shadow-md shadow-fill rounded-full bg-white flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48">
                        <Image
                            src={'/images/PetsAllowed.svg'}
                            width={96}
                            height={96}
                            alt="Pets Allowed Icon"
                            className="h-20 w-20"
                        />
                    </div>
                    <h1 className="text-base text-strongText mt-4 text-center">Pets Allowed</h1>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <div className="shadow-md shadow-fill rounded-full bg-white flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48">
                        <Image
                            src={'/images/Takeaway.svg'}
                            width={96}
                            height={96}
                            alt="Takeaway Icon"
                            className="h-20 w-20"
                        />
                    </div>
                    <h1 className="text-base text-strongText mt-4 text-center">Takeaway</h1>
                </div>
            </div>
        </div>
    );
}
