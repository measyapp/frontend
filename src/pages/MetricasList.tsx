import { useEffect } from "react";
import { Header, ListHeader } from "../components";
import { MetricaCard } from "../components/MetricaCard";
import { Metricas } from "../data";
import { HookMetricas } from "../hooks";

export function MetricasList(){
    const {getAll,metricas} = HookMetricas();

    useEffect(()=>{
        getAll();
      },[getAll]);
    metricas.forEach((imetrica)=>{
        imetrica.avaliacoes=Math.floor(Math.random()*200)
    });
    return(
    <div  className=" flex flex-col gap-3 justify-between h-screen"> 
        <div className="flex flex-col gap-1">
            <Header>
                <h5 className="text-2xl">Métricas</h5>
            </Header>
            <ListHeader OnSerching={(e : string,field :string)=>{}} listObjectName={"métrica"} buttonLink="/projetos/cadastro"/>
            <div className=" h-3/4 flex gap-2 mx-14 mt-2 mb-1 flex-wrap overflow-y-scroll max-w-full">
                {metricas.length>0?metricas.map((imetrics,index)=>(
                        <MetricaCard key = {(index).toString()} item = {imetrics}/>
                    )):Metricas.map((imetrics,index)=>(
                        <MetricaCard key = {(index).toString()} item = {imetrics}/>
                    ))
                }
            </div>
        </div>
    </div>
    )
}