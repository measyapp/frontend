import { ComboBoxItem, IProjectData } from "../types";
import { IMetricasData } from "../types/Metricas";
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

export const Metricas : IMetricasData[] = [
    {
        
        "id": 1,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Tempo de entrega (lead time)",
        "nota": 4.67,
        "descricao": "O tempo de entrega é o tempo que algo leva do princípio ao fim. No desenvolvimento de software, por exemplo, o tempo de execução de um projeto começa com a proposta e termina com a entrega.",

    },
    {
        "id": 2,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Quantidade de código",
        "nota": 2.5,
        "descricao": "As equipes de desenvolvimento podem usar esta métrica de software, também conhecida como KLOC (Milhares de linhas de código), para determinar o tamanho de um aplicativo. Se este KPI for elevado, poderia indicar que os desenvolvedores foram eficientes em seus esforços de programação. Contudo, essa métrica não é útil quando uma equipe de desenvolvimento tenta comparar dois projetos elaborados com diferentes linguagens de programação. Além disso, vale considerar que mais quantidade de código nem sempre torna o código eficiente ou eficaz, o que pode significar mais trabalho de refatoração depois."
    },{
        "id": 3,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Trabalho em progresso (WIP)",
        "nota": 4,
        "descricao": "Em um contexto de engenharia de software, o WIP é um trabalho de desenvolvimento em que a equipe começou a trabalhar e já não se encontra em backlog. Um computador pode expressar o WIP num gráfico de burndown. Uma ferramenta comum para sprints ágeis e Scrum, esses gráficos mostram o quanto de trabalho a equipe já realizou e quanto ainda resta por fazer."
    },{
        "id": 4,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Taxa de sucesso da meta Sprint",
        "nota": 1.5,
        "descricao": "Essa métrica de software calcula a porcentagem de itens que a equipe de desenvolvimento completou no sprint backlog. Pode ocorrer que uma equipe não complete 100% do trabalho durante um determinado sprint. No entanto, o progresso da equipe poderia ainda cumprir a sua Definição de pronto (DoD): o limiar que um projeto deve cumprir para que uma organização o considere concluído. Se a iteração de desenvolvimento cumprir com definição de pronto, já é um sucesso."
    },
    {
        "id": 5,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Velocidade ágil",
        "nota": Math.random()*5,
        "descricao": "Para calcular a velocidade, uma equipe de desenvolvimento ágil de software analisa os sprints anteriores e conta o número de histórias de usuários ou pontos de histórias completados ao longo do tempo. A velocidade ágil é uma estimativa de quão produtiva a equipe será num único sprint"
    },{
        "id": 6,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Número de versões de software",
        "nota": Math.random()*5,
        "descricao": "As equipes de desenvolvimento ágil e os DevOps priorizam os lançamentos de software contínuos e frequentes. Com esse KPI, as equipes podem monitorar com que frequência lançam software, seja mensal, semanal, diária, por hora, ou qualquer outro período de tempo, e se esse ritmo proporciona valor comercial suficiente."
    },{
        "id": 7,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Cobertura de código",
        "nota": Math.random()*5,
        "descricao": "Esta é a proporção de código fonte coberta por testes automatizados. A métrica do software permite aos testadores identificar quais as áreas do código que ainda devem ser testadas corretamente"
    },
    {
        "id": 8,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Incidentes de segurança reais",
        "nota": Math.random()*5,
        "descricao": "Esse KPI conta o número de vezes que um hacker explora uma vulnerabilidade no software. Acompanha a frequência com que essas infrações ocorrem, a gravidade do ataque (por exemplo, que dados foram roubados), e o tempo de duração do incidente.."
    },
    {
        "id": 9,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Net Promoter Score (NPS)",
        "nota": Math.random()*5,
        "descricao": "Essa métrica de software reflete a vontade dos clientes de recomendar um aplicativo a outros. O NPS é apresentado em uma escala de 0 a 10. Os clientes com uma pontuação de 0 a 6 são chamados Detratores; com pontuações de 7 e 8 são Neutros; e de 9 e 10 são Promotores."
    },
    {
        "id": 10,
        "tipo": "",
        "avaliacoes": 10,
        "nome": "Vulnerabilidades de segurança",
        "nota": Math.random()*5,
        "descricao": "As análises de vulnerabilidade identificam as falhas de segurança em um aplicativo. Quanto menor for o número de vulnerabilidades encontradas, mais seguro é o software.."
    },

]


