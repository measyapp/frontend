import { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import {AuthContextType} from "../types/AuthContextType"
const AuthContext = createContext<AuthContextType|null>(null);
export const AuthProvider = ({children} : any) =>{
    const [authorized, setAuthorized] = useState<boolean>(false)
    return (
        <AuthContext.Provider value={{authorized, setAuthorized}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
