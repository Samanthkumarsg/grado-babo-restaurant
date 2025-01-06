import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[90vh] w-full">
      <div className="h-full w-full border-r p-3 flex flex-col items-center justify-center py-14 bg-lightfill bg-local bg-hero animate-bg-hero">
        <div className="flex items-center">
          <Image
            src="/images/Frame 82 left.svg"
            alt="Responsive SVG"
            width={324}
            height={94}
            quality={100}
            className="w-auto h-20 mb-8"
            priority
          />
        </div>
        <h1 className="text-strongBrown font-normal text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl leading-10 font-playfair mb-2 uppercase tracking-widest">
          Grado Babo
        </h1>
        <h6 className="text-textWeak font-medium text-md md:text-lg lg:text-lg xl:text-lg   uppercase tracking-widest">
          An Italian Vegan Restaurant
        </h6>
        <div className="max-w-2xl  text-textWeak text-xl  font-playfair tracking-wider  font-normal mt-6 flex flex-col text-center leading-normal">
          Experience the magic of refined Italian cuisine in Berlin crafted with fresh, seasonal ingredients and boundless passion.
        </div>
        <div className="max-w-2xl  text-textWeak text-xl tracking-wider  font-normal flex flex-col text-center leading-7 mt-4 mb-10">
          Handjerystrasse 55, 12161 Berlin
        </div>

        <button className="cursor-pointer uppercase bg-primary text-sm  rounded-md px-16 py-3 font-figtree font-medium tracking-widest text-white transition-all duration-100 ease-in-out hover:bg-primary/90 ">
          Book your table
        </button>
      </div>

    </div>
  );
}