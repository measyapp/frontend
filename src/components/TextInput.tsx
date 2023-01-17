import clsx from 'clsx';
import { ChangeEvent,ReactNode, useState } from 'react';
import { Text } from './Text';
export interface TextInputProps{
    richText?: boolean;
    senha?: boolean;
    placeholder?: string;
    label? : string;
    icon? : ReactNode;
    OnChange? : Function;
    txtValue?: string;
    light?: boolean
}


export function TextInput({richText=false,light=false,label,icon,txtValue,placeholder,OnChange,senha=false}:TextInputProps){
    const [focused, setFocus] = useState<boolean>(false);
    const onChangeHandler= ( e: ChangeEvent<HTMLInputElement> ) =>{
        if (OnChange!== undefined ){
            OnChange(e.target.value);
        }
    }
    return (
        <div className='flex flex-col gap-2 text-deep-blue w-full ml-7'>
            {label&&<Text color='blue' size='lg'>{label}</Text>}
            <div className={clsx('flex ring-2 overflow-hidden  ring-deep-blue rounded-xl w-full min bg-gray-100',{'h-40': richText,'h-11':!richText })}>
                {icon!==undefined &&(
                    <div className={clsx('px-2 pt-2 place-items-center items-center irst-letter:text-center justify-centerrounded-l-xl h-full',
                                    {
                                        'bg-deep-blue  text-bright-white ': !light,
                                        'bg-none text-deep-blue ': light,
                                        'bg-bright-white': light&&focused,
                                    }
                                    )}>
                            {icon}
                    </div>
                )}
                {/**Se estiver assinalado com um rich text, utiliza a tag rich text, se nao utiliza o input*/}
               {richText? 
               <textarea defaultValue={txtValue!==undefined?txtValue:''} className={clsx('h-full w-full px-2 focus:bg-bright-white  bg-gray-100 outline-none outline-1 text pt-2',
                    {
                        'rounded-r-xl' : icon!==undefined,
                        'rounded-xl' : icon===undefined,
                        'bg-bright-white': focused,
        
                    })} 
                    onChange={(e)=>{onChangeHandler(e as unknown as ChangeEvent<HTMLInputElement>)}}
                />: <input onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}} type= {senha?"password":"text"} defaultValue ={txtValue} 
                            className={clsx('h-full w-full px-3 focus:bg-bright-white  bg-gray-100 outline-none outline-1 '   ,
                                        {
                                            'rounded-r-xl' : icon!==undefined,
                                            'rounded-xl' : icon===undefined,
                            
                                        }
                )} placeholder={placeholder} onChange={(e)=>{onChangeHandler(e)}}/>
                }
            </div>
        </div>
    )
}