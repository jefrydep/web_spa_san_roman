import React from 'react'
import { MdLandslide,MdAddLocationAlt } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";

 
interface Props {
 
  ubicacion: string,
  area: string,
  precio:string;

}
const ProjectCard = ({ precio, ubicacion, area }: Props) => {
 
  return (
    < >
    <div className='lg:grid lg:grid-cols-1 '>
      <div className="border-2 rounded-md flex content-center items-center   shadow-sm  justify-between border-primary-sm mx-2 mt-3 p-2 sm:px-7 ">
        <div className="text-5xl font-bold  text-primary-sm"><MdAddLocationAlt/></div>
        
        <div>
          <h4 className="text-center text-second-sm font-bold text-2xl">Ubicacion:</h4>
          <h5 className="text-4xl font-bold text-primary-sm">{ubicacion}</h5>
        </div>
      </div>
      <div className="border-2 rounded-md  flex content-center items-center  justify-between border-primary-sm mx-2 mt-3 p-2 sm:px-7 ">
        <div className="text-5xl font-bold text-primary-sm"><MdLandslide/></div>
        
        <div>
          <h4 className="text-center text-second-sm font-bold text-2xl">Area :</h4>
          <h5 className="text-4xl font-bold text-primary-sm">{area}</h5>
        </div>
      </div>
      <div className="border-2 rounded-md  flex content-center items-center  justify-between border-primary-sm mx-2 mt-3 p-2 sm:px-7 ">
        <div className="text-5xl font-bold text-primary-sm"><GiPriceTag/></div>
        
        <div>
          <h4 className="text-center text-second-sm font-bold text-2xl"> Precio Desde: </h4>
          <h5 className="text-4xl font-bold text-primary-sm">{precio}</h5>
        </div>
      </div>

      </div>
     
    </ >
  )
}

export default ProjectCard