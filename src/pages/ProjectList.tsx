
import { Header, ProjectCard, ListHeader, Footer} from "../components";
import { createRef, useEffect, useMemo, useState} from "react";
import { HookProjects } from "../hooks";
import { projectSearchable } from "../data";
import { IProjectData } from "../types";
export function ProjectList(){
  
  const { projects,getAll,search,order} = HookProjects();  
  const [querySearch,setQuerySearch] = useState<string>("");
  const [fieldSearch,setFieldSearch] = useState<string>("");
  const [fieldOrder, setFieldOrder] = useState<string>("");
  
  const filteredProjects = useMemo(()=>{
    return projects.filter(item =>{
        return item.nome.toLocaleLowerCase().includes(querySearch.toLocaleLowerCase());    
    })
  },[projects,querySearch,fieldSearch]) 
  const orderedProjects = useMemo(()=>{
    return filteredProjects.sort((a,b)=>{
      /*if (fieldOrder === 'nome'){
        */  return a.nome.localeCompare(b.nome)
      //}
      /*else if (fieldOrder === 'updatedAt') {
          return   b?.updatedAt - a.updatedAt
      }*/
    return a.nome.localeCompare(b.nome);  
    })
      
      
  },[filteredProjects,fieldOrder])

    useEffect(()=>{
      getAll();
    },[getAll]);
  
 return(
        <div  className=" flex flex-col gap-3 justify-between h-screen">
            
            <div className="flex flex-col gap-1">
                <Header/>
             <ListHeader addButton addButtonText={"Novo Projeto"} OnSerching={(e : string,field :string)=>{setQuerySearch(e);setFieldSearch(field)}} OnOrder={(e: string,asc:boolean)=>{setFieldOrder(e)}} listObjectName={"projeto"} searchItems={projectSearchable} buttonLink="/projetos/cadastro"/>
            </div>

            <div className=" h-3/4 flex gap-2 mx-14 mt-2 mb-1 flex-wrap overflow-y-scroll max-w-full">
                { (orderedProjects.length>0) &&
                  orderedProjects.map((iproject,index)=>(
                    <ProjectCard key = {(iproject.id*3 + index).toString()} item = {iproject}/>
                ))
                }
                
            </div>
            <Footer/>
       </div>
    )
}