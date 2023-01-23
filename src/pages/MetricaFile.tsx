import {IMetricasData, IProjectData} from "../types"
import { HookMetricas, HookProjects } from "../hooks";
import { MdCancel}  from "react-icons/md"
import { createRef, useEffect, useState} from "react";
import { Graph,IdentificationBadge} from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import {tiposList,metodologiasList,tamanhosList, Metricas} from "../data"
import { ButtonIcon,ComboBox,Footer,Header,Text,TextInput } from "../components";
import { useFormValidation } from "../formValidation/useFormValidation";
import youtube_logo from "../images/youtube_logo.svg";
import formula from "../images/formula.svg";
import { number } from "yup/lib/locale";

export function MetricaFile(){
    const {id} = useParams();
    let tId= 0;
    const [item , setItem] = useState<IMetricasData>()
    const {getById, singleMetrica} = HookMetricas();
    const navigate = useNavigate();

    useEffect(()=>{
        tId =id!==undefined?+id-1:-1;
        setItem(Metricas[tId]);
        
    },[])
    return(
        <div  className=" flex flex-col text-deep-blue gap-3 justify-between h-screen place-items-center">
            <Header/>
            <div className="flex flex-col max-w-4xl min-w-max items-center w-9/12 h-fit">
                <div className="justify-center items-center gap-3 w-full h-14 rounded-t-2xl ring-deep-blue ring-2 bg-deep-blue flex text-bright-white">
                {item&&item.nome}
                </div>
                <div className=" flex self-center p-6 w-full h-fit gap-20 pt-7 pb-10 ring-deep-blue rounded-b-2xl ring-2 bg-bright-white">
                    <div className=" flex flex-col justify-between gap-6 w-3/5">
                        <TextInput richText
                                   label="Descrição" 
                                   txtValue={item&&item.descricao}
                        />
                        <div className="flex flex-col gap-6 mr-5 pr-7 mt-7">
                        <div className="flex">
                            <Text size="lg">Como é calculada</Text>
                        </div>
                        
                        <div className="flex h-fit w-48 ring-2 overflow-hidden rounded-2xl ring-deep-blue place-items-center justify-center">
                                <img src={formula} width={530}/>
                            </div>
                        
                        
                        </div>
                        
                            

                        <TextInput richText
                                   label="Referencial teórico" 
                                   placeholder="Ex.: My First Project"

                        /> 
                    </div>
                    <div className="flex flex-col gap-6 mr-5 pr-7 mt-7">
                        <div className="flex  w-48 ring-2 rounded-2xl ring-deep-blue place-items-center justify-center">
                            <img src={youtube_logo} width={127}/>
                        </div>
                        <div className="flex place-items-center justify-center">
                            <Text size="lg">Assista ao tutorial da métrica</Text>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}