import { useLocation,Navigate,Outlet } from "react-router-dom";
import {useAuth} from "../hooks/useAuth"
import { authToken } from "../services/utils";

export const RequireAuth = ()=>{
    const {isLogged} = useAuth();
    const location = useLocation();

    console.log(isLogged());
    return (
        isLogged()?
            <Outlet/>
          : <Navigate to="/login" state={{from: location}} replace />
    )
}