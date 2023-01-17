import { ComboBoxItem, IProjectData } from "../types";
import { SearchItems } from "../types/SearchItems";

export const OrderOptions = [
    {
        "description": "Data de Moficação",
        "field": "data_alt"
    }, 
    {
        "description": "Ordem Alfabeticas (A-Z)",
        "field": "nome asc" 
    },{
        "description": "Ordem Alfabeticas (Z-A)" ,
        "field": "nome desc" 
    },{
        "description": "Data de criação",
        "field": "nome asc"  
    },
];
export const tamanhosList = [
    { 
        "description": "Pessoal (até 2 pessoas)",
        "value": 1,   
    },
    { 
        "description": "Pequeno (3-5 pessoas)",
        "value": 2,   
    },
    { 
        "description": "Médio (5-9 pessoas)",
        "value": 3,
    },
    { 
        "description": "Grande (10-12 pessoas)",
        "value": 4,
    }
] as ComboBoxItem[];

export const tiposList = [
    { 
        "description": "Desenvolvimento de Software",
        "value": 1,   
    },
    { 
        "description": "Pesquisa & Desenvolvimento",
        "value": 2,
    },
    { 
        "description": "Pessoais",
        "value": 3,
    },
    { 
        "description": "Empresariais",
        "value": 4,
    }
] as ComboBoxItem[];

export const metodologiasList = [
    { 
        "description": "Scrum",
        "value": 1,
    },
    { 
        "description": "Kanban",
        "value": 2,
    },
    { 
        "description": "Lean startup",
        "value": 3,
    },{ 
        "description": "Extreme Programming - XP",
        "value": 4,
    },
    { 
        "description": "Scalend Agile Framework - SAFe",
        "value": 5,
    }, 
    { 
        "description": "Cascata",
        "value": 6,
    }, 
] as ComboBoxItem[];

export const funcaoList = [
    { 
        "description": "Desenvolvedor",
        "value": 1,   
    },
    { 
        "description": "Lider Técnico",
        "value": 2,
    },
    { 
        "description": "Testador",
        "value": 3,
    },
    { 
        "description": "Gerente de Projetos",
        "value": 4,
    }
] as ComboBoxItem[];

export const projectSearchable = [
    {
        description: "Nome",
        field: "nome",
    },
    {
        description: "Gerente",
        field: "",
    },
    {
        description: "Metodologia",
        field: "",
    },
    {
        description: "Tipo",
        field: "",
    }

] as SearchItems[];

export const initialProjects = [
    {
        "id": 555522,
        "nome": "Projeto Mobile 1",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    },
    {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    }, {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    },
    {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    },
    {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    },
    {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    },
    {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    },
    {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    },
    {
        "id": 55553,
        "nome": "Projeto Mobile 2",
        "descricao": " This is a project destined to be used in mobile devices",
        "metodologia": "SCRUM",
        "tipo": "--",
        "tamanho": "Médio",
        "gerente": "Marcelly Garcia"
    }
] as unknown as IProjectData;




