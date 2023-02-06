
import { Rating } from "@mui/material";
import {Text,ButtonIcon,TextInput} from "."
export interface RatingCardProps{
    nota: number|0;
    comentario : string;
}
export function RatingCard(props:RatingCardProps){
    return (
            <div className=" flex flex-col  self-center p-6 w-400 h-fit gap-5 pt-7 pb-10 ring-deep-blue rounded-2xl ring-2 bg-bright-white">
                <div className=" flex text-deep-blue  align-middle gap-3 full">
                    <Text color="blue" bold size="md">Nota</Text>
                    <Rating name={"Nota"} precision={0.5} value={props.nota} readOnly/>                       
                </div>
                <div className=" flex justify-between gap-6 w-full">
                    <TextInput richText
                            label="Comentário" 
                            txtValue={props.comentario}
                            readonly
                    />
                                        
                </div>
        </div>    
    );
}