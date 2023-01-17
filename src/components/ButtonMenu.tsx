import {Slot} from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface ButtonMenuProps{
    icon : ReactNode;
    asChild? : boolean;
    children: ReactNode;
    notActive?: boolean
}
export function ButtonMenu({icon,children, asChild, notActive=false }: ButtonMenuProps){
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp  
            className={clsx('w-96 h-24 gap-5 my-12 text-bright-white rounded-2xl text-2xl font-sans flex place-items-center items-center',
                 {
                    'bg-deep-blue': notActive === false,
                     'bg-inactive-blue': notActive==true
                 }
               )}
        >
            
           <div className=' ml-20'> {icon} </div>
           <div className=' mr-20'> {children} </div>

        </Comp>
    )
}