import React from "react";
import StatusSelect from "../../../../components/StatusSelect/";
import { InputPadrao } from "../../../../components/InputPadrao";
import TabelaPadrao from "../../../../components/TabelaPadrao";
import PaginacaoNumerados from "../../../../components/PaginacaoNumerados";
import * as Icones from "../../../../components/Icones";
import styles from './PerguntasRespostas.module.css';
const PerguntasRespostas = () => {

    const status = [
        {value: "todos", label: "TODOS"},
        {value: "ativo" , label: "ATIVO"},
        {value: "cancelado", label: "CANCELADO"},
        {value: "em análise pela operadora", label: "EM ANÁLISE PELA OPERADORA"},
        {value: "ibbca suspenso", label: "IBBCA SUSPENSO"},
        {value: "inadimplente ibbca", label: "INADIMPLENTE IBBCA"},
        {value: "inativo", label: "INATIVO"},
        {value: "inativo por inadimplência", label: "INATIVO POR INADIMPLÊNCIA"},
        {value: "rescisão contratual", label: "RESCISÃO CONTRATUAL"},
        {value: "suspenso", label: "SUSPENSO"},
    ];

    const perguntas = [
        {value: "pergunta", label: "Pergunta"},
        {value: "titulo", label: "Título"},
    ];
    
    const tableCollumns = [
        { value: "titulo", name: "Titulo da pergunta", align: "center", sortable: true },
        { value: "declaracao", name: "Declaração Pertencente", align: "center", sortable: true },
        { value: "visualiza", name: "Quem Visualiza", align: "center", sortable: true },
        { value: "pergunta", name: "Pergunta", align: "center", sortable: true },
        { value: "ordem", name: "Ordem de Aparecimento", align: "center", sortable: true },
        { value: "status", name: "Status", align: "center", sortable: true },
    ]

    const tableData = [
        {
            titulo: "",
            declaracao: "Declaração de Saúde",
            visualiza: "TODOS",
            pergunta: "Doenças de pele(psoríase, dermatite, alergias, entre outras)?",
            ordem: "19",
            status: "ATIVO",
        }
    ]



    return(
        <>
            <div className="header">
                <div className="title">Abre Perguntas e Respostas</div>
                <div className="subtitle">Teste</div>
            </div>
            <div className="conteiner">
                <div className="subtitle">Status</div>
                <div>
                    <StatusSelect options={status} placeholder="Selecione..." onChange={(val) => console.log("Status: ",val)}/>
                </div>
                <div className="subtitle">Pesquisar</div>
                <div>
                    <StatusSelect options={perguntas} placeholder="Selecione..." onChange={(val) => console.log("Status: ",val)}/>
                <div className="subtitle">Texto</div>
                </div>
                    <InputPadrao type="text" />
                </div>

   
            <div>
                <TabelaPadrao
                tabelaId="status"
                columns={tableCollumns}
                data={tableData}
                options={{
                    cardsPerPage: 10,
                    showPagination: true,
                    showExport: true,
                    fileName: "departamentos",
                    showPagination: true,
                    showHeader: true,
                    showFooter: true,
                    toolbar: true,
                    toolbarPosition: "right",
                    showPaginationSwitch: true,
                    showSearch: true,
                    showRefresh: true,
                    showToggleView: true,
                    showColumnsSelector: true,
                    showExport: true,
                    showFilter: true,
                    showGuardaCampos: true,
                    paginationEnabled: true,
                  }}
                  />
                <PaginacaoNumerados />
            </div>
        
        </>
    );
}

export default PerguntasRespostas;