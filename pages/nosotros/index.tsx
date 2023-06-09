import Hero from '@/components/hero/Hero';
import Layout from '@/components/layouts/Layout';
import CardNosotros from '@/components/nosotros/CardNosotros';
import Image from 'next/image';
import React from 'react'
import { BsSend } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
export default function nosotros() {
  const dataHome = [
    {
      slogan:
        "¿Quienes Somos?",
      imgUrl: "/assets/img/fondo-nosotros.jpg",
    },
  ];
  return (
    <>
    <Layout title='Nosotros'>

      <Hero imgUrl={dataHome[0].imgUrl} slogan={dataHome[0].slogan} />

      <div className='container m-auto  '>
        <div className='bg-white  flex  items-center flex-col py-6'>
          <section className='px-4 mx-2 sm:w-2/3 items-center flex flex-col sm:grid sm:grid-cols-2 mb-2 pb-2 pt-3 mt-2 bg-white'>
            <div className=''>
              <Image src='/assets/img/fondo-nosotros.jpg' height={500} width={400} alt='San Roman' />
            </div>

            <div className='text-second-sm'>
              <h4 className='my-4 text-primary-sm text-3xl font-bold text-center '>Sobre Nosotros</h4>
              <p className='text-justify'>
                Hoy por hoy San Román es uno de los líderes en el rubro inmobiliario de la ciudad de Juliaca gracias al
                gran equipo capacitado con la que cuenta y la gran acogida del mercado, la empresa tuvo un gran
                crecimiento en tan solo un año y San Román más allá de vender lotes o casas vende desarrollo para las
                ciudades y un hogar para las familias.
                SAN ROMAN CONSTRUCTORA INMOBILIARIA SAC, está especializada en actividades inmobiliarias
                realizadas con bienes propios o arrendados. Esta registrada dentro de las sociedades mercantiles y
                comerciales como una SOCIEDAD ANONIMA CERRADA.
              </p>
            </div>
          </section>
          <section className='grid sm:grid-cols-2 gap-4 sm:w-2/3 mx-3 text-second-sm'>
            <div className='  border border-primary-sm0 rounded-2xl'>


              <CardNosotros title='Mision' icono={<BsHeartFill />} description='Nuestra misión como empresa constructora e inmobiliaria es la cooperación proactiva para el
                desarrollo de nuestra región. Desarrollo de proyectos y construcciones de acuerdo con los
                estándares más exigentes, en seguridad, calidad y puntualidad. Satisfacer las necesidades y
                expectativas de nuestros clientes, todo con el único propósito de lograr que nuestros usuarios
                obtengan el mejor retorno de su inversión, desarrollando y motivando a nuestros colaboradores'/>
            </div>

            <div className='border border-primary-sm0 rounded-2xl '>
              <CardNosotros title='Vision' icono={<BsSend />} description='Ser una empresa líder en construcción, consultoría e inmobiliaria, reconocida por su capacidad,
                calidad y cumplimiento con las normas de seguridad; empleando los procedimientos constructivos
                innovadores que van a permitir la construcción de obras más confortables la cual generara un mejor
                estándar de vida a la población que confíen en nuestro equipo y la buena práctica que empleamos.'/>
            </div>


          </section>
        </div>
      </div>

          </Layout>
    </>
  )
}