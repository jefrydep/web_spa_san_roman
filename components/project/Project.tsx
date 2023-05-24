import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
interface propsImg {
  img: string;
  imgTitle: string;
  id: string;
  proyecto?: string;
  precio: string;
  logo: string;
}
const Project = ({ img, imgTitle, id, proyecto, precio, logo }: propsImg) => {
  const router = useRouter();
  const handleProject = () => {
    router.push(`/project/${id}`);
  };
  return (
    <>
      <div
        className="    cursor-pointer shadow-md p-2      rounded-2xl mx-2"
        onClick={handleProject}
      >
        <div className="border border-second-sm rounded-2xl p-2">
          <div className="px-4 py-2 flex    justify-center    ">
            <img className="h-16  " src={logo} alt="" />
            {/* <div>

<Image
className="rounded-2xl"
height={64}
width={64}
src={logo}
alt="proyecto sanroman"
/>
</div> */}
          </div>
          <div className=" ">
            <div className="h-5 bg-second-sm mb-4 rounded-xl"></div>
            {/* <div className="h-1 bg-primary-sm0"></div> */}

            <Image
              className="md:hover:scale-110 rounded-lg"
              src={img}
              alt={imgTitle}
              height="500"
              width="500"
            />

            <div className=" items-center  flex gap-4 justify-around px-5 py-5">
              <div>
                <img className="h-8" src={logo} alt="" />
              </div>
              <div>
                <h4 className="bg-second-sm px-4 rounded-3xl text-white py-1 hover:bg-primary-sm ">
                  Ver Mas
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
