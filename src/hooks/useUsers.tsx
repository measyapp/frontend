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
        users,
        user
    }
}