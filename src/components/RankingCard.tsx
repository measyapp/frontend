import { MdKeyboardArrowRight } from "react-icons/md";
import { Metricas } from "../data"
import { CardButton } from "./CardButton";
import { IMetricasData } from "../types/Metricas";
import Rating from "@mui/material/Rating"
import { useState } from "react";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";

export interface RankingCardProps{
    item : IMetricasData;
    rank : number;
}

export function RankingCard({item,rank} : RankingCardProps){
    const [nota,setNota] = useState<number>(0);
    const navigator = useNavigate();
    const metricaInfo=()=>{
        navigator(`/metricas/${item.id}`);
    }
   // item.nota = Math.random()*5;
    return(
        <div className="h-fit w-400 m-3 bg-bright-white gap- overflow-hidden ring-deep-blue ring-2 rounded-xl">
            <div className="bg-deep-blue h-10  font-sans text-lg text-bright-white text-center py-1">
                {item.nome} 
            </div>
            <div className="flex w-fit">
                <div className=" text-2xl px-6 font-bold pt-6 text-bright-white bg-deep-blue text-center place-items-center justify-center">
                    {rank}
                </div>
                <div className="flex flex-col gap-3">
                <p className="h-12 resize-none w-full break-words overflow-hidden max-h-12 mt-3 px-6 font-sans text-md text-deep-blue text-cente break-word"> {item.descricao}</p>
                <div className="flex gap-2 px-4 font-sans text-xs mt-1.5  text-deep-blue text-center break-word self-end  justify-between">
                    <div className="flex flex-col gap-1.5 py-2 place-items-center justify-center">
                    <div className="flex gap-3">
                       <Rating name={`NotaR${item.id}`} value={+item.nota} readOnly precision={0.2}/>
                       {Number(item.nota).toFixed(2).toString()}
                    
                    </div>
                        <p className="text-center">{item.avaliacoes+" avaliações"}</p>
                    </div>
                    <div  className="flex place-items-center justify-center ">
                        <button  className=" flex place-items-center justify-center hover:scale-110 ease-in-out" onClick={metricaInfo}>
                            <Text size="sm">Mais detalhes</Text>
                            <MdKeyboardArrowRight/>    
                        </button>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
}