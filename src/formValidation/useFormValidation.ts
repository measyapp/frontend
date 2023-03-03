import { useState, useCallback } from "react";

import { validateForm, ErrorInterface } from ".";

import { FormName, FormValues } from "./testSchemas";

export type DefaultForm = {[key: string]: unknown};

export const useFormValidation = <Form = DefaultForm >(formName : FormName) =>{

    const [erroItems, setErroritems] = useState<ErrorInterface>();
    
    const validateError =async (formParams: FormValues) => {
        const errors = await validateForm(formParams, formName);

        if(errors){
            setErroritems(errors);
            return false;
        }
        return true;
    }

    const handleErrorMessage = useCallback(
        (item: keyof Form, helperText?:string)=>{
            const error = erroItems?.errors.find(
                (err)=>
                    err.item===item
            );
            if (error) return {error: true, helperText: error?.message}

            return {helperText};
        },[erroItems]
    );

   const clearErrors= ()=>{
        setErroritems(undefined)
   }

   return {handleErrorMessage,clearErrors,validateError,erroItems}
}
