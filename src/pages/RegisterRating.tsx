import { Rating } from "@mui/material";
import { ButtonIcon, Text,TextInput } from "../components";
import { createRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IRatingData } from "../types";
import { HookRatings} from "../hooks"
export function RegisterRating(){
    const {id } = useParams();
    const {create} = HookRatings();
    const [nota,setNota] = useState<number>(0);
    const notaRef = createRef<any>();
    const comentarioRef = createRef<any>();
    const navigator = useNavigate();


    const OnClickSaveHandle = (e : Event)=>{
        console.log(notaRef.current.value);
        console.log(nota);
        console.log(comentarioRef.current.value);

        const newRating : IRatingData = {
            id: 0,
            id_autor: 1,
            id_indicacao:1,
            nota : nota,
            comentario: comentarioRef.current.value
        }

        create(newRating);
        navigator("/metricas");
        
    }
    return (
        <div className=" flex flex-col place-items-center justify-center bg-gray-100 bg-opacity-30 w-screen h-screen">
            <div className=" flex justify-center items-center gap-3 w-500 h-14 rounded-t-2xl ring-deep-blue ring-2 bg-deep-blue  text-bright-white">
                  Avaliação de Métrica
                </div>
                <div className=" flex flex-col  self-center p-6 w-500 h-fit gap-5 pt-7 pb-10 ring-deep-blue rounded-b-2xl ring-2 bg-bright-white">
                    <div className=" flex text-deep-blue  align-middle gap-3 full">
                        <Text color="blue" bold size="md">Nota</Text>
                        <Rating name={"Nota"} precision={0.5} ref={notaRef} onChange={(e,newValue)=>{ setNota(newValue?newValue:0)}}/>                       
                    </div>
                    <div className=" flex justify-between gap-6 w-full">
                        <TextInput richText
                                   label="Comentário" 
                                   mref={comentarioRef}
                        />
                                               
                    </div>
                    <div className=" flex justify-between gap-6 w-full">
                        <ButtonIcon text="Salvar Avaliação" onClickAlt={OnClickSaveHandle}/>
                        <ButtonIcon text="Cancelar"/>                     
                    </div>
                </div>    
        </div>
    );
}