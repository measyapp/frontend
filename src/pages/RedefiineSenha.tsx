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
                
            </div>

            <Footer/>
        </div>
    );

}