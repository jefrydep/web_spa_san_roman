import Layout from '@/components/layouts/Layout';
import Footer from '@/components/ui/Footer';
import React from 'react'
import { MdWhatsapp, MdFacebook } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";
import { SiInstagram, SiTiktok } from "react-icons/si";
export default function contact   ()   {
  return (
    < > 
    <Layout title='Contactanos'>

    <div className='container m-auto lg:py-40'>

     <div className=" p-4 lg:grid lg:grid-cols-2  "  >
        <div className='flex flex-col gap-3' >
            <h2 className='text-primary-sm font-bold text-2xl mb-7 sm:text-4xl'>Escríbenos</h2>
                <div className='flex'>
                      <h5 className="text-4xl font-bold text-primary-sm mx-2"><MdWhatsapp/></h5>
                      <a className='text-lg' target='_blank' href="https://wa.me/51953306637">953306637</a>
                  </div>
            <div className='flex'>
              <h5 className="text-4xl font-bold text-primary-sm mx-2"><MdEmail/></h5>
              <a className='text-lg' target='_blank' href="https://www.gmail.com/mail/help/intl/es/about.html?iframe">inmobiliariasanro@gmail.com</a>
              </div>
            <div className='flex'>
              <h5  className="text-4xl font-bold text-primary-sm mx-2"><MdAddLocationAlt/></h5>
              <a className='text-lg' target='_blank' href="https://goo.gl/maps/NpYfeYRGkr58Kvdo6">Juliaca Jr.Ricardo Palma 302</a>
            </div>
            <div className='flex'>
              <h5 className="text-4xl font-bold text-primary-sm mx-2"><MdFacebook/></h5>
            <a className='text-lg' target='_blank' href="https://www.facebook.com/SanRomanConstructoraInmobiliaria/">facebook</a>
            </div>
            <div className='flex'>
              <h5 className="text-4xl font-bold text-primary-sm mx-2"><SiInstagram/></h5>
              <a className='text-lg' target='_blank' href="https://www.instagram.com/san_roman_inmobliliaria/">instagram</a>
            </div>
            <div className='flex'>
              <h5 className="text-4xl font-bold text-primary-sm mx-2"><SiTiktok/></h5>
              <a className='text-lg' target='_blank' href="https://www.tiktok.com/@sanromanconstructorain/">tiktok</a>
              </div>
        </div>
        <form action="https://formspree.io/f/xpzeenqj" method='POST' className='  flex flex-col gap-3 mt-4' >
        
            <h2 className='text-primary-sm font-bold text-2xl mb-7 sm:text-4xl'>Llena este formulario</h2>
            <input className='border w-full px-2 py-1' type="text" name="nombre" placeholder="Tu Nombre"  />
            <input className='border w-full px-2 py-1' type="emal" name="email" placeholder="Tu Email"  />
            <input className='border w-full px-2 py-1' type="telf" name="telefono" placeholder="Tu telefono"  />
            <textarea className='border w-full px-2 py-1 h-36' maxLength={200} name="mensaje" placeholder="Tu Mensaje..."></textarea>
            <input className='bg-primary-sm px-2 py-2 mt-10 text-white font-bold' type="submit" name="enviar" value="Enviar Mensaje"  />
        </form>
    </div>
    
    </div>
    <Footer nombre='henryjhon.pk@gmail.com'/>    
    </Layout>
     </ >
  )
}

 