
import {Api} from "../providers"
import { IRatingData } from "../types"
import { authToken } from "./utils";   
const getAll =  () => {
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    
    return  Api.get<IRatingData[]>("/ratings");
}
const getById=  (id : any) => {
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    
    return  Api.get<IRatingData>(`/ratings/${id}`);
}
const getAllByMetricaId=  (id : any) => {
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    
    return  Api.get<IRatingData[]>(`/ratings/ByMetric/${id}`);
}
const create = (data : IRatingData)=> {
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token; 
    return Api.post<IRatingData>("/ratings",data);
}
const update = (id : number,data :IRatingData)=>{
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token; 
    return Api.put(`/ratings/${id}`, data)
}
const remove = (id: number)=>{
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    return Api.delete(`/ratings/${id}`);
}
//const post = 
export const RatingService = {
    getAll,
    getById,
    create,
    update,
    remove,
    getAllByMetricaId
}