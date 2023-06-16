import CardAsesores from "@/components/asesores/CardAsesores";
import dataAsesores from "../../data/dataAsesores.json";
import Layout from "@/components/layouts/Layout";
import Footer from "@/components/ui/Footer";

export default function asesores() {
  return (
    <Layout title="Asesores" >

    <div className="bg-white ">
      <div className="bg-second-sm py-5 mb-20">
        <h2 className="text-6xl text-primary-sm text-center">
          Nuestros Asesores
        </h2>
      </div>

      <section className="container m-auto">
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dataAsesores.map((asesor) => (
            <CardAsesores
              
              
              img={asesor.img}
              name={asesor.nombre}
              nivel={asesor.nivel}
              whatssap={asesor.whatssap}
              key={asesor.id}
              />
              ))}
        </section>
      </section>
    </div>
    <Footer nombre='jefrydep@gmail.com'/>    

              </Layout>
  );
}
