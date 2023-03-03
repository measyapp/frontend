import { Rating } from "@mui/material";
import { ButtonIcon, Text,TextInput } from "../components";
import { createRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IRatingData } from "../types";
import { HookRatings} from "../hooks"
export interface RegisterRatingProps{
    metrica? : string;
}
export function RegisterRating(props : RegisterRatingProps){
    
    const {create} = HookRatings();
    const [nota,setNota] = useState<number>(0);
    const notaRef = createRef<any>();
    const comentarioRef = createRef<any>();
    const navigator = useNavigate();
    const[loading,setLoading] = useState<boolean>(false);
    const OnClickSaveHandle = async (e : Event)=>{
        const newRating : IRatingData = {
            id: 0,
            id_indicacao:props.metrica===undefined?0:+props.metrica,
            nota : nota,
            comentario: comentarioRef.current.value,
            updatedAt : new Date(),
            createdAt : new Date(),

        }
       setLoading(true);
        setTimeout(() => {
        setLoading(false);
      }, 2000)
       await create(newRating);
      
       window.location.reload();        
    }
    return (
       
        <div className=" flex flex-col place-items-center justify-center w-full">
            <div className=" flex justify-center items-center gap-3 w-500 h-10 ring-deep-blue ring-2 bg-deep-blue  text-bright-white">
                Nova Avaliação
            </div>
            <div className=" flex flex-col  self-center p-6 w-500 h-fit gap-5 pt-7 pb-5 rounded-b-xl  bg-bright-white">
                <div className=" flex text-deep-blue  align-middle gap-3 full">
                    <Text color="blue" bold size="md">Nota</Text>
                    <Rating precision={0.5} ref={notaRef} onChange={(e,newValue)=>{ setNota(newValue?newValue:0); console.log(newValue)}}/> 
                    <Text color="blue" bold size="md">{nota}</Text>                      
                </div>
                <div className=" flex justify-between gap-6 w-full">
                    <TextInput richText
                            label="Comentário" 
                            mref={comentarioRef}
                    />
                                        
                </div>
                   
                 <ButtonIcon text="Avaliar Métrica" onClickAlt={OnClickSaveHandle} isLoading= {loading}/>                 
                
            </div>    
        </div>
       
    );
}