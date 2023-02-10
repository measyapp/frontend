import { useCallback, useContext, useMemo, useState } from "react"
import { MetricsService } from "../services"
import { IMetricasData, IProjectData } from "../types"
import { metodologiasList, tiposList } from "../data";
import { useAuth } from "./useAuth";

export const HookMetricas = () =>{
    const [metricas,setMetricas] = useState<IMetricasData[]>([]);
    const [singleMetrica, setSMetrica] = useState<IMetricasData>();
    const [querySearch,setQuerySearch] = useState<string>("");
    const [fieldSearch,setFieldSearch] = useState<string>("")
    const [metricasRank, setMrank] = useState<IMetricasData[]>([]);

    const getAll =  useCallback(async () =>{
        const {status, data} = await MetricsService.getAll();

        if(status != 200) throw new Error();
        console.log(data)
        setMetricas(data);
        
    },[])
    const getById =  useCallback(async (id : any) =>{
        const {status, data} = await MetricsService.getById(id);

        if(status != 200) throw new Error();

        setSMetrica(data);

    },[])
    const create =  useCallback(async (data : IMetricasData) =>{
        const {status}= await MetricsService.create(data);

        if (status != 200) throw new Error();

    },[])
    const update =  useCallback(async (id: number,data : IMetricasData) =>{
        const {status}= await MetricsService.update(id,data);

        if (status != 200) throw new Error();

    },[])
    
    const search = (Parameter:string,Field: string = "")=>{
        setQuerySearch(Parameter);
        setFieldSearch(Field);
    }
    const ranking = (Field : any)=>{
        //setMetrics(projects.sort());
        const nMetricas = metricas; 
        nMetricas.sort((a,b)=>{ 
           if (a.nota === undefined ) return -1
           if (b.nota === undefined ) return 1
           return  (a.nota) > (b.nota) ? 1:-1
        });
        setMrank(nMetricas.slice(0,3));
    }
    const remove = useCallback(async (id : number) =>{
        const {status}= await MetricsService.remove(id);
        if (status != 200) throw new Error();
        getAll();
    },[])
    return {
        getAll,
        create,
        update,
        getById,
        remove,
        search,
        metricas,
        singleMetrica
    }
}