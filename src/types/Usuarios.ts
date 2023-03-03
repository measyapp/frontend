import * as Yup from "yup"
export interface IUserData{
    id: number,
    nome: string,
    cpf: string,
    funcao: number,
    email: string,
    senha: string,
    createdAt?: Date,
    updatedAt: Date
}

export const validateUser = Yup.object().shape({
    nome:  Yup.string().
            required("Campo Obrigatório").
            min(3,"O nome deve conter entre 3 e 100 caracteres").
            max(100,"Limite máximo de 100 caracteres, excedido"),
    email: Yup.string().required("Campo Obrigatório").
              email("Email inválido"),
    cpf:   Yup.string().required("Campo Obrigatório").
            matches(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/,"Formato de CPF inválido. Ex.: 123.456.789-10"),
    senha: Yup.string().required("Campo Obrigatório")
           .min(6,"A senha deve conter no mínimo 6 caracteres"),
   
    

});