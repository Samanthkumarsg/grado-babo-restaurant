import Image from "next/image";

const WineImages = () => {
    return (
        <div className=" flex items-center justify-center md:justify-center lg:justify-end xl:justify-end w-full py-6 ">

            <div className=" flex flex-col items-end justify-center">
                <div className=" flex items-center justify-end">
                    <Image
                        src={'/images/OurWines.svg'}
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

export default function WineSection() {
    return (
        <div className="w-full bg-lightfill px-8 py-20  flex items-center justify-center">
            <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center ">



                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                        OUR Wines
                    </h1>
                    <h1 className="text-3xl font-bold tracking-wide text-strong mt-2 ">Experience our Wines</h1>


                    <div className="flex lg:hidden xl:hidden ">
                        <WineImages />
                    </div>

                    <p className="text-textWeak text-xl mt-4 max-w-2xl md:w-full text-pretty leading-relaxed ">
                        Explore our natural and orange wines, true expressions of the land and tradition, perfect for those seeking authentic and unconventional flavors. Come and taste the passion in every glass!
                    </p>

                    <h1 className="text-2xl font-bold tracking-wide text-strong mt-6 ">Mocktails</h1>
                    <p className="text-textWeak text-xl mt-2 max-w-2xl md:w-full text-pretty leading-relaxed ">
                        Our place isn&apos;t just about wines—dive into our creative world of mocktails! Refreshing, flavorful, and alcohol-free, our mocktails are crafted with the finest ingredients to bring you a perfect blend of taste and originality. Experience a new way to toast, full of color and creativity!
                    </p>

                </div>

                <div className="hidden xs:hidden  sm:hidden md:hidden lg:flex xl:flex   ">
                    <WineImages />
                </div>

            </div>
        </div >

    )
}
