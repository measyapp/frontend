import {IProjectData} from "../types"
import { HookProjects } from "../hooks";
import { MdCancel}  from "react-icons/md"
import { useEffect, useState } from "react";
import { Graph,IdentificationBadge} from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import {tiposList,metodologiasList,tamanhosList} from "../data"
import { ButtonIcon,ComboBox,Footer,Header,Text,TextInput } from "../components";

export function ResgisterProject(){
    const {id} = useParams();
    const [tamanho, setTamanho] = useState<number>(0);
    const [metodologia, setMetodologia] = useState<number>(0);
    const [tipo, setTipo] = useState<number>(0);
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [gerente, setGerente] = useState<string>("");
    const {create,singleProject,getById,update} = HookProjects();
    const navigate = useNavigate();

    const onClickHandleTamanhos = (tamanhoIndex : number)=>{
        setTamanho(tamanhoIndex);
    }
    const onClickHandleMetodologia = (metodologiaIndex : number)=>{
        setMetodologia(metodologiaIndex);
        
    }
    const onClickHandleTipo = (tipoIndex : number)=>{
        setTipo(tipoIndex);
    
        
    }
    const onChangeHandleName = ( newName : string)=>{
        setNome(newName);
       
    }
    const onChangeHandleDesc = ( newDesc : string)=>{
        setDescricao(newDesc);
      
    }
    const onChangeHandleGerente = ( newGerente : string)=>{
        setGerente(newGerente);
       
    }
    useEffect( ()=>{
        if((id!==undefined)&&(singleProject===undefined)){
           getById(id);
        }else {
           if (singleProject!== undefined) {
            setNome(singleProject.nome);
            setTamanho(singleProject.tamanho);
            setTipo(singleProject.tipo);
            setMetodologia(singleProject.metodologia);
            setDescricao(singleProject.descricao);
            setGerente(singleProject.gerente);
           }
        }
    },[singleProject]);
    
    const SaveProject = ()=>{
        const newProject : IProjectData = {
            id: singleProject!==undefined?singleProject.id:0,
            nome: nome,
            id_criador: singleProject!==undefined?singleProject.id_criador:"1",
            descricao: descricao,
            metodologia: metodologia,
            tipo: tipo,
            tamanho: tamanho,
            gerente: gerente,
        }
        if (id===undefined){
            create(newProject);
        }else {
            update(+id,newProject);
        }
        navigate('/projetos');
        window.location.reload();
    }
    return(
        <div  className=" flex flex-col text-deep-blue gap-3 justify-between h-screen place-items-center">
            
            <Header/>
            <div className="flex flex-col max-w-4xl min-w-max items-center w-9/12 h-2/3">
                <div className="justify-center items-center gap-3 w-full h-14 rounded-t-2xl ring-deep-blue ring-2 bg-deep-blue flex text-bright-white">
                    <Graph size={32}/>
                    {singleProject!==undefined ?<Text>{singleProject.nome}</Text> : <Text>Novo Projeto</Text>}
                </div>
                <div className=" flex self-center w-full h-fit gap-20 pt-7 pb-10 ring-deep-blue ring-2 bg-bright-white">
                    <div className=" flex flex-col justify-between gap-6 w-3/5">
                        <TextInput label="Nome do projeto" txtValue={singleProject!==undefined?singleProject.nome:''} placeholder="Ex.: My First Project" OnChange={onChangeHandleName}/>
                        <TextInput label="Descrição" richText txtValue= {singleProject!==undefined?singleProject.descricao:''} placeholder="Ex.: This is my first project ..." OnChange={onChangeHandleDesc}/>
                        <TextInput label="Gerente" txtValue={singleProject!==undefined?singleProject.gerente:''}  icon={<IdentificationBadge size={32}/>}  OnChange={onChangeHandleGerente}/>
                        
                    </div>
                    <div className="flex flex-col gap-6 mr-7 pr-7">
                        <ComboBox label="Tipo" selected={tipo!==undefined?tipo:0} items={tiposList} selectionAction={onClickHandleTipo}/>
                        <ComboBox label="Metodologia" selected= {metodologia!==undefined?metodologia:0} items = {metodologiasList} selectionAction={onClickHandleMetodologia}/>
                        <ComboBox label="Tamanho" selected= {tamanho!==undefined?tamanho:0} items= {tamanhosList} selectionAction={onClickHandleTamanhos}/>
                        
                    </div>
                </div>
                <div className=" w-full h-20  flex gap-7 justify-center rounded-b-2xl place-items-center ring-deep-blue ring-2 bg-bright-white">
                    <ButtonIcon icon={<Graph size={32}/>} onClickAlt={SaveProject} text="Salvar projeto"/>
                    <ButtonIcon icon={<MdCancel size={32}/>} text="Cancelar"/>
                </div>
            </div>
            <Footer/>
       </div>
    )
}