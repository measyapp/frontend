
import './styles/globais.css'
import { Home,ProjectList,UserList,ResgisterUser,ResgisterProject, Login,RequireAuth} from "./components";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

export function  AppRoutes () {
  return (
    <AuthProvider>
      <Routes>  
      <Route path="/login" element={<Login/>} />
      <Route path="/usuarios/cadastro" element={<ResgisterUser/>} />
      <Route element={<RequireAuth/>}>
        <Route path="/projetos" element={<ProjectList/>} />    
        <Route path="/" element={<Home/>} />
        <Route path="/projetos/cadastro" element={<ResgisterProject/>} /> 
        <Route path="/projetos/:id" element={<ResgisterProject/>} />
        <Route path="/usuarios" element={<UserList/>} /> 
        <Route path="/usuarios/:id" element={<ResgisterUser/>} />
      </Route>
      
    </Routes>
    </AuthProvider>
    
  );
}
