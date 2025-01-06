import Image from "next/image"

const BookSpecialMenu = () => {
    return (
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-stretch justify-between bg-fill bg-hero">
            <div className="flex-1 flex sm:flex md:hidden lg:flex xl:flex items-center justify-start relative py-6">
                <Image
                    src={'/images/Frame 82 left.svg'}
                    width={500}
                    height={500}
                    alt="Catering Icon"
                    className=" object-contain w-2/3 h-auto"
                />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 ">
                <div className="mb-2">
                    <h1 className='text-primary text-xl font-semibold uppercase tracking-wider '>Grado Babo</h1>

                </div>
                <h1 className="text-4xl text-strongText font-bold mb-2 text-center"> Book your own Special Menu now for only for 50€ </h1>
                <div className="text-xl text-textWeak  mb-6 max-w-lg text-center">
                    Welcome drink (0.1 Prosecco)
                    Appetizer  + 0.1 Wine
                    Main Course 1 + 0.1 Wine
                    Main Course 2 + 0.1 Wine &
                    Dessert
                </div>
                <button className="uppercase bg-primary text-white text-sm border-2 border-primary rounded-md px-20 py-2 font-figtree font-medium tracking-widest hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                    Book your table
                </button>
            </div>
            <div className="flex-1 flex sm:flex md:hidden lg:flex xl:flex items-center justify-end relative  py-6">
                <Image
                    src={'/images/Frame 82.svg'}
                    width={500}
                    height={500}
                    className="object-contain h-auto w-2/3 "
                    alt="Wine"
                />
            </div>
        </div>
    )
}

export default BookSpecialMenu