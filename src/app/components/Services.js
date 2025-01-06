import Image from "next/image";

export default function Services() {
    return (
        <div className="w-full px-8 py-28 flex flex-col items-center justify-around bg-lightfill bg-hero">
            <div className="w-full max-w-screen-xl flex flex-col items-start justify-start ">
                <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                    Our Services
                </h1>
                <h1 className="text-3xl font-bold tracking-wide text-strong mt-2">Experience Grado Babo</h1>
                <p className="text-textWeak text-xl mt-4 max-w-2xl text-pretty leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. In risus vitae diam nisl amet. Nunc nulla felis nulla vulputate tempor felis pretium quam pretium. Ut porttitor ut augue adipiscing convallis. Porta a eu vitae aliquet pellentesque lobortis vitae.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-8  gap-8 ">
                    <div className="bg-white rounded-xl flex flex-col items-start p-8 drop-shadow-md  ">
                        <div className="bg-lightfill rounded-full  flex items-center justify-center w-14 h-14 ">
                            <Image
                                src={'/images/icons/home-delivery.svg'}
                                width={0}
                                height={0}
                                alt="Catering Icon"
                                className="h-8 w-8"
                            />
                        </div>
                        <h1 className="text-2xl text-strong font-bold mb-2 mt-4 ">Home Delivery</h1>
                        <p className="text-textWeak text-base leading-relaxed line-clamp-3 ">
                            Relax at home while we deliver your favorite wines right to your doorstep—perfect for any occasion.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-start p-8 drop-shadow-md ">
                        <div className="bg-lightfill rounded-full  flex items-center justify-center w-14 h-14 ">
                            <Image
                                src={'/images/icons/shop.svg'}
                                width={0}
                                height={0}
                                alt="Catering Icon"
                                className="h-8 w-8"
                            />
                        </div>
                        <h1 className="text-2xl text-strong font-bold mb-2 mt-4 ">Shop</h1>
                        <p className="text-textWeak text-base leading-relaxed ">
                            Explore our curated wine selection and find the ideal bottle to make every moment special.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-start p-8 drop-shadow-md">
                        <div className="bg-lightfill rounded-full  flex items-center justify-center w-14 h-14 ">
                            <Image
                                src={'/images/icons/dine.svg'}
                                width={0}
                                height={0}
                                alt="Catering Icon"
                                className="h-8 w-8"
                            />
                        </div>
                        <h1 className="text-2xl text-strong font-bold mb-2 mt-4 ">Dine in</h1>
                        <p className="text-textWeak text-base leading-relaxed">
                            Enhance your dining experience with wines expertly paired to complement your meal.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
}
