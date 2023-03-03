
import { useNavigate, useParams } from "react-router-dom";
import {recQuestionsPadrao} from "../data"
import { ButtonIcon,ComboBox,Footer,Header,Text,TextInput } from "../components";
import { Graph } from "phosphor-react";
import { HookRecomendacao } from "../hooks/useRecomendacao";
import {useEffect, useState} from "react"
import useEnhancedEffect from "@mui/utils/useEnhancedEffect";


export function QuestionarioRec(){

    const {id} = useParams(); // id do projeto que vai ter recomendação
    const {getIndicacao} = HookRecomendacao();
    const [loading, setLoading] = useState<boolean>(false);
    var recQuestions = recQuestionsPadrao;
   
    const onChangeValue = (event: any)=> {
        //console.log("Q-"+event.target.name+" "+event.target.value);
        recQuestions[+event.target.name].value = event.target.value;
        //console.log(recQuestions);
      }
      const navegador = useNavigate();
    const getRecomendation = async ()=>{
        var answers : string = "";
        recQuestions.forEach((iquest,index)=>{
            answers=answers+iquest.value;
        });
       console.log(answers); 
       setLoading(true);
       await getIndicacao(answers,id===undefined?"0":id);
       setLoading(false);
       navegador(`/projetos/${id}`);
       
    }
    return(
        <div id={'page_'} className=" flex flex-col text-deep-blue gap-3 justify-between h-fit place-items-center" >
            
            <Header/>
            <div className="flex flex-col max-w-4xl min-w-max items-center w-700 h-2/3">
                <div className="justify-center items-center gap-3 w-full h-14 rounded-t-xl ring-deep-blue ring-2 bg-deep-blue flex text-bright-white">
                    <Graph size={32}/>
                    {"Perguntas importantes"}
                </div>
                <div className=" flex flex-col self-center w-full h-fit gap-10 mb-5 p-8 ring-deep-blue ring-2 bg-bright-white rounded-b-xl">
                    {recQuestions.map((aquest,index)=>(
                        <div key={index} className="w-700 flex flex-col gap-4 place items-center justify-center  ring-deep-blue ring-2 rounded-xl p-3">
                            <Text bold size="md">{aquest.pergunta}</Text>
                            <div defaultValue={aquest.value} className=" flex gap-4 place items-center justify-center " onChange={onChangeValue}>
                                <input type="radio" value="1" name={index.toString()}/>Sim
                                <input type="radio" value="0" name={index.toString()}/>Não 
                            </div>
                            
                        </div>
                    ))}
                    <ButtonIcon text="Receber Recomendação de Métrica" isLoading={loading} onClickAlt={(e:any)=>getRecomendation()}/>
                </div>
            </div>
            <Footer/>
       </div>
    )
}