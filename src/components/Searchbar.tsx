import { MagnifyingGlass} from "phosphor-react";
import { useState } from "react";
import '../styles/globais.css'
import { SearchItems } from "../types/SearchItems";
import { ComboBoxOptions } from "./ComboboxOptions";
import clsx from "clsx";

export interface SerachBarProps{
    placeholder: string;
    onSearching?: Function;
    searchItems?: SearchItems[];
}

export function SearchBar({placeholder,onSearching,searchItems}:SerachBarProps){
    const [fieldSearch,setFieldSearch] = useState<string>('');
    return(

        <div  id="search" className= "flex  w-96 h-12  rounded-2xl">
                {searchItems!==undefined?
                <select  className="w-25 bg-deep-blue w-44 h-12  ring-deep-blue ring-2  rounded-l-2xl text-bright-white">
                    {searchItems&&
                         searchItems.map((order,index)=>(
                            <option label={order.description} key={index} value={order.field} onSelect={(e)=>{setFieldSearch(e.currentTarget.value)}}></option>
                        ))
                    }
                </select>
                :<></>}
                <div className={clsx("w-10/12 text-lg  h-12 text-deep-blue ring-deep-blue ring-2  ",{
                    'rounded-r-2xl': searchItems!==undefined,
                    'rounded-2xl': searchItems===undefined,
                    
                })}>
                    <input placeholder={placeholder} className={clsx(" px-2 w-full h-12 outline-none  rounded-r-2xl",{
                    'rounded-r-2xl': searchItems!==undefined,
                    'rounded-2xl': searchItems===undefined,
                    
                })} onChange={(e)=>{if(onSearching!==undefined){onSearching(e.target.value,fieldSearch)}}}>
                    </input>
                
                </div>
                {/*<button className=" w-20 bg-deep-blue text-bright-white px-5" onClick={()=>{ if(onSearching!==undefined){onSearching(strSearch)}}} >
                    <MagnifyingGlass size={39} className="self-center"/>
                   </button>*/}
          
        </div>
        
    )
}