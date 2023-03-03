
import { Rating } from "@mui/material";
import {Text,ButtonIcon,TextInput} from "."
import { IRatingData } from "../types";
import { Item } from "@radix-ui/react-dropdown-menu";
export interface RatingCardProps{
    
    ratingItem : IRatingData|undefined;
}
export function RatingCard({ratingItem}:RatingCardProps){
    const dateOptions : Intl.DateTimeFormatOptions  = {
        day: "numeric", month: "numeric", year: "numeric",
        hour: "2-digit", minute: "2-digit"
    } ;

    return (
            <div className=" flex flex-col  self-center p-3 w-400 h-fit min-h-fit gap-3 pb-3 ring-deep-blue rounded-2xl ring-2 bg-bright-white">
                <div className=" font-bold flex gap-16 full">
                    {ratingItem?.nome}
                    <div className="w-2"></div>
                    {ratingItem&&new Date(ratingItem.createdAt?ratingItem.createdAt:0).toLocaleString('pt-BR',dateOptions).toLowerCase()}
                </div>
                <div className=" flex text-deep-blue px-3 align-middle gap-3 full">
                    <Rating precision={0.5} value={ratingItem&&ratingItem.nota} readOnly/>
                    <Text>{ratingItem&&ratingItem.nota.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</Text>                       
                </div>
                <div className=" flex justify-between gap-6 w-full h-fit m-3">
                    <span className="px-3 font-semibold">
                        {ratingItem&&ratingItem.comentario}
                    </span>
                                        
                </div>
        </div>    
    );
}