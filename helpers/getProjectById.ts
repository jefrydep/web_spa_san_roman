import dataProject from '../data/dataProject.json'
export  const    getProjectById = (id:string)=>{
    return dataProject.find(project => project.id === id)
  }