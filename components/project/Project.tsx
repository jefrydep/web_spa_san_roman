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
        className="    cursor-pointer   mx-2"
        onClick={handleProject}
      >
        <div className="px-4 py-2 flex justify-center    ">
          <img className="h-16" src={logo} alt="" />
        </div>
        <div className="border border-second-sm rounded-b-3xl">

          <div className="h-5 bg-second-sm">
          </div>
          <div className="h-1 bg-primary-sm0">

          </div>
          {/* <img src="/assets/img/mr-robot.jpg" alt="" /> */}
          <img className=" shadow-lg md:hover:scale-110" src={img} alt={imgTitle} />

          <div className=" items-center  flex gap-4 justify-around px-5 py-5">
            <div>
              {/* <h4 className="text-xl font-bold text-second-sm">{proyecto}</h4> */}
              {/* <h4 className="text-xl font-bold text-second-sm">{logo}</h4> */}
              <img className="h-8" src={logo} alt="" />
            </div>
            <div>
              <h4 className="bg-second-sm px-4 rounded-3xl text-white py-1 hover:bg-primary-sm ">Ver Mas</h4>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
