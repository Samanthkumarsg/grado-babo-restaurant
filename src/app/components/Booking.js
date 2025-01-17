import Image from "next/image"
import Link from "next/link"

const Booking = () => {
    return (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-stretch justify-between bg-fill bg-hero ">
            <div className="flex-1 flex sm:flex md:flex lg:flex xl:flex items-start justify-start relative ">
                <Image
                    src={'/images/wines.svg'}
                    width={500}
                    height={500}
                    alt="Catering Icon"
                    className=" object-contain w-1/3 sm:w-1/3 md:w-1/3 lg:w-2/3 xl:w-2/3 h-auto"
                />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 ">
                <div className="">
                    <Image
                        src={'/images/eventbrite.svg'}
                        width={0}
                        height={0}
                        alt="Eventbrite"
                        className="w-40 h-16 "
                    />
                </div>
                <h1 className="text-4xl text-strongText font-bold mb-2 text-center"> Wine tasting event</h1>
                <p className="text-xl text-textWeak  mb-6 max-w-lg text-center">Follow us on event brite to stay updated on our next wine tasting event</p>
                <Link href="tel:+49 17663341686"><button className="uppercase bg-primary text-white text-sm border-2 border-primary rounded-md px-20 py-2 font-figtree font-medium tracking-widest hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                    Book with Eventbrite
                </button>
                </Link>
            </div>
            <div className="flex-1 flex items-end justify-end  ">
                <Image
                    src={'/images/wine.svg'}
                    width={500}
                    height={500}
                    className="object-contain h-auto w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/2 xl:w-1/2 "
                    alt="Wine"
                />
            </div>
        </div>
    )
}

export default Booking