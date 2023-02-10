import { IUserData} from "../types"
import { HookUsers } from "../hooks";
import { MdCancel}  from "react-icons/md"
import { useEffect, createRef,useState } from "react";
import { Graph, User, UserPlus} from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonIcon,ComboBox,Footer,Header,Text,TextInput } from "../components";
import { funcaoList } from "../data";
import { useAuth } from "../hooks/useAuth";
import { useFormValidation } from "../formValidation/useFormValidation";



export function ResgisterUser(){
    const {id} = useParams();
    const nome = createRef<any>();
    const cpf = createRef<any>();
    const [funcao, setFuncao] = useState<number>(0);
    const telefone = createRef<any>();
    const email = createRef<any>();
    const senha = createRef<any>();
    const confirmasenha = createRef<any>();
    const {create,user,getById,update} = HookUsers();
    const {signup,success} = useAuth();
    
    const navigate = useNavigate();
    const { validateError,handleErrorMessage} = useFormValidation<IUserData>('validateUser');
    //falta criar a parte de verificar id do usuario / Criar ou Editar
    useEffect( ()=>{
        if((id!==undefined)&&(user===undefined)){
            getById(id);
        }else if (user!==undefined){
            setFuncao(user.funcao);
        }   
    },[user]);
    
    const SaveUser = async ()=>{
        const newUser : IUserData = {
            id: id===undefined? 0:(id as unknown as number),
            nome: nome.current.value,
            cpf: cpf.current.value,
            funcao: funcao,
            email: email.current.value,
            senha: senha.current.value,
        }
        const result = await validateError(newUser);
        if (result){
            if (id===undefined){
                await signup(newUser);
            }else {
                await update(+id,newUser);
            }
           if (success) {
                navigate('/');
                window.location.reload();
           }
           else {
            alert("Erro Criando Usuário. Tente Novamente")
           }  
        }        
    }
    return(

        <div  className=" flex flex-col text-deep-blue gap-1 justify-between h-screen place-items-center">
            <Header/>
            <div className="flex flex-col max-w-4xl min-w-max items-center w-9/12 h-2/3">
                <div className="justify-center items-center gap-3 w-full h-14 rounded-t-2xl ring-deep-blue ring-2 bg-deep-blue flex text-bright-white">
                    {user===undefined?<UserPlus size={35}/>:<User size={35}/>}
                    {user!==undefined ?<Text>{user.nome}</Text> : <Text>Novo Usuário</Text>}
                </div>
                <div className=" flex self-center w-full h-fit gap-20 pt-7 pb-10 ring-deep-blue ring-2 bg-bright-white">
                    <div className=" flex flex-col justify-between gap-6 w-3/5 px-6">
                        
                        <TextInput label="Nome:"      
                                   txtValue={user!==undefined?user.nome:''} 
                                   placeholder="Seu nome completo" 
                                   mref={nome}
                                   {...handleErrorMessage("nome")}/>
                        <TextInput label="E-mail:"    
                                   txtValue={user!==undefined?user.email:''} 
                                   placeholder="email@email.com" 
                                   mref={email}
                                   {...handleErrorMessage("email")}/>
                        <TextInput label="Senha:" 
                                   senha   
                                   txtValue={user!==undefined?user.senha:''} 
                                   placeholder="*********" 
                                   mref={senha}
                                   {...handleErrorMessage("senha")}
                                   />
                        
                    </div>

                    <div className="flex flex-col gap-6 mr-7 pr-12">
                        <TextInput label="CPF:"       
                                   txtValue={user!==undefined?user.cpf:''} 
                                   placeholder="123.456.789-10" 
                                   mref={cpf}
                                   {...handleErrorMessage("cpf")}
                                   />
                        <TextInput label="Telefone:"  
                                   txtValue={user!==undefined?undefined:''} 
                                   placeholder="99 99999-9999" 
                                   mref={telefone}
                                  />
                        <ComboBox label="Função:" items={funcaoList} selected={funcao} selectionAction={(e:any)=>{setFuncao(e);}}/>
                    </div>
                    
                </div>
                <div className=" w-full h-20  flex gap-7 justify-center rounded-b-2xl place-items-center ring-deep-blue ring-2 bg-bright-white">
                <div className="w-52">
                       <ButtonIcon onClickAlt={SaveUser} text="Gravar Usuário"/>
                    </div>
                    <div className="w-52">
                          <ButtonIcon text="Cancelar"/>
                    </div>
                </div>
            </div>
          <Footer/>
       </div>
       
    )
}