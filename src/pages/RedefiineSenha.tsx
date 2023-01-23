import { useNavigate, useParams } from "react-router-dom";
import { ButtonIcon, Footer, Header, TextInput } from "../components";
import jwt_decode from "jwt-decode"
import { IconButton } from "@mui/material";
import { useAuth } from "../hooks";
import { createRef } from "react";

export function RedefineSenha(){
    const {token} = useParams();
    const {resetPassword}= useAuth()
    const passRef = createRef<any>();
    const cpassRef = createRef<any>();
    const navigator = useNavigate();
    const clickHandle =  async ()=>{
        if(cpassRef.current.value !== passRef.current.value){alert("As senhas devem ser iguais")}
        else{
        const ftoken = (token as string).replaceAll('*dot*','.');
        const status = await resetPassword(passRef.current.value,ftoken);
        console.log(status);
        if (status===200){alert("Senha alterada com sucesso"); navigator("/login")}
        else {alert("Falha alterando senha");}
        }
    }
    return (

        <div className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
            <Header/>

            <div className=" flex flex-col w-96 pt-3 ring-deep-blue gap-12 px-10 ring-2 h-fit pb-6 rounded-3xl">
                <TextInput mref={passRef} senha label="Nova Senha"/>
                <TextInput mref={cpassRef} senha label="Confirma Senha"/>
                <ButtonIcon text="Redefinir Senha" onClickAlt={clickHandle}/>

            </div>

            <Footer/>
        </div>
    );
import { useParams } from "react-router-dom";
import { Footer, Header, TextInput } from "../components";
import jwt_decode from "jwt-decode"

export function RedefineSenha(){
    const {token} = useParams();

    return (

        <div className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
            <Header/>
            <div className=" flex flex-col ring-deep-blue gap-12 px-10 ring-2 w-900 h-fit pb-6 rounded-3xl">
                <TextInput label="Nova Senha"/>
                <TextInput label="Confirma Senha"/>
                

}
            </div>

            <Footer/>
        </div>
    );

}