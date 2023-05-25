import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiFillAccountBook,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const NavBar = () => {
  const [movilMenu, setMovilMenu] = useState(false);
const router = useRouter()
  return (
    <>
      <div className="    bg-white shadow-lg sticky z-30  top-0 px-5 py-2">

        <nav className="container m-auto sm:text-xl text-second-sm font-bold my-2  items-center   flex gap-3 h-10 sm:h-14 ">
          <div>
            {/* <h2 className="text-base  sm:text-xl ">Contructora & Inmobiliaria San Roman</h2> */}
            <img className="h-14" src="./assets/img/sanroman.svg" alt="Constructora San Roman" />
          </div>
          <div className="flex gap-20 sm:text-xl font-bold justify-end w-full ">
            <Link className={` hover:text-primary-sm hidden sm:flex ${router.pathname == '/' &&'text-primary-sm' } `} href={"/"}>
               
               Inicio 
            </Link>
           
            <Link className={`hover:text-primary-sm hidden sm:flex ${router.pathname == '/nosotros' &&'text-primary-sm' } `} href={"/nosotros"}>
              Nosotros 
            </Link>
            <Link className={`hover:text-primary-sm hidden sm:flex ${router.pathname == '/asesores' &&'text-primary-sm' } `} href={"/asesores"}>
              Asesores 
            </Link>
            <Link className={`hover:text-primary-sm hidden sm:flex ${router.pathname == '/contact' &&'text-primary-sm' } `} href={"/contact"}>
              Contactanos
            </Link>
          </div>
          <div
            onClick={() => setMovilMenu(!movilMenu)}
            className="absolute sm:hidden  top-2 right-2"
          >
            <AiOutlineMenu className="text-primary-sm text-4xl  " />
          </div>
        </nav>
        {movilMenu && (
          <div className=" bg-black absolute z-30    bg-opacity-70 left-0 top-0 bottom-0 w-full h-[100vh]  ">
            <nav className="absolute left-1/3 flex flex-col items-center  gap-4 bg-black right-0 h-[100vh]">
              <div
                onClick={() => setMovilMenu(!movilMenu)}
                className="   top-2 right-2"
              >
                <AiOutlineClose className="text-primary-sm text-4xl absolute top-2 right-2" />
              </div>
              <Link
                onClick={() => setMovilMenu(false)}
                className=" mt-10 text-white sm:flex"
                href={"/"}
              >
                Inicio
              </Link >
              <Link
               onClick={() => setMovilMenu(false)}
              className=" text-white  " href={"/nosotros"}>
                Nosotros
              </Link>
              
              <Link
               onClick={() => setMovilMenu(false)}
              className=" text-white  " href={"/asesores"}>
                asesores
              </Link>
              
              <Link
               onClick={() => setMovilMenu(false)}
              className=" text-white  " href={"/contact"}>
                Contactanos
              </Link>

               
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
