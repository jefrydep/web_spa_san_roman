import Hero from "@/components/hero/Hero";
 
import { useRouter } from "next/router";
import { getProjectById } from "@/helpers/getProjectById";
import ProjectCard from "@/components/project/ProjectCard";
import { DataResponse } from "@/interface/data.interface";
import { IconType } from "react-icons/lib";
import { GrAccessibility, GrMapLocation } from "react-icons/gr";
import { FaUser } from 'react-icons/fa';
interface Props {
  id: string;
}

export default function Project({}: Props) {

  const router = useRouter();
  if (!router.isReady) {
    return <div>cargando...</div>
  }
  const { id } = router.query

  // console.log(router.query)

  const project = getProjectById(String(id))

  const detail = project?.details;
 
 
 

  console.log(project)
  // console.log(project)

  // console.log(router.query)
  // console.log(id)
  return (
    <>
      <Hero
        // slogan={project?.projecto!}
        logo={project?.logo}
        // imgUrl='/assets/img/merida.jpg'
        imgUrl={project?.img!}
      />
      <div className=" container m-auto">

        <div className=" lg:grid lg:grid-cols-3 lg:gap-10 lg:h-56 lg:mt-10">
      <ProjectCard area={detail?.area!} precio={detail?.precio!} ubicacion={detail?.ubicacion!} />

  
          
        </div>
        <section>
          <div>
            <div className="text-3xl font-bold  flex  items-center content-center justify-center text-center h-24 text-blue-950 ">
              <h4>Ubicacion</h4>
            </div>
            <iframe
              className="w-full"
              height={500}
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=541&amp;height=515&amp;hl=en&amp;q=san%20roman%20inmobiliaria%20juliaca+(Sanroman)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://maps-generator.com/">mapa</a>
          </div>
        </section>
      </div>
    </>
  );
}

// export async function getServerSideProps( {query}:any) {

//   const data =await getProjectById(query);
//   console.log(data)
//   return {
//     props: {
//       // data

//     }, // will be passed to the page component as props
//   };
// }
