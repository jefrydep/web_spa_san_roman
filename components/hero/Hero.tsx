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
        {/* <section className={imgUrl + " " + "bg-fixed sm:bg-contain bg-cover bg-center h-[60vh]"}> */}
        <section className= "bg-fixed sm:bg-contain bg-cover bg-center h-[60vh]" style={{ backgroundImage: `url(${imgUrl})`}}>
          <div className="flex flex-col gap-6 h-full   justify-around items-center  ">
            <div className="bg-primary-sm absolute shadow-lg  max-w-3xl mx-4 rounded-xl ">
              <div className="bg-white relative -top-7 shadow-md flex items-center px-4  rounded-xl    text-center h-24 mx-6">
                 
                <img className="h-32 " src={logo} alt="" />
              </div>
            </div>
            <div className="mx-3">
              <h2 className=" font-bold text-white text-2xl sm:text-4xl text-center">
                Asesoria, consultoria y gestion inmobiliaria
              </h2>
            </div>
            <button className="hover:scale-110 text-white font-bold bg-primary-sm px-3 shadow-sm py-2 rounded-3xl text-xl">
              contactanos
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
