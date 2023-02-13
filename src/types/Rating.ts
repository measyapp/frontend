export interface IRatingData {
    id:  number,
    id_autor: number,
    id_indicacao : number,
    nota: number,
    createdAt : Date,
    updatedAt: Date,
    comentario: string,
    nome_autor?: string;
}

