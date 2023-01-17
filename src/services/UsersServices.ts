import {Api} from "../providers"
import { IUserData } from "../types"
const getAll =  () => {
  return  Api.get<IUserData[]>("/colaboradores");
}
const getById=  (id : any) => {
  return  Api.get<IUserData>(`/colaboradores/${id}`);
}
const create = (data : IUserData) => {
  return Api.post<IUserData>("/colaboradores",data);
}
const update = (id : number,data :IUserData) =>{
  return Api.put(`/colaboradores/${id}`, data)
}
const remove = (id: number) =>{
  return Api.delete(`/colaboradores/${id}`);
}
//const post = 
export const UserService = {
    getAll,
    getById,
    create,
    update,
    remove,
}