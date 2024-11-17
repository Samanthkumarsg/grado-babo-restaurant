import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-[86vh] w-full flex flex-col md:flex-row">
      <div className="h-full md:w-1/2 border-r p-3 flex flex-col items-center justify-center py-14 bg-lightfill bg-local bg-hero bg-cover">
        <h1 className="text-strongText font-normal text-4xl leading-10 font-playfair mb-2 uppercase tracking-widest">
          Grado Babo
        </h1>
        <h6 className="text-textWeak text-sm uppercase tracking-widest">
          An Italian Vegan Restaurant
        </h6>
        <div className="text-textWeak text-sm tracking-wider font-figtree font-normal my-8 flex flex-col items-center leading-7">
          <h6>Monday to Friday: 5:00pm - 10:00pm</h6>
          <h6>Sunday: Closed</h6>
          <h6>Address line 1, Postcode, Berlin</h6>
        </div>
        <button className="uppercase text-primary text-sm border-2 border-primary px-20 py-2 font-figtree font-medium tracking-widest hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
          Book your table
        </button>
      </div>

      <div className="h-full md:w-1/2 bg-cover bg-center bg-heroRight bg-no-repeat"></div>
    </div>
  );
}
