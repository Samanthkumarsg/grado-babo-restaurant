import Image from "next/image";

const WineImages = () => {
    return (
        <div className=" flex items-start flex-row sm:flex-row md:flex-row lg:flex-col xl:flex-col justify-start md:justify-center lg:justify-start xl:justify-start w-full p-2  ">

            <div className="w-full flex-1 flex items-start justify-center ">
                <Image
                    src={'/images/wineGlass.svg'}
                    width={0}
                    height={0}
                    alt="Catering Icon"
                    className="size-64 md:size-72 lg:size-72 xl:size-72 "
                />
            </div>


            <div className="w-full flex-1 flex items-center justify-end ">
                <Image
                    src={'/images/wineGlasses.svg'}
                    width={0}
                    height={0}
                    alt="Catering Icon"
                    className="size-40 md:size-52 lg:size-60 xl:size-60 relative "
                />
            </div>
        </div>
    )
}

export default function WineSection() {
    return (
        <div className="w-full bg-lightfill px-8 py-20  flex items-center justify-center bg-hero ">
            <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center ">



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
