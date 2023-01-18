import { Header, Footer} from ".";
import { ButtonIcon, TextInput, Text,Checkbox} from ".";
import { Link, useNavigate,useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import { Envelope, Keyhole, Warning} from "phosphor-react";

import { useAuth } from "../hooks/useAuth";
import { createRef, useEffect, useState } from "react";
import { LoginData } from "../types";

export function Login(){
  const {login} = useAuth();

  const  navigate = useNavigate(); 
  const location = useLocation();

  const from = location.state?.from?.pathname||"/";
  const emailRef = createRef<any>();
  const passRef = createRef<any>();

  const [error,setError] = useState<string>("");

  const onSubmit=  ()=>{
    setError("");
    if(emailRef.current.value==="" || passRef.current.value==="") setError("Preencha as campos de email e login")
    else login({email:emailRef.current.value,senha:passRef.current.value} as LoginData)
        .then(()=>{navigate(from,{replace: true});})
        .catch((e : any)=>{setError("Email ou senha incorretos. Tente Novamente")});
  }
    return(
      <div  className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
        <Header/>
          <div className="flex flex-col max-w-4xl items-center w-96 h-2/3 gap-3 -ml-10">
                <div className="flex flex-col gap-2 place-items-center">
                  <img src={logo} width={212} />
                  <h1 className="-mt-16"> Ferramenta de Métricas</h1>    
                </div>
                {error.length>0?<div className=" w-fit h-fit flex gap-2 text-sm text-incorrect-red">
                  <Warning size={24}/>
                  {error}
                </div>:<></>}
                <div className="flex flex-col gap-5 w-96">
                  <TextInput mref = {emailRef} light icon={<Envelope size={25}/>} label="E-mail:"  placeholder="email@email.com" />
                  <TextInput mref = {passRef} light icon={<Keyhole size={25}/>} label="Senha:" senha  placeholder="********" />
                  {/*<div className="flex gap-4 place-content-start mx-12 my-2">
                    <Checkbox/>
                    <Text size="sm" >Lembrar de mim por 30 dias.</Text>
                    </div>*/}
                  <div className=" flex flex-col w-full rounded-2xl place-items-center">
                      <ButtonIcon text="Entrar na plataforma" onClickAlt={onSubmit}/>
                  </div>
                
                </div>
                <Link to="#"> <Text size="sm" undelined> Esqueceu a senha? </Text></Link>
                <Link to="/usuarios/cadastro"> <Text size="sm" undelined>Não tem conta ainda? Cadastre-se agora.</Text></Link>

                
          </div>
        <Footer/>
      </div>  
             
    )
}