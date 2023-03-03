import { Password } from "phosphor-react";
import * as Yup from "yup"
export interface LoginData{
    email: string,
    senha: string,
}

export const validateLogin= Yup.object().shape({
    email: Yup.string()
            .required("Campo obrigatório")
            .email("Email inválido"),
    senha: Yup.string()
            .required("Campo obrigatório")
});




