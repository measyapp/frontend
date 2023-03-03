import { useCallback, useContext, useMemo, useState } from "react"
import { ProjectsService,getLoggedId } from "../services"
import { IProjectData } from "../types"
import { metodologiasList, tiposList } from "../data";
import { useAuth } from "./useAuth";

export const HookProjects = () =>{
    const [projects,setProjects] = useState<IProjectData[]>([]);
    const [singleProject,setsingleProject] = useState<IProjectData>();
    const [querySearch,setQuerySearch] = useState<string>("");
    const [fieldSearch,setFieldSearch] = useState<string>("")
    const [fieldOrder, setFieldOrder] = useState<string>("");

    const getAll =  useCallback(async () =>{
        const idUser= getLoggedId()
        const {status, data} = await ProjectsService.getAllByUser(idUser);
        //console.log(data)
        if(status != 200) throw new Error();
        setProjects(data);
        
    },[])
    const getById =  useCallback(async (id : any) =>{
        const {status, data} = await ProjectsService.getById(id);

        if(status != 200) throw new Error();
        //console.log(data);
        setsingleProject(data);
    },[])
    const create =  useCallback(async (data : IProjectData) =>{
        const idAutor = getLoggedId();
        if (idAutor > 0){
            const {status}= await ProjectsService.create({...data,id_criador: idAutor});
            if (status != 200) throw new Error("Falha criando projeto. Erro no servidor");

        } else {
            throw new Error("Falha criando projeto, informações do usuário inválidas");
        }

    },[])
    const update =  useCallback(async (id: number,data : IProjectData) =>{
        const {status}= await ProjectsService.update(id,data);

        if (status != 200) throw new Error();

    },[])
    
    const search = (Parameter:string,Field: string = "")=>{
        setQuerySearch(Parameter);
        setFieldSearch(Field);
    }
    const order = (Field : any, desc : boolean = false)=>{
        //setProjects(projects.sort());
        console.log(Field+ ' '+desc);
        setFieldOrder(Field);
    }
    const remove = useCallback(async (id : number) =>{
        const {status}= await ProjectsService.remove(id);
        if (status != 200) throw new Error();
        getAll();
    },[])
    return {
        getAll,
        create,
        update,
        getById,
        remove,
        search,
        order,
        projects,
        singleProject
    }
}