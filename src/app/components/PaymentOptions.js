import Image from "next/image";

export default function PaymentOptions() {
    return (
        <div className="py-20 w-full flex flex-col items-center justify-center bg-lightfill">
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-sm tracking-widest text-strongText uppercase font-medium">
                    Pay with ease
                </h1>
                <h1 className="mt-2 font-bold tracking-wide text-4xl text-strongText  ">
                    Available Payment Options
                </h1>
                <p className="mt-4 text-xl text-pretty leading-relaxed tracking-wide  text-textWeak font-normal max-w-xl text-center">
                    Choose from multiple secure and convenient method for a hassle-free checkout experience.
                </p>
            </div>
            <div className="w-full xl:w-3/4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-8 gap-3 p-4 mt-8 px-8">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/Amex.svg'}
                        width={48}
                        height={48}
                        alt="Amex"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">Amex</h1>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/Cash.svg'}
                        width={48}
                        height={48}
                        alt="Cash"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">Cash</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/Mastercard.svg'}
                        width={48}
                        height={48}
                        alt="Mastercard"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">Mastercard</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/VISA.svg'}
                        width={48}
                        height={48}
                        alt="Visa"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">Visa</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/Debit.svg'}
                        width={48}
                        height={48}
                        alt="Debit"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">Debit Card</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/ApplePay.svg'}
                        width={48}
                        height={48}
                        alt="Apple Pay"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">Apple Pay</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/Maestro.svg'}
                        width={48}
                        height={48}
                        alt="Maestro"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">Maestro</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/icons/EC.svg'}
                        width={48}
                        height={48}
                        alt="EC"
                        className="mb-2"
                    />
                    <h1 className="text-base line-clamp-2 text-textWeak text-center">EC</h1>
                </div>

            </div>
        </div>
    );
}
