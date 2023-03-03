import clsx from "clsx"
import { ReactNode } from "react";
import {AiOutlineLoading} from "react-icons/ai"

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    icon? : ReactNode;
    text? : string;
    notActive?: boolean;
    header? : boolean;
    onClickAlt?: Function,
    isLoading? : boolean | false;
}
export function ButtonIcon({icon,text, notActive=false,header=false, onClickAlt, isLoading}: ButtonIconProps){
    return(
        <button type="button" disabled={isLoading} className={clsx(" flex gap-2 h-12  min-w-fit rounded-xl px-3  text-bright-white text-center w-full ",{
            'bg-deep-blue': notActive === false,
            'bg-inactive-blue': notActive==true,
            'ring-bright-white ring-2': header==true,
            'place-items-center justify-between': icon!==undefined,
            'place-items-center justify-center': icon===undefined,
            
            
         })} onClick = {()=>{if(onClickAlt!==undefined){onClickAlt()}}}>
            {isLoading? 
               <AiOutlineLoading className=" animate-spin text-bright-white" size={25}/>:icon}
            <div className='' >{text}</div>   
        </button>
    );
}