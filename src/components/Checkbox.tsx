import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'phosphor-react'

export interface CheckboxProps{
    mref? : boolean;
}

export function Checkbox({}: CheckboxProps){
   return (
        <CheckboxPrimitive.Root  
            className="h-5 w-5 p-1 rounded bg-bright-white ring-deep-blue ring-2"
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='text-deep-blue h-3.5 w-3.5'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}