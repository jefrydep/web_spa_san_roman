
import { Inter } from "next/font/google";

import dataProject from "../data/dataProject.json";
import Project from "@/components/project/Project";
import { useRouter } from "next/router";
import Layout from "@/components/layouts/Layout";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = dataProject;
  console.log(data);
  
  
  return (
    <>
      <Layout title="San Roman Constructora & Inmobiliaria">
        <div className="bg-gradient-to-r bg-second-sm ">
        <section className="bg-[url('/assets/img/urb-nueva-estrella.jpg')] bg-fixed    bg-cover   h-[60vh] opacity-60 relative ">
          
        </section>
        <div className="flex flex-col gap-1 h-full   justify-around items-center absolute -top-28 sm:left-1/4 ">
            <div className="bg-primary-sm absolute shadow-lg  max-w-3xl mx-4 rounded-xl ">
              <div className="bg-white relative -top-7 shadow-md rounded-xl   px-4 py-2 text-center h-24 mx-6">
                <h2 className="font-bold text-xl sm:text-4xl  text-primary-sm">
                La llave para construir tu futuro está en nuestros terrenos.
                
                </h2>
              </div>
            </div>
            <div className="mx-3">
              <h2 className=" font-bold text-primary-sm0 text-2xl sm:text-5xl text-center">
                Asesoria, consultoria y gestion inmobiliaria
              </h2>
            </div>
            <button className="hover:scale-110 text-white font-bold bg-primary-sm px-3 shadow-sm py-2 rounded-3xl text-xl">
            <a className='text-lg' target='_blank' href="https://wa.me/51953306637">
              contactanos</a>
            </button>
          </div>
        </div>
        <section className="  text-white font-bold bg-second-sm sm:h-48 flex  ">
          <div className="container m-auto flex flex-col pt-6 pb-6 items-center gap-2 sm:grid  sm:grid-cols-4   ">
            <h3 className="text-2xl lg:text-4xl text-primary-sm0 ">
              ¿ POR QUE ELEGIRNOS?
            </h3>

            <div className="text-center">
              <h3 className="text-4xl lg:text-6xl">+2</h3>
              <h3 className="text-primary-sm0">Años de experiencia</h3>
            </div>
            <div className="text-center">
              <h3 className="text-4xl  lg:text-6xl">+100</h3>
              <h3 className="text-primary-sm0">Clientes</h3>
            </div>
            <div className=" text-center  sm:text-end  ">
              <h3 className="text-4xl lg:text-6xl">+300</h3>
              <h3 className="text-primary-sm0">Ventas efectuadas</h3>
            </div>
          </div>
        </section>
        <section className="flex bg-white py-3 flex-col gap-3 text-center ">
          <div className="text-4xl sm:py-8 py-4 sm:text-6xl  font-bold border-b-4 sm:border-0 border-second-sm rounded-full">
            <h2 className="text-gray-950">Nuestros Proyectos</h2>
          
          </div>
          <div className="container  flex flex-col m-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((project) => (
              <Project
                id={project.id}
                key={project.id}
                img={project.img}
                imgTitle={project.descriptionImg}
                logo={project.logo!}
                precio={project.details.precio}
              />
            ))}
          </div>
        </section>
        <Footer nombre='jefrydep@gmail.com'/>    
      </Layout>

    </>
  );
}
