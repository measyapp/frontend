import clsx from "clsx"
import { ReactNode } from "react";

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    icon? : ReactNode;
    text? : string;
    notActive?: boolean;
    header? : boolean;
    onClickAlt?: Function,
}
export function ButtonIcon({icon,text, notActive=false,header=false, onClickAlt}: ButtonIconProps){
    return(
        <button type="button" className={clsx(" flex gap-1 h-12  min-w-fit rounded-2xl px-3  text-bright-white text-center w-full ",{
            'bg-deep-blue': notActive === false,
            'bg-inactive-blue': notActive==true,
            'ring-bright-white ring-2': header==true,
            'place-items-center justify-between': icon!==undefined,
            'place-items-center justify-center': icon===undefined
         })} onClick = {()=>{if(onClickAlt!==undefined){onClickAlt()}}}>
            {icon}
            <div className='' >{text}</div>   
        </button>
    );
}