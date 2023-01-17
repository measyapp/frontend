import {Api} from "../providers"
import { IProjectData } from "../types"
const getAll =  () => {
  return  Api.get<IProjectData[]>("/projetos");
}
const getById=  (id : any) => {
  return  Api.get<IProjectData>(`/projetos/${id}`);
}
const create = (data : IProjectData) => {
  return Api.post<IProjectData>("/projetos/",data);
}
const update = (id : number,data :IProjectData) =>{
  return Api.put(`/projetos/${id}`, data)
}
const remove = (id: number) =>{
  return Api.delete(`/projetos/${id}`);
}
//const post = 
export const ProjectsService = {
    getAll,
    getById,
    create,
    update,
    remove,
}