import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { ComboBoxItem } from '../types';
import '../styles/globais.css'
export interface DropdownMenuProps{
    trigger: ReactNode;
    options : ComboBoxItem[];
}
export function  DropdownMenu (props : DropdownMenuProps){

    return(
        <DropdownMenuRadix.Root>
    <DropdownMenuRadix.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          {props.trigger}
        </button>
      </DropdownMenuRadix.Trigger>
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className=' bg-bright-white text-deep-blue rounded-sm shadow-md p-2 text-sm outline-none' sideOffset={5}>
         {props.options?props.options.map((option,index)=>{
            return (
                <>
                  <DropdownMenuRadix.Item className='outline-none hover:scale-105 ml-3'>{option.description}</DropdownMenuRadix.Item>
                  <DropdownMenuRadix.Separator className=" h-0.25 bg-inactive-blue"/>
                </>
            )
         }):<></>}
        </DropdownMenuRadix.Content>
        
      </DropdownMenuRadix.Portal>
      
      </DropdownMenuRadix.Root>
    )
}