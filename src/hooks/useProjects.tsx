import { useCallback, useState } from "react"
import { ProjectsService } from "../services"
import { IProjectData } from "../types"
import { metodologiasList, tiposList } from "../data";

export const HookProjects = () =>{
    const [projects,setProjects] = useState<IProjectData[]>([]);
    const [singleProject,setsingleProject] = useState<IProjectData>();
    
    const getAll =  useCallback(async () =>{
        const {status, data} = await ProjectsService.getAll();

        if(status != 200) throw new Error();

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
    
    const search = (Parameter:string,Field: String = "")=>{
        if (Parameter===""){
            getAll();
        } else{
            if (Field == "metodologia"){
                return setProjects(projects.filter((element)=>{
                    return projects.some((index)=>{
                        return metodologiasList[element.metodologia].description.toLowerCase().includes(Parameter.toLocaleLowerCase());
                    })
                }))
            }
            else if (Field == "tipo"){
                return setProjects(projects.filter((element)=>{
                    return projects.some((index)=>{
                        return tiposList[element.tipo].description.toLowerCase().includes(Parameter.toLocaleLowerCase());
                    })
                }))
            } 
            else setProjects(projects.filter((element)=>{
                return projects.some((index)=>{
                    return element.nome.toLowerCase().includes(Parameter.toLocaleLowerCase());
                })
            }));
        }
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
        singleProject
    }
}