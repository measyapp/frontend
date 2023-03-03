import { useEffect } from "react";
import { Header, ListHeader, Text } from "../components";
import { MetricaCard } from "../components/MetricaCard";
import { Metricas } from "../data";
import { HookMetricas } from "../hooks";
import {RankingCard} from "../components/RankingCard"
import {GiRank3} from "react-icons/gi"

export function MetricasList(){
    const {getAll,metricas,ranking,metricasRank} = HookMetricas();
    //const nMetricas = Metricas.slice(0,3);

    useEffect(()=>{
        getAll();
    },[getAll]);

    return(
    <div  className=" flex flex-col gap-3 justify-between h-screen"> 
        <div className="flex flex-col gap-1">
            <Header>
                <h5 className="text-2xl">Métricas</h5>
            </Header>
            <ListHeader addButton addButtonText={"Nova Métrica"} OnSerching={(e : string,field :string)=>{}} listObjectName={"métrica"} buttonLink="/projetos/cadastro"/>
             <div className="flex gap-4 bg-deep-blue place-items-center p-3 justify-center w-3/4 place-self-center rounded-xl">
                <GiRank3 className="text-bright-white" size={30}/>
                <Text color="white" size="xl">Ranking De Métricas</Text>
             </div>

            <div className=" flex place-items-center justify-center ">
                {metricasRank&&metricasRank.map((imetrics,index)=>(
                            <RankingCard key = {(index).toString()} rank={index+1} item = {imetrics}/>
                        ))
                    }
            </div>
            <div className="w-3/4 mx-5 h-0.5 bg-deep-blue place-self-center justify-center"></div>
            <div className=" h-3/4 flex gap-2 mx-14 mt-2 mb-1 flex-wrap overflow-y-scroll max-w-full">
                {metricas&&metricas.map((imetrics,index)=>(
                        <MetricaCard key = {(index).toString()} item = {imetrics}/>
                    ))
                }
            </div>
        </div>
    </div>
    )
}