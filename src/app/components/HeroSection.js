import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-[86vh] w-full">
      <div className="h-full w-full border-r p-3 flex flex-col items-center justify-center py-14 bg-fill bg-local bg-hero bg-cover bg-center bg-no-repeat">
        <h1 className="text-strongText font-semibold text-4xl leading-10 font-playfair mb-2 uppercase tracking-widest">
          Grado Babo
        </h1>
        <h6 className="text-textWeak text-sm uppercase tracking-widest">
          An Italian Vegan Restaurant
        </h6>
        <div className="max-w-2xl  text-textWeak text-xl tracking-wider  font-normal mt-6 flex flex-col text-center leading-7">
          Experience the magic of refined Italian cuisine in Berlin crafted with fresh, seasonal ingredients and boundless passion.
        </div>
        <div className="max-w-2xl  text-textWeak text-xl tracking-wider  font-normal flex flex-col text-center leading-7 my-6">
          Handjerystrasse 55, 12161 Berlin
        </div>

        <Link href="tel:+49 17663341686"><button className="cursor-pointer uppercase bg-primary text-sm border-2 border-primary rounded-md px-20 py-3 font-figtree font-medium tracking-widest text-white transition-all duration-100 ease-in-out hover:bg-primary/90 ">
          Book your table
        </button>
        </Link>
      </div>

    </div>
  );
}
