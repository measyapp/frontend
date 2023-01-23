
import './styles/globais.css'
import {RequireAuth} from "./components";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import {Home,ProjectList,UserList,ResgisterUser,ResgisterProject, Login, RecuperaSenha, MetricasList,MetricaFile,RedefineSenha} from "./pages"

export function  AppRoutes () {
  return (
    <AuthProvider>
      <Routes>  
      <Route path="/login" element={<Login/>} />
      <Route path="/usuarios/cadastro" element={<ResgisterUser/>} />
      <Route path='/recuperarsenha' element={<RecuperaSenha/>}/>
      <Route path='/redefineSenha/:token' element= {<RedefineSenha/>}/>
      <Route element={<RequireAuth/>}>
        <Route path="/metricas" element={<MetricasList/>} />
        <Route path="/metricas/:id" element={<MetricaFile/>} />
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
