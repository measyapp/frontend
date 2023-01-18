import {Slot} from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'sm'|'md'|'lg'|'xl';
    color?: 'blue'|'white';
    children : ReactNode;
    asChild? : boolean;
    undelined? : boolean;
}
export function Text({size = 'md',color, children, asChild, undelined=false }: TextProps){
    const Comp = asChild ? Slot :'span';
    return (
        <Comp  
            className={clsx(
                "font-sans",
                {
                    'text-deep-blue': color === 'blue',
                    'text-bright-white': color === 'white',
                     
                },
                {
                    'underline': undelined===true,
                },
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-ms': size === 'lg',
                    'text-lg': size === 'xl',   
                     
                }
                )}
        >
           {children}
        </Comp>
    )
}