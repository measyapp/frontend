import { useCallback, useContext, useMemo, useState } from "react"
import { ProjectsService } from "../services"
import { IProjectData } from "../types"
import { metodologiasList, tiposList } from "../data";
import { useAuth } from "./useAuth";

export const HookProjects = () =>{
    const {isLogged} = useAuth();
    const [projects,setProjects] = useState<IProjectData[]>([]);
    const [singleProject,setsingleProject] = useState<IProjectData>();
    const [querySearch,setQuerySearch] = useState<string>("");
    const [fieldSearch,setFieldSearch] = useState<string>("")

    const filteredProjects = useMemo(()=>{
        return projects.filter(item =>{
            return item.nome.toLocaleLowerCase().includes(querySearch.toLocaleLowerCase());    
        })
      },[projects,querySearch,fieldSearch]) 

    const getAll =  useCallback(async () =>{
        const {status, data} = await ProjectsService.getAll();

        if(status != 200) throw new Error();
        //console.log(data)
        setProjects(data);
        
    },[])
    const getById =  useCallback(async (id : any) =>{
        const {status, data} = await ProjectsService.getById(id);

        if(status != 200) throw new Error();

        setsingleProject(data);
    },[])
    const create =  useCallback(async (data : IProjectData) =>{
        const {status}= await ProjectsService.create(data);

        if (status != 200) throw new Error();

    },[])
    const update =  useCallback(async (id: number,data : IProjectData) =>{
        const {status}= await ProjectsService.update(id,data);

        if (status != 200) throw new Error();

    },[])
    
    const search = (Parameter:string,Field: string = "")=>{
        setQuerySearch(Parameter);
        setFieldSearch(Field);
    }
    const order = (Field : any)=>{
        //setProjects(projects.sort());
        setProjects(projects.sort((a,b)=>{ 
           if (a.nome === undefined ) return -1
           if (b.nome === undefined ) return 1
           return  (a.nome) > (b.nome) ? 1:-1
        }));
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
        filteredProjects,
        singleProject
    }
}