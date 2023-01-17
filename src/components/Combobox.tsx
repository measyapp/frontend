import { ComboBoxItem } from "../types";
import { Text } from "../components";
import { OrderOptions } from "../data";
export interface ComboBoxProps{
   items?: ComboBoxItem[];
   label?: string; 
   selectionAction?: Function;
   selected?: number;
}

export function ComboBox({label,items,selectionAction,selected}:ComboBoxProps){

    return (
        <div className="flex flex-col gap-2 text-deep-blue w-full ml-7">
            {label&&(
                <Text>{label}</Text>
            )} 
            <select value={selected} aria-label={`Selecione o(a) ${label}`}  
            
            onChange={(e)=>{ if (selectionAction!== undefined) { selectionAction(e.target.value)}
            }}
            className="min-h-fit h-11 ring-2 py-3 pr-4 ring-deep-blue px-4 rounded-xl flex flex-col justify-around w-full items-center text-deep-blue"
                    
            >
                {/*<option selected>{'Selecione o(a) '+label}</option>*/}
                {items!== undefined ? 
                    items.map((order,index)=>(
                        <option key={index} value={index}>{order.description}</option>
                    )) :
                     OrderOptions.map((order,index)=>(
                    <option key={index} value={index}> {order.description}</option>
                ))}
            </select>
        </div>
    );
}