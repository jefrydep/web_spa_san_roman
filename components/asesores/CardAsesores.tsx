import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCall, MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";

interface PropsAsesores {
  name: string;
  img: string;
  nivel: string;
  correo: string;
  whatssap: string;
  facebook: string;
}
const CardAsesores = ({
  name,
  img,
  nivel,
  correo,
  whatssap,
  facebook,
}: PropsAsesores) => {
  return (
    <>
      <div className="shadow-lg py-8 mx-2 sm:mx-0 bg-white rounded-xl px-5">
        <div className="  flex items-center flex-col gap-2 mb-5">
          <div
            className="rounded-full shadow-xl w-44 h-44   bg-cover "
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* <Image className=' ' height={ 0} width={0 } alt='Jefrydep' src="/assets/img/mr-robot.jpg" /> */}
          </div>

          <h3>{name}</h3>
          <h4>{nivel} </h4>
          <div className="flex gap-4">
            <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
              <Link target="_blank" href={`https://wa.me/51${whatssap}`}>
                <MdWhatsapp
                  size={24}
                  // href="https://www.gmail.com/mail/help/intl/es/about.html?iframe"
                  color="white"
                />
              </Link>
            </div>
            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <MdEmail size={24} color="white" />
            </div>
            <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
              {" "}
              <MdCall size={24} color="white" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <h5 className="text-xl font-bold text-primary-sm0 mx-2">
              <MdWhatsapp />
            </h5>
            <a
              className="text-lg text-second-sm "
              target="_blank"
              // href="https://wa.me/51953306637"
              href={`https://wa.me/51${whatssap}`}
            >
              {whatssap}
            </a>
          </div>
           
          <div className="flex">
            <h5 className="text-xl font-bold text-primary-sm0 mx-2">
              <MdEmail />
            </h5>
            <a
              className="text-lg text-second-sm"
              target="_blank"
              href="https://www.gmail.com/mail/help/intl/es/about.html?iframe"
            >
              {correo}
            </a>
          </div>
          <div className="flex">
            <h5 className="text-xl font-bold text-primary-sm0 mx-2">
              <MdFacebook />
            </h5>
            <a
              className="text-lg text-second-sm"
              target="_blank"
              href={facebook}
            >
              facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAsesores;
