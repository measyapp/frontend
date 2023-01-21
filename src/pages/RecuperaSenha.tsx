import { Envelope, Key } from "phosphor-react";
import { ButtonIcon, Footer, Header, Text, TextInput } from "../components";
import logo from "../images/logo.svg"
import { createRef } from "react";
export function RecuperaSenha(){

    const emailRef = createRef<string>();
    return (
        <div className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
            <Header/>
            <div className=" flex ring-deep-blue gap-12 px-10 ring-2 w-900 h-96 rounded-3xl">
               <img src={logo} width={228} />
               <div className="flex flex-col gap-4 mt-16">
                    
                    <div className="flex gap-2 place-items-center">
                        <Key size={24} stroke="2"/>
                        <Text color="blue" size='xl' bold>Recuperacao de senha</Text>
                    </div>

                    <Text color="blue">
                            Digite seu endereço de e-mail abaixo. 
                            Se houver uma conta Measy associada ao 
                            endereço informado, enviaremos as 
                            instruções para  a redefinição da senha
                    </Text>

                    <TextInput mref = {emailRef} light icon={<Envelope size={25}/>}  placeholder="email@email.com" />

                    <div className=" flex flex-col w-full mt-5 rounded-2xl place-items-center">
                        <ButtonIcon text="Enviar e-mail de recuperação de senha"/>
                    </div>
                   
               </div>
            </div>

            <Footer/>
        </div>
    )
}