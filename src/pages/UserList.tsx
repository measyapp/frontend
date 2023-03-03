
import { FaPencilAlt,FaTrash } from "react-icons/fa";
import { Header, ProjectCard, ListHeader, Footer} from "../components";
import { useEffect, useMemo, useState} from "react";
import { HookUsers } from "../hooks";
import { IProjectData } from "../types";
import { useNavigate } from "react-router-dom";
import { ButtonIcon, Text, UserCard} from "../components";

import { Link } from "react-router-dom";

import { Graph,IdentificationBadge} from "phosphor-react";


export function UserList(){
const navigator = useNavigate();

const [querySearch,setQuerySearch] = useState<string>("");
const [fieldSearch,setFieldSearch] = useState<string>("");
const [fieldOrder, setFieldOrder] = useState<string>("");
const {users, getAll} = HookUsers();  
  const filteredUsers = useMemo(()=>{
      return users.filter(item =>{
          return item.nome.toLocaleLowerCase().includes(querySearch.toLocaleLowerCase());    
      })
    },[users,querySearch,fieldSearch]) 

  const orderedUsers = useMemo(()=>{
      //console.log(fieldOrder);
     return filteredUsers.sort((a,b)=>{
          if (fieldOrder === 'nome desc'){
            return (-1)*a.nome.localeCompare(b.nome)
          } else if (fieldOrder === 'updatedAt') {
            return new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1
           }
          return a.nome.localeCompare(b.nome);  
        })
  },[filteredUsers,fieldOrder])

  
 
    useEffect(()=>{
      getAll();
    },[getAll]);

 return(
  
  <div  className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
    <div  className=" flex flex-col gap-3 justify-between h-screen">
            
            <div className="flex flex-col gap-1">
                <Header>
                    <Text bold >Colaboradores</Text>
                </Header>
             <ListHeader addButton addButtonText={"Novo Colaborador"}  OnSerching={(e : string,field :string)=>{setQuerySearch(e);setFieldSearch(field)}} OnOrder={(e: string,asc:boolean)=>{setFieldOrder(e)}} listObjectName={"colaborador"} buttonLink="/usuarios/cadastro"/>
            </div>

            <div className=" h-3/4 flex gap-2 mx-14 mt-2 mb-1 flex-wrap overflow-y-scroll max-w-full">
            { (orderedUsers.length>0) &&
                  orderedUsers.map((iuser,index)=>(
                    <UserCard key = {(index).toString()} item = {iuser}/>
                ))
              }
            </div>
            <Footer/>
  </div>

</div>

       
    )
}