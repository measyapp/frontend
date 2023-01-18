import { ReactNode } from "react";
import { BiHome } from "react-icons/bi";
import { HiOutlineUserCircle,HiChevronLeft } from "react-icons/hi";
import { ButtonIcon, CardButton } from "../components";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export interface HeaderProps{
    children?: ReactNode ;
}
export function Header({children}: HeaderProps){
    const {authorized,logout} = useAuth();
    return (
        <div className='flex h-16 w-screen justify-between bg-deep-blue text-bright-white px-8 py-2 items-center'>
            
            <div className="flex items-center" >
                <Link to=".." relative="path">
                    <CardButton icon={<HiChevronLeft size={39}/>}/> 
                </Link>  
                <Link to="/"> <CardButton icon={<BiHome size={39}/>}/></Link>
            </div>

            {children}
            {authorized ? <ButtonIcon text="Logout" color="white" onClickAlt={logout}/>:<Link to="/login"> <CardButton icon={<HiOutlineUserCircle size={39} className=""/>}/></Link>}
        </div>
        
    );
}