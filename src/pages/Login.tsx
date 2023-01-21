import {  Header, Footer,ButtonIcon, TextInput, Text,Checkbox} from "../components";
import { Link, useNavigate,useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import { Envelope, Keyhole, Warning} from "phosphor-react";
import { useAuth } from "../hooks/useAuth";
import { createRef, useState } from "react";
import { LoginData } from "../types";
import { useFormValidation } from "../formValidation/useFormValidation";

export function Login(){
  const {login} = useAuth();

  const  navigate = useNavigate(); 
  const location = useLocation();

  const from = location.state?.from?.pathname||"/";
  const emailRef = createRef<any>();
  const passRef = createRef<any>();

  const [error,setError] = useState<string>("");
  
  const {validateError,handleErrorMessage,clearErrors} = useFormValidation<LoginData>('validateLogin');

  const onSubmit= async ()=>{
    setError("");
    const result = await validateError({email:emailRef.current.value,senha:passRef.current.value} as LoginData);
    /*if(emailRef.current.value==="" || passRef.current.value==="") setError("Preencha as campos de email e login")
    else*/
    //console.log(erroItems);
    if(result===true) {
      clearErrors();
      login({email:emailRef.current.value,senha:passRef.current.value} as LoginData)
        .then(()=>{navigate(from,{replace: true});})
        .catch((e : any)=>{setError("Email e/ou senha incorretos.")});
    }
  }
    return(
      <div  className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
        <Header/>
        <div className="flex gap-44 place-items-center">
            <img src={logo} width={587} />
            <div className="flex-col w-500 h-fit pt-6 pb-6 pl-5 pr-10  rounded-3xl gap-3 ring-2 ring-deep-blue shadow-md">
              {/*Linha de exibição de erro no login*/}
              {error.length>0&&<div className="h-fit ml-5 flex gap-2 text-sm p-3 rounded-lg flex-wrap mb-3 break-words text-incorrect-red place-items-center justify-center ring-incorrect-red ring-2">
                  <Warning size={20}/>
                  {error}
                </div>
                }
                <div className=" flex flex-col gap-5 ml-6 place-items-center justify-center ">
                  <TextInput mref = {emailRef} light icon={<Envelope size={25}/>} label="E-mail:"  placeholder="email@email.com" 
                  {...handleErrorMessage("email")}
                  />
                  <TextInput mref = {passRef} light icon={<Keyhole size={25}/>} label="Senha:" senha  placeholder="********" 
                   {...handleErrorMessage("senha")}
                  />
                  <div className=" flex flex-col w-full mt-5 rounded-2xl place-items-center">
                      <ButtonIcon text="Entrar na plataforma" onClickAlt={onSubmit}/>
                </div>

                <Link to="/recuperarsenha" className="flex place-items-center justify-center"> <Text size="sm" bold underlined> Esqueceu a senha? </Text></Link>
                <Link to="/usuarios/cadastro" className="flex place-items-center justify-center"> <Text size="sm" underlined bold>Não tem conta ainda? Cadastre-se agora.</Text></Link>
                </div>
                
            </div>
                
          </div>
          
        <Footer/>
      </div>  
             
    )
}