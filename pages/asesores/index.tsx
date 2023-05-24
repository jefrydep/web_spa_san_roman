import CardAsesores from "@/components/asesores/CardAsesores";

export default function asesores() {




  return (

    <div className="bg-white ">

      <div className="bg-second-sm py-5 mb-20">

        <h2 className="text-6xl text-primary-sm text-center">Nuestros Asesores</h2>
      </div>

      <section className="container m-auto">
        <section className="grid grid-cols-4 gap-4" >


          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />
          <CardAsesores />

        </section>

      </section>
    </div>



  )







}