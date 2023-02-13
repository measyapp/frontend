import *  as Yup from "yup"
export interface IProjectData{
  id: number
  id_criador?: string
  nome: string
  descricao: string
  metodologia: number
  tipo: number
  tamanho: number
  gerente: string
  createdAt: Date,
  updatedAt: Date
  }

export const validateProject = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
  descricao: Yup.string().
              min(3,"A descricao do projeto deve conter entre 3 e 255 caracteres").
              max(255,"Limite máximo de, 255 caracteres, excedido"),
  gerente:  Yup.string().
            min(3,"O campo gerente dev conter entre 3 e 100 caracteres").
            max(255,"Limite máximo de 100 caracteres, excedido"),

});
  