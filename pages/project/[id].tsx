import Hero from "@/components/hero/Hero";

import { useRouter } from "next/router";
import { getProjectById } from "@/helpers/getProjectById";
import ProjectCard from "@/components/project/ProjectCard";
import Layout from "@/components/layouts/Layout";
import { GiPriceTag } from "react-icons/gi";
interface Props {
  id: string;
}

export default function Project({ }: Props) {
  const router = useRouter();
  if (!router.isReady) {
    return <div>cargando...</div>;
  }
  const { id } = router.query;


  const project = getProjectById(String(id));
  if (!project?.id) {
    router.push('/')
  }
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
                {project?.beneficios!.map((benficios, index) => (
                  <li key={index} className="list-none mb-2 text-xl">✔ {benficios}</li>
                ))}
              </div>
            </div>
            <section>
              <div>
                <div className="text-3xl font-bold  flex  items-center content-center justify-center text-center h-24 text-blue-950 ">
                  <h4>Ubicacion</h4>
                </div>
{
  project?.mapa?
  <iframe src={`https://www.google.com/maps/embed?pb=${project?.mapa}`} width="100%" height="450"  ></iframe>:
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8539530179232!2d-70.14154738848676!3d-15.492286015528267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f33e7a94e397%3A0x478965a0501413e7!2sSan%20Roman%20Constructora%20e%20Inmobiliaria!5e0!3m2!1ses-419!2spe!4v1685546707074!5m2!1ses-419!2spe"  ></iframe>

}
                <a href="https://maps-generator.com/">mapa</a>
              </div>
              {/* <iframe src="https://www.google.com/maps/embed?pb=" width="100%" height="450"  ></iframe> */}


            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}

