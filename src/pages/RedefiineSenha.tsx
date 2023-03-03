import { useNavigate, useParams } from "react-router-dom";
import { ButtonIcon, Footer, Header, TextInput } from "../components";
import { useAuth } from "../hooks";
import { createRef, useState } from "react";

export function RedefineSenha(){
    const {token} = useParams();
    const {resetPassword}= useAuth()
    const passRef = createRef<any>();
    const cpassRef = createRef<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const navigator = useNavigate();
    const clickHandle =  async ()=>{
        if(cpassRef.current.value !== passRef.current.value){alert("As senhas devem ser iguais")}
        else{
            setLoading(true);
            const ftoken = (token as string).replaceAll('*dot*','.');
             await resetPassword(passRef.current.value,ftoken);
            setLoading(false);
            //console.log(status);
            
        }
    }
    return (

        <div className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
            <Header/>

            <div className=" flex flex-col w-96 pt-3 ring-deep-blue gap-12 px-10 ring-2 h-fit pb-6 rounded-3xl">
                <TextInput mref={passRef} senha label="Nova Senha"/>
                <TextInput mref={cpassRef} senha label="Confirma Senha"/>
                <ButtonIcon text="Redefinir Senha" isLoading={loading} onClickAlt={clickHandle}/>

            </div>

            <Footer/>
        </div>
    );
}