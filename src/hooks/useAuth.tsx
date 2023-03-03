import { useCallback, useContext, useState} from "react"
import { AuthServices } from "../services"
import { IUserData, LoginData } from "../types";
import AuthContext from "../context/AuthProvider";
import { AuthContextType } from "../types/AuthContextType";
import { authToken } from "../services/utils";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router";


export const useAuth = () =>{
    
    //const [authorized,setAuthorized] = useState<boolean>(false)
    var success = false;
    const navigator = useNavigate();  
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
        if(status === 200) {
            localStorage.setItem('user',JSON.stringify(data));
        }
       
       return {status};
    },[])
    
    const logout =  useCallback(async () =>{
        const {status} = await AuthServices.logout();
        localStorage.removeItem('user');
        navigator("/login");
    },[])
    const signup =  useCallback(async (edata : IUserData) =>{
        const {status,data} = await AuthServices.signup(edata);
        
        if(status !== 201) { alert("Falha Criando Usuário."+data?.msg!==undefined?data.msg:""+". Tente novamente."); throw new Error();};

    },[])

    const getTokenPassReset = async (email : string )=>{
        const {status,data} = await AuthServices.getTokenPassReset(email);

        return data.token;
    }

    const resetPassword= async (newPass : String, token : String)=>{
        const {status, data} =  await AuthServices.resetPassword(newPass,token);
        if (status===204){alert("Senha alterada com sucesso");}
        else {alert("Falha alterando senha. "+data.msg);}
        navigator("/login");
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