import {Api} from "../providers"
import {IMetricasData  } from "../types"
import { authToken } from "./utils";

const getAll =  () => {
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    return  Api.get<IMetricasData[]>("/metrics");
  }
  const getById=  (id : any) => {
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    return  Api.get<IMetricasData>(`/metrics/${id}`);
  }
  const create = (data : IMetricasData) => {
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    return Api.post<IMetricasData>("/metrics",data);
  }
  const update = (id : number,data :IMetricasData) =>{
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    return Api.put(`/metrics/${id}`, data)
  }
  const remove = (id: number) =>{
    const token = authToken();
    if (token!=='') Api.defaults.headers['x-access-token'] = token;
    return Api.delete(`/metrics/${id}`);
  }
  //const post = 
  export const MetricsService = {
      getAll,
      getById,
      create,
      update,
      remove,
  }