import { BookOpen, TreeStructure, UsersFour } from 'phosphor-react'
import {ButtonMenu} from '../components'
import { Link } from 'react-router-dom'

export function Menu(){
    return (
        <div className=' flex-col items-center justify-center gap-12'> 
            <Link to='/projetos'> <ButtonMenu icon = {<TreeStructure/>}> Projetos</ButtonMenu> </Link>
            <Link to = '/usuarios'><ButtonMenu icon = {<UsersFour/>} >Colaboradores</ButtonMenu></Link>
            <ButtonMenu icon = {<BookOpen/>}  notActive>Métricas</ButtonMenu>
            
        </div>
    )
}