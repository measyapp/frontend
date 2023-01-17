import { ReactNode } from "react";

export interface ComboBoxOptionsProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    description : String;
    icon? : ReactNode;
    clickHandler?: Function;
}
export function ComboBoxOptions({description,icon,clickHandler}: ComboBoxOptionsProps){
    return(
        
        <button className="text-deep-blue block px-4 py-2 text-sm w-full bg-bright-white hover:bg-gray-200" role="menuitem" tabIndex= {-1}  id="menu-item-0">
            {icon}
            {description}
        </button>
        
    )
}