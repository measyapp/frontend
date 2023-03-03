import { Ref } from "react";
import { Text, ComboBox } from "../components";
export interface ListOrderComboboxProps{
    onOrder? : Function;
    mrefCombo? : Ref<HTMLSelectElement>|null;
}

export function ListOrderCombobox(props : ListOrderComboboxProps){

    return (
        <div className="flex justify-between mb-2 w-96 text-deep-blue items-center h-12">    
            <div className="flex gap-2 items-center ">
                <Text>Ordenar por: </Text>
                <ComboBox selectionAction={props?.onOrder}/>
            </div>
        </div>
    );
}