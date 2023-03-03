import { useEffect, useMemo, useState } from "react";
import { Header, ListHeader, Text } from "../components";
import { MetricaCard } from "../components/MetricaCard";
import { Metricas } from "../data";
import { HookMetricas } from "../hooks";
import {RankingCard} from "../components/RankingCard"
import {GiRank3} from "react-icons/gi"

export function MetricasList(){
    const {getAll,metricas,metricasRank} = HookMetricas();
    //const nMetricas = Metricas.slice(0,3);
      
  const [querySearch,setQuerySearch] = useState<string>("");
  const [fieldSearch,setFieldSearch] = useState<string>("");
  const [fieldOrder, setFieldOrder] = useState<string>("");
    const filteredMetricas = useMemo(()=>{
        return metricas.filter(item =>{
            return item.nome.toLocaleLowerCase().includes(querySearch.toLocaleLowerCase());    
        })
      },[metricas,querySearch,fieldSearch]) 
    useEffect(()=>{
        getAll();
    },[getAll]);

    const orderedMetricas = useMemo(()=>{
        console.log(fieldOrder);
       return filteredMetricas.sort((a,b)=>{
            if (fieldOrder === 'nome desc'){
              return (-1)*a.nome.localeCompare(b.nome)
            }
            return a.nome.localeCompare(b.nome);  
          })
    },[filteredMetricas,fieldOrder])
    return(
    <div  className=" flex flex-col gap-3 justify-between h-screen"> 
        <div className="flex flex-col gap-1">
            <Header>
                <h5 className="text-2xl">Métricas</h5>
            </Header>
            <ListHeader addButton OnSerching={(e : string,field :string)=>{setQuerySearch(e);setFieldSearch(field)}} OnOrder={(e: string,asc:boolean)=>{setFieldOrder(e)}} listObjectName={"métrica"} buttonLink="/projetos/cadastro"/>
             <div className="flex gap-4 bg-deep-blue place-items-ceter p-3 justify-center w-3/4 place-self-center rounded-xl">
                <GiRank3 className="text-bright-white" size={30}/>
                <Text color="white" size="xl">Ranking De Métricas</Text>
             </div>

            <div className=" flex place-items-center justify-center ">
                {metricasRank&&metricasRank.map((imetrics,index)=>(
                            <RankingCard key = {index} rank={index+1} item = {imetrics}/>
                        ))
                    }
            </div>
            <div className="w-3/4 mx-5 h-0.5 bg-deep-blue place-self-center justify-center"></div>
            <div className=" h-3/4 flex gap-2 mx-14 mt-2 mb-1 flex-wrap overflow-y-scroll max-w-full">
                {orderedMetricas&&orderedMetricas.map((imetrics,index)=>(
                        <MetricaCard key = {index} item = {imetrics}/>
                    ))
                }
            </div>
        </div>
    </div>
    )
}