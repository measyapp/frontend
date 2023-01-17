
import { Header, ProjectCard, ListHeader, Footer} from "../components";
import { useEffect} from "react";
import { HookProjects } from "../hooks";
import { projectSearchable } from "../data";
export function ProjectList(){

 const {projects, getAll,search,order} = HookProjects();  
  useEffect(()=>{
    getAll();
  },[getAll]);
  
 return(
        <div  className=" flex flex-col gap-3 justify-between h-screen">
            
            <div className="flex flex-col gap-1">
                <Header>
                    <h5 className="text-2xl">Meus Projetos</h5>
                </Header>
             <ListHeader OnSerching={search} OnOrder={order} listObjectName={"projeto"} searchItems={projectSearchable} buttonLink="/projetos/cadastro"/>
            </div>

            <div className=" h-3/4 flex gap-2 mx-14 mt-2 mb-1 flex-wrap overflow-y-scroll max-w-full">
                { (projects.length>0) &&
                  projects.map((iproject,index)=>(
                    <ProjectCard key = {(iproject.id + index).toString()} item = {iproject}/>
                ))
                }
                
            </div>
            <Footer/>
       </div>
    )
}