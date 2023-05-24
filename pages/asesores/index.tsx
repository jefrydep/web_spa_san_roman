import Hero from '@/components/hero/Hero';
import CardNosotros from '@/components/nosotros/CardNosotros';
import Image from 'next/image';
import React from 'react'
export default function asesores() {
  const dataHome = [
    {
      slogan:
        "Nuestros asesores",
      imgUrl: "/assets/img/nosotros.jpg",
    },
  ];
  return (
    <>
      <Hero imgUrl={dataHome[0].imgUrl} slogan={dataHome[0].slogan} />

      <div className='container m-auto  '>
        <div className='bg-white  flex  items-center flex-col py-6'>
          <section className='px-4 mx-2 sm:w-2/3 items-center flex flex-col sm:grid sm:grid-cols-2 mb-2 pb-2 pt-3 mt-2 bg-white'>
            <div className=''>
              {/* <Image src='/assets/img/nosotros.jpg' height={500} width={400} alt='San Roman' /> */}
            </div>
            </section>
            </div>
            </div>
             
            </>)
             }