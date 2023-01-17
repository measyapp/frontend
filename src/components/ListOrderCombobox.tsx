import { Text, ComboBox } from "../components";


export function ListOrderCombobox(){

    return (
        <div className="flex justify-between mb-2 w-96 text-deep-blue items-center h-12">    
            <div className="flex gap-2 items-center ">
                <Text>Ordenar por: </Text>
                <ComboBox/>
            </div>
        </div>
    );
}