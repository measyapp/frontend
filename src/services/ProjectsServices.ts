//import AuthContext from "../context/AuthProvider";
//import {useContext} from 'react'
import {Api} from "../providers"
import { IProjectData } from "../types"
//import { AuthContextType } from "../types/AuthContextType";
import { Header } from "../components";
import { authToken } from "./utils";
//import { getToken } from "./getToke";

//const {token} = useContext(AuthContext) as AuthContextType;
   
const getAll =  () => {
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
  return  Api.get<IProjectData[]>("/projetos");
}
const getAllByUser =  (id : any) => {
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
  return  Api.get<IProjectData[]>(`/projetos/ByUser/${id}`);
}
const getById=  (id : any) => {
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
  return  Api.get<IProjectData>(`/projetos/${id}`);
}
const create = (data : IProjectData) => {
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
  return Api.post<IProjectData>("/projetos/",data);
}
const update = (id : number,data :IProjectData) =>{
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
  return Api.put(`/projetos/${id}`, data)
}
const remove = (id: number) =>{
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
  return Api.delete(`/projetos/${id}`);
}
//const post = 
export const ProjectsService = {
    getAll,
    getAllByUser,
    getById,
    create,
    update,
    remove,
}