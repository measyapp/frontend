
import { FaPencilAlt,FaTrash } from "react-icons/fa";
import { Header, ProjectCard, ListHeader, Footer} from "../components";
import { useEffect} from "react";
import { HookUsers } from "../hooks";
import { IProjectData } from "../types";
import { useNavigate } from "react-router-dom";
import { ButtonIcon, Text, UserCard} from "../components";

import { Link } from "react-router-dom";

import { Graph,IdentificationBadge} from "phosphor-react";


export function UserList(){
const navigator = useNavigate();

 const {users, getAll,search} = HookUsers();  
    useEffect(()=>{
    getAll();
  },[getAll]);

  const editUser = () =>{
    //Falta colocar o ID
    navigator('/usuarios/cadastro/:id');
  }

 return(
  
  <div  className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
    <div  className=" flex flex-col gap-3 justify-between h-screen">
            
            <div className="flex flex-col gap-1">
                <Header>
                    <Text bold >Colaboradores</Text>
                </Header>
             <ListHeader addButton addButtonText={"Novo Colaborador"}  OnSerching={search} listObjectName={"colaborador"} buttonLink="/usuarios/cadastro"/>
            </div>

            <div className=" h-3/4 flex gap-2 mx-14 mt-2 mb-1 flex-wrap overflow-y-scroll max-w-full">
            { (users.length>0) &&
                  users.map((iuser,index)=>(
                    <UserCard key = {(iuser.id + index).toString()} item = {iuser}/>
                ))
              }
            </div>
            <Footer/>
  </div>

</div>

       
    )
}