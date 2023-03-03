import { ComboBoxItem, IProjectData } from "../types";
import { IMetricasData } from "../types/Metricas";
import { SearchItems } from "../types/SearchItems";

export const OrderOptions = [
    
    {
        "description": "Ordem Alfabeticas (A-Z)",
        "field": "nome",
        "value": 2
    },{
        "description": "Ordem Alfabeticas (Z-A)" ,
        "field": "nome desc"
        ,"value": 3,
        "asc": false 
    },{
        "description": "Data de Moficação",
        "field": "updatedAt",
        "value": 1,
    }, 
] as ComboBoxItem[];
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
        "gerente": "Marcelly Garcia",
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

export const Metricas : IMetricasData[] = [
    {
      id : 1,
      nome: 'Capacidade de trabalho',
      descricao: 'Avalia a quantidade de itens que uma equipe pode iniciar durante um período.',
      tipo : 'Equipe',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "https://www.youtube.com/watch?v=o9mg9cU7vIg",
      formula:"Número de check-ins realizados nas ferramentas de versionamento de código"
    },
    {
      id : 2,
      nome: 'Velocidade (Velocity)',
      descricao: 'Avalia a quantidade de incrementos efetivos realizados por uma equipe durante uma interação',
      tipo : 'Equipe',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"Somatório da pontuação realizada dividido pela quantidade de tempo que se deseja investigar"
    },
    {
      id : 3,
      nome: 'Número de desenvolvedores por feature/stories',
      descricao: "Número de check-ins realizados nas ferramentas de versionamento de código",
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula: ""
    },
    {
      id : 4,
      nome: 'Progresso, Gráfico de Burndown',
      descricao: 'Avalia o andamento da equipe durante um período de tempo',
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"Por não se tratar de um cálculo, a representação do burndown ocorre ao plotar os itens de backlog a serem realizados no eixo Y e os dias percorridos no eixo X."
    },
    {
      id : 5,
      nome: 'Cobertura de teste unitário por história de usuário',
      descricao: 'Avalia a cobertura de teste código realizar em cada história de usuário',
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"Multiplicar as branches de código por 100 e dividir pelos testes que cobrem as diferentes branches"
    },
    {
      id : 6,
      nome: 'Acurácia nas estimativas',
      descricao: 'Avalia se as estimativas da sprint estão de acordo',
      tipo : 'Equipe',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula: "1-( Σ(deltas das estimativas de cada atividade) / previsão total))"
    },
    {
      id : 7,
      nome: 'Porcentagem do trabalho adotado',
      descricao: 'Avalia a adição de demandas além do planejado para a sprint',
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "https://www.youtube.com/watch?v=o9mg9cU7vIg",
      formula:"Σ(estimativas do trabalho adicionado) / (previsão para a sprint)"
    },
    {
      id : 8,
      nome: 'Fator foco',
      descricao: 'Avalia a capacidade da equipe de cumprir o compromisso de trabalho feito no início da sprint.',
      tipo : 'Equipe',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"Velocidade¹ = somatório da pontuação realizada dividido pela quantidade de tempo que se deseja investigar Capacidade de trabalho¹ = somatório dos itens de backlog reportados durante a sprint Fator foco = velocidade / capacidade de trabalho"
    },
    {
      id : 9,
      nome: 'Acurácia da previsão futura',
      descricao: 'Avalia se as estimativas da sprint estão de acordo',
      tipo : 'Equipe',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"(∑estimativas originais) ∑ (∑estimativas originais + ∑trabalho adotado + ∑trabalho descoberto"
    },
    {
      id : 10,
      nome: 'Porcentagem de trabalho descoberto',
      descricao: 'Avalia a adição de demandas não esperadas para a equipe durante a sprint',
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"Σ(estimativas do trabalho descoberto) / (previsão para a sprint)"
    },
    {
      id : 11,
      nome: 'Vazão (Throughput)',
      descricao: 'Avalia a capacidade de vazão das tarefas do projeto',
      tipo : 'Equipe',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "https://www.youtube.com/watch?v=vAG1ZVIWfNE",
      formula:"Throughput médio = WiP médio  / lead time médio"
    },
    {
      id : 12,
      nome: 'WiP - Work in Progress',
      descricao: 'Avalia se a equipe está focada na entrega de valor',
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"∑ das atividades em progresso / quantidade de desenvolvedores"
    },
    {
      id : 13,
      nome: 'Satisfação dos clientes',
      descricao: 'Avalia a satisfação do cliente em relação a experiência com a empresa desenvolvedora',
      tipo : 'Organizacional',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "",
      formula:"(∑ de promotores - ∑ de detratores) / ∑ de respondentes"
    },
    {
      id : 14,
      nome: 'Tempo em processo (Lead Time)',
      descricao: 'Avalia o tempo do card durante os diferentes estágios do processo',
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "https://www.youtube.com/watch?v=vAG1ZVIWfNE",
      formula:"∑ das atividades entregues / tempo decorrido do projeto"
    },
    {
      id : 15,
      nome: 'Cycle Time (Cycle time)',
      descricao: 'Avaliar o tempo que passou desde quando o trabalho realmente começou até quando o pedido foi cumprido.',
      tipo : 'Processo',
      nota: 0,
      referencial: "SOMMERVILLE, Ian. Engenharia de Software. 6. v. Belo Horizonte: WERKEMA Editora, 2006. 120 p",
      avaliacoes:0,
      link: "https://www.youtube.com/watch?v=vAG1ZVIWfNE",
      formula:"∑ das atividades entregues / tempo decorrido até a entrega "
    },

  ]

export const recQuestionsPadrao = [
    {
        "pergunta":"Quero saber se o projeto está atingindo os prazos de entrega",
        "value": "0"
    }
    ,
    { "pergunta":"Quero saber se as atividades críticas estão sendo entregues no prazo?","value": "0"},
    { "pergunta":"Quero saber se as entregas estão acontecendo de forma sustentável e incremental?","value": "0"},
    { "pergunta":"Quero saber se o esforço realizado pela equipe é condizente com o planejado?","value": "0"},
    { "pergunta":"Quero saber se o escopo do projeto é claro para que a equipe possa desempenhar suas atividades?","value": "0"},
    { "pergunta":"Quero saber se o cliente permanece engajado e satisfeito ao longo do projeto?","value": "0"},
    { "pergunta":"Quero saber se os gastos do projeto estão indo ao encontro do orçamento e cronograma estimados?","value": "0"},
    { "pergunta":"Quero saber se as mudanças no tamanho do produto e interface estão sob controle?","value": "0"},
    { "pergunta":"Quero saber se os processos são eficientes o suficiente para ir ao encontro dos compromissos e objetivos planejados?","value": "0"},
    { "pergunta":"Quero saber se o projeto está bom o suficiente para ser entregue ao cliente? Os problemas identificados estão sendo resolvidos?","value": "0"}
]



