import Image from "next/image";

export default function HeroSection() {
  return (
<div className="h-[86vh]">
<div className="h-full flex flex-col md:flex-row">
      
      <div className="h-full md:w-1/2 border-r p-3 flex flex-col items-center justify-center bg-lightfill bg-local bg-hero py-14 bg-cover bg-center">
        <h1 className="text-strongText font-normal text-4xl leading-10 font-playfair mb-2 uppercase tracking-widest">Grado Babo</h1>
        <h6 className="text-textWeak text-sm uppercase tracking-widest">An Italian Vegan Restaurant</h6>

        <div className="text-textWeak font-figtree font-normal text-base my-8 flex flex-col items-center tracking-widest leading-7">
          <h6 >Monday to Friday 5:00pm to 10pm</h6>
          <h6>Sunday Closed</h6>
          <h6>Address line 1, Postcode, Berlin</h6>
        </div>
        <div className="">
            <button className="uppercase text-primary text-sm border-2 border-primary px-20 py-2 tracking-widest font-figtree font-medium hover:bg-primary hover:text-white">Book your table</button>
        </div>
      </div>

      <div className="h-full md:w-1/2 bg-cover bg-center bg-heroRight bg-no-repeat">
        
      </div>

    </div>
    </div>

  );
}
