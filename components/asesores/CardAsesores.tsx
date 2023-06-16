
import Link from "next/link";
import React from "react";
import { MdCall,  MdWhatsapp } from "react-icons/md";

interface PropsAsesores {
  name: string;
  img: string;
  nivel: string;
  
  whatssap: string;
}
const CardAsesores = ({
  name,
  img,
  nivel,
  
  whatssap,
}: PropsAsesores) => {
  return (
    <>
      <div className="shadow-lg py-8 mx-2 sm:mx-0 bg-white rounded-xl px-5">
        <div className="  flex items-center flex-col gap-2 mb-5">
          <div
            className="rounded-full shadow-xl w-44 h-44   bg-cover "
            style={{ backgroundImage: `url(${img})` }}
          >
          </div>

          <h3>{name}</h3>
          <h4>{nivel} </h4>
          <div className="flex gap-4">
            <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
              <Link target="_blank" href={`https://wa.me/51${whatssap}`}>
                <MdWhatsapp
                  size={24}
                  color="white"
                />
              </Link>
            </div>
            
            <div className="bg-primary-sm rounded-full w-10 h-10 flex items-center justify-center">
              <Link target="_blank" href={`tel:+51${whatssap}`}>
                <MdCall
                  size={24}
                  color="white"
                />
              </Link>
            </div>
            
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <h5 className="text-xl font-bold text-primary-sm0 mx-2">
              <MdWhatsapp />
            </h5>
            <a
              className="text-lg text-second-sm"
              target="_blank"
              href={`https://wa.me/51${whatssap}`}
            >
              {whatssap}
            </a>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default CardAsesores;
