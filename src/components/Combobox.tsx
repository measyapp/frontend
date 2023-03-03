import { ComboBoxItem } from "../types";
import { Text } from "../components";
import { OrderOptions } from "../data";
import { Ref } from "react";
export interface ComboBoxProps{
   items?: ComboBoxItem[];
   label?: string; 
   selectionAction?: Function;
   selected?: number;
   mref? : Ref<HTMLSelectElement>|null;
}

export function ComboBox(props:ComboBoxProps){
    /*if(props.items===undefined){
        props.items = OrderOptions;
    }*/
    return (
        <div className="flex flex-col gap-2 text-deep-blue w-full">
            {props.label&&(
                <Text>{props.label}</Text>
            )} 
            <select ref = {props.mref} defaultValue={props.selected}  
                className="min-h-fit h-11 ring-2 py-3 pr-4 ring-deep-blue px-4 rounded-xl flex flex-col justify-around w-full items-center text-deep-blue" 
                onChange={(e)=>{ 
                       console.log(e.currentTarget.value); 
                       if (props.selectionAction!==undefined){
                         if(props.items!==undefined)
                          props.selectionAction(props.items[+e.currentTarget.value].field,props.items[+e.currentTarget.value].asc)
                         else 
                          props.selectionAction(OrderOptions[+e.currentTarget.value].field,OrderOptions[+e.currentTarget.value].asc)
                       }
                   }
               } 
            >
                {/*<option selected>{'Selecione o(a) '+label}</option>*/}
                {props.items!== undefined ? 
                    props.items.map((order,index)=>(
                        <option key={index} value={index}>{order.description}</option>
                    )) :
                     OrderOptions.map((order,index)=>(
                    <option key={index} value={index}> {order.description}</option>
                ))}
            </select>
        </div>
    );
}