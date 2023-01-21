import {IProjectData} from "../types"
import { HookProjects } from "../hooks";
import { MdCancel}  from "react-icons/md"
import { createRef, useEffect} from "react";
import { Graph,IdentificationBadge} from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import {tiposList,metodologiasList,tamanhosList} from "../data"
import { ButtonIcon,ComboBox,Footer,Header,Text,TextInput } from "../components";

export function ResgisterProject(){
    const {id} = useParams();
    const {create,singleProject,getById,update} = HookProjects();
    const navigate = useNavigate();

    const nomeRef = createRef<any>();
    const descRef = createRef<any>();
    const gerenteRef = createRef<any>();
    const tamanhoRef = createRef<any>();
    const tipoRef = createRef<any>();
    const metodologiaRef = createRef<any>();

    useEffect( ()=>{
        if((id!==undefined)&&(singleProject===undefined)){
           getById(id);
        }else {
           if (singleProject!== undefined) {
            nomeRef.current.value = singleProject.nome;
            descRef.current.value = singleProject.descricao;
            gerenteRef.current.value = singleProject.gerente;
            tamanhoRef.current.value = singleProject.tamanho
            tipoRef.current.value = singleProject.tipo;
            metodologiaRef.current.value = singleProject.metodologia;
           }
        }
    },[singleProject]);
    
    const SaveProject = ()=>{
        const newProject : IProjectData = {
            id: singleProject!==undefined?singleProject.id:0,
            nome: nomeRef.current.value,
            id_criador: singleProject!==undefined?singleProject.id_criador:"1",
            descricao: descRef.current.value,
            metodologia: metodologiaRef.current.value,
            tipo: tipoRef.current.value,
            tamanho: tamanhoRef.current.value,
            gerente: gerenteRef.current.value,
        }
        if (id===undefined){
            create(newProject);
        }else {
            update(+id,newProject);
        }
        navigate('/projetos');
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
                        <TextInput mref={nomeRef} label="Nome do projeto" txtValue={singleProject!==undefined ?singleProject.nome:""} placeholder="Ex.: My First Project"/>
                        <TextInput mref={descRef}label="Descrição" richText txtValue= {singleProject!==undefined ?singleProject.descricao:""} placeholder="Ex.: This is my first project ..." />
                        <TextInput mref={gerenteRef} label="Gerente" txtValue={singleProject!==undefined ?singleProject.gerente:""}  icon={<IdentificationBadge size={32}/>}/>
                        
                    </div>
                    <div className="flex flex-col gap-6 mr-7 pr-7">
                        <ComboBox mref={tipoRef} label="Tipo" selected={singleProject!==undefined ?singleProject.tipo:0} items={tiposList}/>
                        <ComboBox mref={metodologiaRef} label="Metodologia" selected= {singleProject!==undefined ?singleProject.metodologia:0} items = {metodologiasList}/>
                        <ComboBox mref={tamanhoRef} label="Tamanho" selected= {singleProject!==undefined ?singleProject.tamanho:0} items= {tamanhosList}/>
                        
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