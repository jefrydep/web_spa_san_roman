import Image from "next/image";
import React from "react";
interface heroProps {
  slogan?: string;
  imgUrl: string;
  logo?: string;
}
const Hero = ({ slogan, imgUrl, logo }: heroProps) => {
  return (
    <>
      <div className=" ">
        <section className= "bg-fixed sm:bg-cover bg-cover bg-center h-[60vh]" style={{ backgroundImage: `url(${imgUrl})`}}>
          <div className="flex flex-col gap-6 h-full   justify-around items-center  ">
            <div className="bg-primary-sm absolute shadow-lg  max-w-3xl mx-4 rounded-xl ">
              <div className="bg-white relative -top-7 shadow-md flex items-center px-8  rounded-xl    text-center h-24 mx-6">
                <h4 className="text-3xl font-bold text-primary-sm">

                {slogan}
                </h4>
                <Image width={400} height={400} src={logo!} alt="proyecto San Roman" />
              </div>
            </div>
            <div className="mx-3">
              <h2 className=" font-bold text-white text-2xl sm:text-4xl text-center">
                Asesoria, consultoria y gestion inmobiliaria
              </h2>
            </div>
            <button className="hover:scale-110 text-white font-bold bg-primary-sm px-3 shadow-sm py-2 rounded-3xl text-xl">
            <a className='text-lg' target='_blank' href="https://wa.me/51953306637">
              contactanos</a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
