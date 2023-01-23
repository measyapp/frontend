import { ReactNode } from "react";
import { BiHome } from "react-icons/bi";
import { HiOutlineUserCircle,HiChevronLeft } from "react-icons/hi";
import { ButtonIcon, CardButton } from "../components";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MdCancel } from "react-icons/md";

export interface HeaderProps{
    children?: ReactNode ;
    clean?: boolean| false;
}
export function Header({children, clean=false}: HeaderProps){
    const {logout,isLogged} = useAuth();
    const navegador = useNavigate();
    return (
        <div className='flex h-16 w-screen justify-between place-items-center bg-deep-blue px-10 text-bright-white items-center'>
            <div className="flex items-center" >
                <Link to=".." relative="route">
                    <CardButton icon={<HiChevronLeft size={39}/>}/> 
                </Link>  
                <Link to="/"> <CardButton icon={<BiHome size={39}/>}/></Link>
            </div>
            {children}
            {isLogged() ? <Link to="/"><CardButton label="Logout" icon={<MdCancel size={25} onClick={(e)=>{logout()}}/>}/> </Link> :<Link to="/login"> <CardButton icon={<HiOutlineUserCircle size={39} className=""/>}/></Link>}
        </div>
        
    );
}