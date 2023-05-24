import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdWhatsapp, MdFacebook } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLandslide, MdAddLocationAlt } from "react-icons/md";
import { SiInstagram, SiTiktok } from "react-icons/si";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer className="bg-second-sm font-SVNgilroy ">
        <div className="flex container m-auto flex-col gap-4 sm:grid sm:grid-cols-4 p-4    text-gray-300 mt-4 px-6">
          <div>
            <h3 className="text-center font-bold text-xl mb-5 text-primary-sm0">
              Inmobiliarias del Peru
            </h3>
            <div className=" text-justify">
              <p className="">
                02 años de expericiencia desarollando proyectos en los distritos
                mas allegados de juliaca, nos permite manejar informacion que
                nos posicionan como proyectos de alta revalorizacion y valor de
                compras.
              </p>
              <p>
                Hoy por hoy San Román es uno de los líderes en el rubro
                inmobiliario de la ciudad de Juliaca gracias al gran equipo
                capacitado con la que cuenta y la gran acogida del mercado, la
                empresa tuvo un gran crecimiento en tan solo un año.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5 text-primary-sm0">
              links recomendados
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <h5 className="text-xl font-bold text-primary-sm0 mx-2">
                  <MdWhatsapp />
                </h5>
                <a
                  className="text-lg"
                  target="_blank"
                  href="https://wa.me/51953306637"
                >
                  953306637
                </a>
              </div>
              <div className="flex">
                <h5 className="text-xl font-bold text-primary-sm0 mx-2">
                  <MdEmail />
                </h5>
                <a
                  className="text-lg"
                  target="_blank"
                  href="https://www.gmail.com/mail/help/intl/es/about.html?iframe"
                >
                  inmobiliariasanro@gmail.com
                </a>
              </div>
              <div className="flex">
                <h5 className="text-xl font-bold text-primary-sm0 mx-2">
                  <MdAddLocationAlt />
                </h5>
                <a
                  className="text-lg"
                  target="_blank"
                  href="https://goo.gl/maps/NpYfeYRGkr58Kvdo6"
                >
                  Juliaca Jr.Ricardo Palma 302
                </a>
              </div>
              <div className="flex">
                <h5 className="text-xl font-bold text-primary-sm0 mx-2">
                  <MdFacebook />
                </h5>
                <a
                  className="text-lg"
                  target="_blank"
                  href="https://www.facebook.com/SanRomanConstructoraInmobiliaria/"
                >
                  facebook
                </a>
              </div>
              <div className="flex">
                <h5 className="text-xl font-bold text-primary-sm0 mx-2">
                  <SiInstagram />
                </h5>
                <a
                  className="text-lg"
                  target="_blank"
                  href="https://www.instagram.com/san_roman_inmobliliaria/"
                >
                  instagram
                </a>
              </div>
              <div className="flex">
                <h5 className="text-xl font-bold text-primary-sm0 mx-2">
                  <SiTiktok />
                </h5>
                <a
                  className="text-lg"
                  target="_blank"
                  href="https://www.tiktok.com/@sanromanconstructorain/"
                >
                  tiktok
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-5 text-primary-sm0">
              links rapidos
            </h3>

            <div className=" ">
              <div className=" flex flex-col ">
                <Link
                  className={`hover:text-primary-sm0  ${
                    router.pathname == "/" && "text-primary-sm0"
                  } `}
                  href={"/"}
                >
                  Inicio
                </Link>
                <Link
                  className={`hover:text-primary-sm0  ${
                    router.pathname == "/contact" && "text-primary-sm0"
                  } `}
                  href={"/contact"}
                >
                  Contactanos
                </Link>
                     {/* <Link className={`hover:text-primary-sm0 hidden sm:flex ${router.pathname == '/project' &&'text-primary-sm0' } `} href={"/project"}>
                     proyectos
                   </Link> */}
                <Link
                  className={`hover:text-primary-sm0 ${
                    router.pathname == "/nosotros" && "text-primary-sm0"
                  } `}
                  href={"/nosotros"}
                >
                  Nosotros
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-5 font-bold text-primary-sm0">
              Necesitas informacion
            </h3>
            <div>
              <h4>whatsapp : 958203939</h4>
              <h4>jefrydep@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="text-center  text-gray-300 border-t-2 p-4  ">
          <h4>© Desarollado por JFH</h4>
          <h4>2023 inmbiliariaSanRoman</h4>
          <h4>2023 inmbiliariaSanRoman</h4>©
        </div>
      </footer>
    </>
  );
};

export default Footer;
