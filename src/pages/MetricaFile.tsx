import {IMetricasData, IProjectData} from "../types"
import { HookMetricas, HookProjects, HookRatings } from "../hooks";
import { createRef, useEffect, useState, useCallback} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ButtonIcon,ComboBox,Footer,Header,Text,TextInput } from "../components";
import youtube_logo from "../images/youtube_logo.svg";
import formula from "../images/formula.svg";
import { RatingCard } from "../components/RatingCard";
import { Rating } from "@mui/material";
import { RegisterRating } from "./RegisterRating";
import { Metricas } from "../data";
export interface MetricaFileProps{
    metrica : IMetricasData;
}
export function MetricaFile(){
    const {id} = useParams();
    let tId= 0;
    const {getMetricaById, singleMetrica} = HookMetricas();
    const { getAllByMetricId,ratings} = HookRatings();
    useEffect( ()=>{
        tId =id!==undefined?+id:-1;
        getMetricaById(id);
        getAllByMetricId(tId);
       
    },[])
    return(
        <div  className=" flex flex-col text-deep-blue gap-3 justify-between h-screen place-items-center">
            <Header/>
            <div className="flex gap-3 w-fit h-fit justify-center place-items-start mt-10 align-middle">
                <div className="flex flex-col max-w-4xl min-w-max items-center w-800 h-fit">
                    <div className="justify-center items-center gap-3 w-full h-14 rounded-t-2xl ring-deep-blue ring-2 bg-deep-blue flex text-bright-white">
                    {singleMetrica&&singleMetrica.nome}
                    </div>
                    <div className=" flex self-center p-6 w-full h-fit gap-20 pt-7 pb-10 ring-deep-blue rounded-b-2xl ring-2 bg-bright-white">
                        <div className=" flex flex-col justify-between gap-6 w-3/5">
                            <TextInput richText
                                    label="Descrição" 
                                    txtValue={singleMetrica&&singleMetrica.descricao}
                                    readonly
                            />
                            <div className="flex flex-col gap-6 mr-5 pr-7 mt-7">
                                <TextInput richText
                                    label="Como é calculada" 
                                    txtValue={singleMetrica&&Metricas[singleMetrica.id].formula}
                                    readonly
                               />
                            
                            </div>
                        
                            <TextInput richText
                                    label="Referencial teórico" 
                                    placeholder="Ex.: My First Project"
                                    txtValue={singleMetrica&&Metricas[singleMetrica.id].referencial}
                                    readonly
                            /> 
                        </div>
                        <div className="flex flex-col gap-6 mr-5 pr-7 mt-7">
                            <div className="flex  w-48 ring-2 rounded-2xl ring-deep-blue place-items-center justify-center">
                                <img src={youtube_logo} width={127}/>
                            </div>
                            <div className="flex place-items-center justify-center">
                                <a href={singleMetrica!==undefined?Metricas[singleMetrica.id].link:""}><Text size="lg">Assista ao tutorial da métrica</Text></a>
                            </div>
                           
                        </div>
                    </div>
                </div>
                   
                <div className="flex flex-col w-500 ml-24 h-fit place-items-start ring-deep-blue ring-2 rounded-xl">
                        <div className="justify-center items-center gap-3 w-full h-14 rounded-t-xl ring-deep-blue ring-2 bg-deep-blue flex text-bright-white">
                            {"Avaliações"}
                        </div> 
                        
                        <div className="flex  flex-col gap-5 h-72 overflow-y-scroll w-full mt-6 mb-6 py-3">
                                    {ratings&&ratings.map((irating,index)=>{
                                        return <RatingCard key={index} ratingItem={irating}/>
                                    })

                                    }
                        </div>
                        <div className="w-full"> 
                            <RegisterRating metrica = {id}/>
                        </div>
                </div>          
            </div> 
                
            <Footer/>
        </div>
    )
}