import { useCallback, useState } from "react"
import { UserService, getLoggedId } from "../services"
import { IUserData } from "../types"
import { useAuth } from "./useAuth";

export const HookUsers = () =>{
    const [users,setUsers] = useState<IUserData[]>([]);
    const [user,setSingleUser] = useState<IUserData>();
    const getAll =  useCallback(async () =>{
        const {status, data} = await UserService.getAll();

        if(status != 200) throw new Error();

        setUsers(data);
        
    },[])
    const getById =  useCallback(async (id : any) =>{
        const {status, data} = await UserService.getById(id);

        if(status != 200) throw new Error();

        setSingleUser(data);
    },[])
    
    const create =  useCallback(async (data : IUserData) =>{
        
        const {status}= await UserService.create(data);
        if (status != 200) throw new Error();

    },[])
    const update =  useCallback(async (id: number,data : IUserData) =>{
        const {status}= await UserService.update(id,data);

        if (status != 200) throw new Error();

    },[])
    
    const search = (Parameter:string,Field='')=>{
        if (Parameter===""){
            getAll();
        } else{
            setUsers(users.filter((element)=>{

                return users.some((index)=>{
                    return element.nome.toLowerCase().includes(Parameter.toLocaleLowerCase());
                })
            }));
        }
    }
    const order = (Field : any)=>{
        //setUsers(users.sort());
        setUsers(users.sort((a,b)=>{ 
           if (a.nome === undefined ) return -1
           if (b.nome === undefined ) return 1
           return  (a.nome) > (b.nome) ? 1:-1
        }));
    }
    const remove = useCallback(async (id : number) =>{
        const {status}= await UserService.remove(id);
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
        users,
        user
    }
}