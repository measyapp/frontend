import { FaPencilAlt,FaTrash } from "react-icons/fa";
import { IProjectData } from "../types";
import { CardButton } from "../components";
import { HookProjects } from "../hooks";
import { useNavigate } from "react-router-dom";
//import moment from "moment";

export interface ProjectCardProps{
    item : IProjectData;
}

export function ProjectCard({item} : ProjectCardProps){
    const{remove}= HookProjects();
    const navigator = useNavigate();
    const deleteProject = () =>{
        remove(item.id);
        window.location.reload();
    }
    const editProject = () =>{
        //remove(item.id);
        navigator(`/projetos/${item.id}`)
    }
    const dateOptions : Intl.DateTimeFormatOptions  = {
        day: "numeric", month: "numeric", year: "numeric",
        hour: "2-digit", minute: "2-digit"
    } ;
    return(
         <div className="h-40 w-96 m-3 bg-bright-white overflow-hidden ring-deep-blue ring-2 rounded-xl">
            <div className="bg-deep-blue h-10  font-sans text-lg text-bright-white text-center py-1">
                {item.nome} 
            </div>
            <p className="h-12 resize-none w-full break-words overflow-hidden max-h-12 mt-3 px-6 font-sans text-md text-deep-blue text-cente break-word"> {item.descricao}</p>
            <div className="flex gap-2 font-sans text-xs place-items-end mt-1.5  text-deep-blue text-center break-word self-end pt-2">
                <p className="mr-2 ml-4 text-center">Modificado em {item&&new Date(item.updatedAt).toLocaleDateString('pt-BR',dateOptions).toLocaleLowerCase()}</p>
                  <CardButton icon={<FaPencilAlt/>} label="Editar" onClick={editProject}/>
                  <CardButton icon={<FaTrash/>} label = "Excluir" onClick={deleteProject}/>
            </div>
        </div>
    ) 
}