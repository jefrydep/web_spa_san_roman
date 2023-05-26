import Hero from "@/components/hero/Hero";

import { useRouter } from "next/router";
import { getProjectById } from "@/helpers/getProjectById";
import ProjectCard from "@/components/project/ProjectCard";
import Layout from "@/components/layouts/Layout";
import { GiPriceTag } from "react-icons/gi";
interface Props {
  id: string;
}

export default function Project({}: Props) {
  const router = useRouter();
  if (!router.isReady) {
    return <div>cargando...</div>;
  }
  const { id } = router.query;

  const beneficios = ["salu", "beneficios", "cantetna", "salbaguardar"];

  const project = getProjectById(String(id));

  const detail = project?.details;

  console.log(project);

  return (
    <>
      <Layout title={project?.projecto}>
        <div className="bg-white">
          <Hero logo={project?.logo} imgUrl={project?.img!} />
          <div className=" container m-auto">
            <div className=" lg:grid lg:grid-cols-3 lg:gap-10 lg:h-36 lg:mt-10">
              <ProjectCard
                area={detail?.area!}
                precio={detail?.precio!}
                ubicacion={detail?.ubicacion!}
              />
            </div>
            <div className="border-2 rounded-md flex flex-col content-center items-center  justify-between border-primary-sm mx-2 mt-3 p-2 sm:px-7 ">
              <div className="text-5xl   font-bold text-primary-sm">
                <GiPriceTag />
              </div>

              <div className="">
                <h4 className="text-center font-bold text-2xl mb-3 text-second-sm">
                  Beneficios
                </h4>
                {project?.beneficios!.map((benficios,index) => (
                  <li key={index} className="list-none mb-2 text-xl">✔ {benficios}</li>
                ))}
              </div>
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
        </div>
      </Layout>
    </>
  );
}

