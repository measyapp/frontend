import clsx from 'clsx';
import { ChangeEvent,ReactNode, useState,forwardRef, Ref } from 'react';
import { Text } from './Text';
export interface TextInputProps{
    richText?: boolean | false;
    senha?: boolean | false;
    placeholder?: string;
    label? : string;
    icon? : ReactNode;
    OnChange? : (event: ChangeEvent<HTMLInputElement>) => void;
    txtValue?: string;
    light?: boolean | false;
    mref?: Ref<any> | null;
    error?: boolean | false;
    helperText?: string | "";
    readonly?: boolean | false;
}


export function TextInput (props:TextInputProps){
    const [focused, setFocus] = useState<boolean>(false);
    return (
        <div className={clsx('flex flex-col gap-2 w-full ',{
                            '  text-deep-blue': !props.error, 
                            '  text-incorrect-red': props.error, 
        })}>
            {props.label&&<Text color='blue' bold size='lg'>{props.label}</Text>}
            <div className={clsx('flex ring-2 overflow-hidden  rounded-xl w-full bg-gray-100',
                                {'h-28': props.richText,
                                 'h-11':!props.richText,
                                 ' ring-deep-blue': !props.error, 
                                 ' ring-incorrect-red': props.error, 
                                })
                            }
            >
                {props.icon!==undefined &&(
                    <div className={clsx('px-2 pt-2 place-items-center items-center irst-letter:text-center justify-centerrounded-l-xl h-full',
                                    {
                                        'bg-deep-blue  text-bright-white ': !props.light,
                                        'bg-none text-deep-blue ': props.light,
                                        'bg-bright-white': props.light&&focused,
                                    }
                                    )}>
                            {props.icon}
                    </div>
                )}
                {/**Se estiver assinalado com um rich text, utiliza a tag rich text, se nao utiliza o input*/}
               {props.richText? 
               <textarea readOnly={props.readonly} ref={props.mref as Ref<HTMLTextAreaElement> } defaultValue={props.txtValue!==undefined?props.txtValue:''} className={clsx('h-full w-full px-2 focus:bg-bright-white  bg-gray-100 outline-none outline-1 text pt-2',
                    {
                        'rounded-r-xl' : props.icon!==undefined,
                        'rounded-xl' : props.icon===undefined,
                        'bg-bright-white': focused,
        
                    })} 
                    onChange={(e) => props.OnChange}
                />: <input ref={props.mref as Ref<HTMLInputElement>}  onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}} type= {props.senha?"password":"text"} defaultValue ={props.txtValue} 
                            className={clsx('h-full w-full px-3 focus:bg-bright-white  bg-gray-100 outline-none outline-1 '   ,
                                        {
                                            'rounded-r-xl' : props.icon!==undefined,
                                            'rounded-xl' : props.icon===undefined,
                            
                                        }
                )} placeholder={props.placeholder} onChange={(e) => props.OnChange}/>
                }
            </div>

            {props.error&&(<Text>{props.helperText}</Text>)}
        </div>
    )
}