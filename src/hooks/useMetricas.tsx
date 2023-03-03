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
        //console.log(data)
        ranking(data);
        
        data.sort((a,b)=>{
            return a.nome.localeCompare(b.nome);
        });
        setMetricas(data);
        
        
        
    },[])
    const getMetricaById =  async (id : any) =>{
        const {status, data} = await MetricsService.getById(id);

        if(status != 200) throw new Error();
        setSMetrica(data);

    }
    const create =  useCallback(async (data : IMetricasData) =>{
        const {status}= await MetricsService.create(data);

        if (status != 200) throw new Error();

    },[])
    const update =  useCallback(async (id: number,data : IMetricasData) =>{
        const {status}= await MetricsService.update(id,data);

        if (status != 200) throw new Error();

    },[])

    const ranking = useCallback( async (data : IMetricasData[]) =>{
        //setMetrics(projects.sort());
        data.sort((a,b)=>{ 
           if ((a.nota === undefined )) return 1
           if (b.nota === undefined ) return -1
           return   b.nota - a.nota;
        });
        setMrank(data.slice(0,3));
        //console.log(data.slice(0,3))
    },[])
    const remove = useCallback(async (id : number) =>{
        const {status}= await MetricsService.remove(id);
        if (status != 200) throw new Error();
        getAll();
    },[])
    return {
        getAll,
        create,
        update,
        getMetricaById,
        remove,
        metricas,
        singleMetrica,
        ranking,
        metricasRank
    }
}