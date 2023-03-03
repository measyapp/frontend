import { Check, Envelope, Eraser, Key, Warning } from "phosphor-react";
import { ButtonIcon, Footer, Header, Text, TextInput } from "../components";
import logo from "../images/logo.svg"
import { createRef, useState} from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import { useAuth } from "../hooks/useAuth";
export function RecuperaSenha(){
    const {getTokenPassReset} = useAuth();
    const [envio, setEnvio] = useState<EmailJSResponseStatus>({status: 0, text: ""});
    const emailRef = createRef<any>();
    const submitHandle = async()=>{
        const token = await getTokenPassReset(emailRef.current.value);
        //console.log((token as string).replace('.','*dot*'));
        setEnvio({status: 0, text: ""});
        if (token&&token.length>0){
            const SERVICE_ID = process.env.EMAIL_SERVICE||"EMAIL_SERVICE"
            const TEMPLATE_ID = process.env.EMAIL_TEMPLATE||"TEMPLATE"
            const result = await emailjs.send(SERVICE_ID,TEMPLATE_ID,{
                    token:   process.env.APP_URL+"/redefineSenha/"+(token as string).replaceAll('.','*dot*'),
                    to_email: emailRef.current.value            
            },process.env.EMAIL_PKEY);
            //console.log(result.status);
            setEnvio({status: 200, text: "Email de recuperação enviado. Consulte sua caixa de entrada" } as EmailJSResponseStatus);
        }else{
            setEnvio({status: 404, text: "Conta não encontrada"} as EmailJSResponseStatus)
        }
        
    }
   
    return (
        <div className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
            <Header/>
            <div className="flex xs:flex-col lg:flex-row xs:place-items-center   ring-deep-blue gap-12 xs:gap-0 lg:px-10 xs:px-5 ring-2 lg:w-900 xs:w-98 h-fit pb-6 rounded-3xl">
               <img src={logo} width={228} />
               <div className="flex flex-col gap-4 lg:ml-5 xs:ml-3 mt-16">
                    
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
                        {(envio?.status!==200)&&((envio?.status!==0))&&<div className="h-fit flex gap-2 text-sm p-2 rounded-lg flex-wrap mb-3 break-words text-incorrect-red place-items-center justify-center ring-incorrect-red ring-2">
                            <Warning size={20}/>
                            {envio.text}
                         </div>
                        }
                        {(envio?.status===200)&&<div className="h-fit flex gap-2 text-sm p-2 rounded-lg flex-wrap mb-3 break-words text-correct-green place-items-center justify-center ring-correct-green ring-2">
                            <Check size={20}/>
                            {envio.text}
                         </div>
                        }

                    <TextInput mref = {emailRef} light icon={<Envelope size={25}/>}  placeholder="email@email.com" />

                    <div className=" flex flex-col w-full mt-5 rounded-2xl place-items-center">
                        <ButtonIcon text="Enviar e-mail de recuperação de senha" onClickAlt={submitHandle}/>
                    </div>
                   
               </div>
            </div>

            <Footer/>
        </div>
    )
}