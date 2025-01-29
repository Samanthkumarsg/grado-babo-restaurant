import Image from "next/image";

const CusineImages = () => {
    return (
        <div className=" flex items-center justify-center md:justify-center lg:justify-start xl:justify-start w-full py-6 ">

            <div className=" flex flex-col items-end justify-center">
                <div className=" flex items-center justify-end">
                    <Image
                        src={'/images/OurCuisine.svg'}
                        width={0}
                        height={0}
                        alt="Catering Icon"
                        className="size-full py-6"
                    />
                </div>


            </div>


        </div>
    )
}

export default function CusineSection() {
    return (
        <div className="w-full bg-lightfill px-8 py-20  flex items-center justify-center">
            <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center ">

                <div className="hidden xs:hidden  sm:hidden md:hidden lg:flex xl:flex   ">
                    <CusineImages />
                </div>

                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                        OUR CUISINE
                    </h1>
                    <h1 className="text-3xl font-bold tracking-wide text-strong mt-2 ">Experience our Traditional Cuisine</h1>


                    <div className="flex lg:hidden xl:hidden ">
                        <CusineImages />
                    </div>

                    <p className="text-textWeak text-xl mt-4 max-w-2xl md:w-full text-pretty leading-relaxed ">
                        Discover the true taste of traditional Italian cuisine with a vegan twist. Each dish, made with fresh and organic ingredients, embodies the authenticity and sustainability of our heritage.
                        <br />
                        <br />

                        We also offer catering for events and take away to bring the taste of Italy to your home. We look forward to welcoming you!
                    </p>

                </div>
            </div>
        </div >
    )
}
