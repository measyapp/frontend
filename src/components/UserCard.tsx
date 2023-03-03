import { FaPencilAlt,FaTrash } from "react-icons/fa";
import { IProjectData, IUserData } from "../types";
import { CardButton } from "../components";
import { HookUsers } from "../hooks";
import { useNavigate } from "react-router-dom";
import { User } from "phosphor-react";
import { funcaoList } from "../data";

export interface UserCardProps{
    item : IUserData;
}

export function UserCard({item} : UserCardProps){
    const{remove}= HookUsers();
    const navigator = useNavigate();
    const deleteUser = () =>{
        remove(item.id);
        window.location.reload();
    }
    const editUser = () =>{
        //remove(item.id);
        navigator(`/usuarios/${item.id}`)
    }
    const dateOptions : Intl.DateTimeFormatOptions  = {
        day: "numeric", month: "numeric", year: "numeric",
        hour: "2-digit", minute: "2-digit"
    } ;
    return(
         <div className="h-36 w-96 m-3 bg-bright-white overflow-hidden ring-deep-blue ring-2 rounded-xl">
            <div className="bg-deep-blue h-10 flex gap-2 px-12 font-sans text-lg text-bright-white text-center pt-1 py-1">
                <User size={24}/>
                {item.nome} 
            </div>
            <p className="h-6 resize-none w-full break-words overflow-hidden max-h-12 mt-3 px-6 font-sans text-md text-deep-blue break-word">{funcaoList[item.funcao|0]?.description}</p>
            <div className="flex gap-2 font-sans text-xs place-items-end mt-1.5  text-deep-blue text-center break-word self-end pt-2">
                <p className="mr-2 ml-4 text-center">
                    Modificado em {item&&new Date(item.updatedAt).toLocaleDateString('pt-BR',dateOptions).toLocaleLowerCase()}</p>
                  <CardButton icon={<FaPencilAlt/>} label="Editar" onClick={editUser}/>
                  <CardButton icon={<FaTrash/>} label = "Excluir" onClick={deleteUser}/>
            </div>
        </div>
    ) 
}