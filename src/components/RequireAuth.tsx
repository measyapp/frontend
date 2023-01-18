import { useLocation,Navigate,Outlet } from "react-router-dom";
import {useAuth} from "../hooks/useAuth"

export const RequireAuth = ()=>{
    const { authorized } = useAuth();
    const location = useLocation();
    console.log(authorized);
    return (
        authorized!==undefined&&authorized?
            <Outlet/>
          : <Navigate to="/login" state={{from: location}} replace />
    )
}