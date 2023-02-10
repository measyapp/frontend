import { useCallback, useContext, useState} from "react"
import { AuthServices } from "../services"
import { IUserData, LoginData } from "../types";
import AuthContext from "../context/AuthProvider";
import { AuthContextType } from "../types/AuthContextType";
import { authToken } from "../services/AuthToken";
import jwt_decode from "jwt-decode"


export const useAuth = () =>{
    
    //const [authorized,setAuthorized] = useState<boolean>(false)
    var success = false; 
    const isLogged = ()=>{
        const token = authToken()
        if(token==='') return false;
        let isExpired = false; 
        let decodedToken = jwt_decode(token) as any;
        let currentDate = new Date();

        if (decodedToken&&decodedToken.exp&&(decodedToken.exp * 1000 < currentDate.getTime())) {
            isExpired=true;
        }
        return !isExpired;
    }
    const login =  useCallback(async (Ldata : LoginData) =>{
       
        const {status,data} = await AuthServices.login(Ldata);
        console.log(data);
       if(status === 200) {
            localStorage.setItem('user',JSON.stringify(data));
        }
       
       return {status};
    },[])
    
    const logout =  useCallback(async () =>{
        const {status} = await AuthServices.logout();
        
        localStorage.removeItem('user');
    },[])
    const signup =  useCallback(async (data : IUserData) =>{
        const {status} = await AuthServices.signup(data);
        if(status !== 201) { alert("Falha Criando Usuário. Tente Novamente"); throw new Error();};

    },[])

    const getTokenPassReset = async (email : string )=>{
        const {status,data} = await AuthServices.getTokenPassReset(email);

        return data.token;
    }

    const resetPassword= async (newPass : String, token : String)=>{
        const {status, data} =  await AuthServices.resetPassword(newPass,token);
        return status
    }
    return {
        login,
        logout,
        signup,
        isLogged,
        getTokenPassReset,
        resetPassword,
        success
    }
}