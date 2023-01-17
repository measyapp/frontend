
import './styles/globais.css'
import { Home,ProjectList,UserList,ResgisterUser,ResgisterProject} from "./components";
import { Routes, Route } from 'react-router-dom';



export function  AppRoutes () {
  return (
    <Routes>  
      <Route path="/" element={<Home/>} />
      <Route path="/projetos" element={<ProjectList/>} />    
      <Route path="/projetos/cadastro" element={<ResgisterProject/>} /> 
      <Route path="/projetos/:id" element={<ResgisterProject/>} />
      <Route path="/usuarios" element={<UserList/>} /> 
      <Route path="/usuarios/cadastro" element={<ResgisterUser/>} />
      <Route path="/usuarios/:id" element={<ResgisterUser/>} />
    </Routes>
  );
}
