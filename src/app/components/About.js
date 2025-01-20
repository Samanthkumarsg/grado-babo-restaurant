import Image from "next/image";

export default function About() {
    return (
        <div className="w-full bg-lightfill px-8 py-16  flex items-center justify-center bg-hero bg-bottom ">
            <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center justify-center ">
                <div className="hidden xs:hidden sm:hidden md:flex lg:flex xl:flex items-center justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start w-full">
                    <Image
                        src={'/images/about.svg'}
                        width={0}
                        height={0}
                        alt="Catering Icon"
                        className="size-4/5"
                    />
                </div>
                <div className="">
                    <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                        About Us
                    </h1>
                    <h1 className="text-3xl font-bold tracking-wide text-strong mt-2">Story of Grado Babo</h1>

                    <div className="flex xs:flex sm:flex md:hidden lg:hidden xl:hidden items-center justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start w-full py-6">
                        <Image
                            src={'/images/about.svg'}
                            width={0}
                            height={0}
                            alt="Catering Icon"
                            className="size-4/5"
                        />
                    </div>


                    <p className="text-textWeak text-xl mt-4 max-w-2xl text-pretty leading-relaxed ">
                        Welcome to Grado Babo, Berlin’s one-of-a-kind vegan Italian restaurant, where tradition meets ethical innovation. Born from my dream to create extraordinary Italian cuisine, Grado Babo reimagines the best of Italian flavors with refined vegan dishes made from fresh, seasonal ingredients.
                        <br />
                        <br />
                        Grado Babo is more than just a restaurant—it’s an unforgettable experience. Come and discover the magic of vegan Italian cuisine. See you soon!
                    </p>
                    <div className="mt-8 flex items-center justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start">
                        <button className="uppercase bg-primary text-white text-sm border-2 border-primary rounded-md px-20 py-2 font-figtree font-medium tracking-widest hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                            Visit Grado Babo
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}