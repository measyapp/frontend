
import {Api} from "../providers"
import { IUserData } from "../types"
import { authToken } from "./AuthToken";

const token = authToken();
if (token!=='') Api.defaults.headers['x-access-token'] = token;
   
const getAll =  () => {
  
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
   
  return  Api.get<IUserData[]>("/colaboradores");
}
const getById=  (id : any) => {
  
const token = authToken();
if (token!=='') Api.defaults.headers['x-access-token'] = token;
   
  return  Api.get<IUserData>(`/colaboradores/${id}`);
}
const create = (data : IUserData)=> {
  
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token; 
  return Api.post<IUserData>("/colaboradores",data);
}
const update = (id : number,data :IUserData)=>{
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token; 
  return Api.put(`/colaboradores/${id}`, data)
}
const remove = (id: number)=>{
  const token = authToken();
  if (token!=='') Api.defaults.headers['x-access-token'] = token;
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