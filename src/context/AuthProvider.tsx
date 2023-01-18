import { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import {AuthContextType} from "../types/AuthContextType"
const AuthContext = createContext<AuthContextType|null>(null);

export const AuthProvider = ({children} : any) =>{
    const [token,setToken] = useState<string>('');

    return (
        <AuthContext.Provider value={{token,setToken}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
