//import AuthContext from "../context/AuthProvider";
//import {useContext} from 'react'
import {Api} from "../providers"
import { IProjectData } from "../types"
//import { AuthContextType } from "../types/AuthContextType";
import { Header } from "../components";
import { authToken } from "./AuthToken";
//import { getToken } from "./getToke";

//const {token} = useContext(AuthContext) as AuthContextType;
const token = authToken();
if (token!=='') Api.defaults.headers['x-access-token'] = token;
   
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