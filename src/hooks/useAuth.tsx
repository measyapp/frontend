import { useCallback, useMemo, useState, useContext} from "react"
import { AuthServices } from "../services"
import { IUserData, LoginData } from "../types";
import AuthContext from "../context/AuthProvider";
import { AuthContextType } from "../types/AuthContextType";
import { UserInfo } from "os";


export const useAuth = () =>{
    const {setAuthorized,authorized} = useContext(AuthContext) as AuthContextType;
   
    //const [authorized,setAuthorized] = useState<boolean>(false)
    const login =  useCallback(async (Ldata : LoginData) =>{
        const {status,data} = await AuthServices.login(Ldata);
        console.log(data);
       if(status === 200) {setAuthorized(true)}
       return {status};
    },[])
    
    const logout =  useCallback(async () =>{
        const {status} = await AuthServices.logout();
    
        if(status === 200) {setAuthorized(false)}
    },[])
    const signup =  useCallback(async (data : IUserData) =>{
        const {status} = await AuthServices.signup(data);
    
        if(status === 200) {setAuthorized(false)}
    },[])
    return {
        login,
        logout,
        authorized,
        signup
    }
}

/*export const useAuth = ()=>{
    return useContext(AuthContext);
}*/
