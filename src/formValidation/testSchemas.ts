import * as Yup  from "yup"

import { validateLogin, LoginData, IProjectData, validateProject,IUserData,validateUser } from "../types"

const listSchemas = {
    validateLogin,
    validateProject,
    validateUser
};

export type FormName = keyof typeof listSchemas;
export type FormValues = LoginData | IProjectData | IUserData;


export const testSchema = async(
    schema : FormName,
    value: Partial<FormValues>,
) : Promise<true | Yup.ValidationError[]> =>{

    try{
        const  formSchema = listSchemas[schema];
        await formSchema.validate(value,{
            abortEarly: false,
        });
        return true;
    }catch(err : any){
        return err.inner;
    }
}; 


