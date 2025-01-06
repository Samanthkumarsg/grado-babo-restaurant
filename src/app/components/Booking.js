import Image from "next/image"

const Booking = () => {
    return (
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-stretch justify-between bg-fill bg-hero ">
            <div className="flex-1 flex sm:flex md:hidden lg:flex xl:flex items-start justify-start relative ">
                <Image
                    src={'/images/wines.svg'}
                    width={500}
                    height={500}
                    alt="Catering Icon"
                    className=" object-contain w-2/3 h-auto"
                />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 ">
                <div className="mb-2">
                    <Image
                        src={'/images/eventbrite-logo.svg'}
                        width={0}
                        height={0}
                        alt="Eventbrite"
                        className="w-32 h-auto  "
                    />
                </div>
                <h1 className="text-4xl text-strongText font-bold mb-2 text-center"> Wine tasting event</h1>
                <p className="text-xl text-textWeak  mb-6 max-w-lg text-center">Follow us on event brite to stay updated on our next wine tasting event</p>
                <button className="uppercase bg-primary text-white text-sm border-2 border-primary rounded-md px-20 py-2 font-figtree font-medium tracking-widest hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                    Book your table
                </button>
            </div>
            <div className="flex-1 flex items-end justify-end  ">
                <Image
                    src={'/images/wine.svg'}
                    width={500}
                    height={500}
                    className="object-contain h-auto w-1/2 "
                    alt="Wine"
                />
            </div>
        </div>
    )
}

export default Booking