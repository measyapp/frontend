import {ReactNode} from "react"

export interface CardButtonProps{
    label?: String;
    icon : ReactNode;
    onClick?: Function;
}
export function CardButton({icon,label,onClick}:CardButtonProps){
    return(
        <button  className=" flex flex-col place-items-center justify-center hover:scale-110 ease-in-out"
                 onClick={()=>{if(onClick!==undefined){onClick()}}}
        >
                {icon}
                <label >{label}</label>
        </button>
    );
}