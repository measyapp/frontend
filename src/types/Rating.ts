export interface IRatingData {
    id:  number,
    id_autor?: number,
    id_indicacao : number | string,
    nota: number,
    createdAt : Date,
    updatedAt: Date,
    comentario: string,
    nome?: string | "Projeto Measy - Default";

}

