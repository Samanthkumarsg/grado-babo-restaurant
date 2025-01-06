import Image from "next/image";

export default function Contact() {
    return (
        <div className="h-full  w-full border-r px-8 py-16 flex flex-col items-center justify-center bg-white bg-local ">
            <div className="w-full max-w-screen-xl flex flex-col ">
                <div className="flex items-start justify-center flex-col">
                    <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                        QUICK INFO
                    </h1>
                    <h1 className="mt-2 font-bold tracking-wide text-4xl text-strongText  ">
                        Everything at a Glance
                    </h1>
                    <p className="mt-4 text-xl text-pretty leading-relaxed tracking-wide  text-textWeak font-normal max-w-xl text-start">
                        Find our details all in one place so you can connect with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-8  gap-8 ">
                    <div className="bg-white rounded-xl flex flex-col items-start p-8 drop-shadow-md  ">
                        <div className="bg-lightfill rounded-full  flex items-center justify-center w-14 h-14 ">
                            <Image
                                src={'/images/icons/location.svg'}
                                width={0}
                                height={0}
                                alt="location Icon"
                                className="h-6 w-6"
                            />
                        </div>
                        <h1 className="text-2xl text-strong font-bold mb-2 mt-4 ">Find Us</h1>
                        <p className="text-textWeak text-base leading-relaxed line-clamp-3 ">
                            Handjerystrasse 55, 12161 Berlin
                        </p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-start p-8 drop-shadow-md ">
                        <div className="bg-lightfill rounded-full  flex items-center justify-center w-14 h-14 ">
                            <Image
                                src={'/images/icons/mail.svg'}
                                width={0}
                                height={0}
                                alt="email Icon"
                                className="h-6 w-6"
                            />
                        </div>
                        <h1 className="text-2xl text-strong font-bold mb-2 mt-4 ">Email</h1>
                        <p className="text-textWeak text-base leading-relaxed ">
                            gradobaboberlin@gmail.com
                        </p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-start p-8 drop-shadow-md">
                        <div className="bg-lightfill rounded-full  flex items-center justify-center w-14 h-14 ">
                            <Image
                                src={'/images/icons/call.svg'}
                                width={0}
                                height={0}
                                alt="call Icon"
                                className="h-6 w-6"
                            />
                        </div>
                        <h1 className="text-2xl text-strong font-bold mb-2 mt-4 ">Contact</h1>
                        <p className="text-textWeak text-base leading-relaxed">
                            +49 17663341686
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}
