import { InputPadrao } from "../../../../components/InputPadrao";
import StatusSelect from "../../../../components/StatusSelect";
import TabelaPadrao from "../../../../components/TabelaPadrao";
import { Outlet, useNavigate, useLocation } from "react-router";
import { useCallback } from "react";
import { jsonRoute } from "../../../../utils/json";

const AditivoDeReducaoDeCarencia = () => {
    const navigate = useNavigate();
    const location = useLocation()

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
        {value: "arc", label: "ARC"},
        {value: "descricao", label:"Descrição"},
    ];



    const tableCollumns = [
        { value: "arc", name: "ARC", align: "center", sortable: true },
        { value: "descricao", name: "Descrição", align: "center", sortable: true },
        { value: "carencia", name: "Carência", align: "center", sortable: true },
        { value: "visualizaC", name: "Visualiza no Portal do Corretor", align: "center", sortable: true },
        { value: "visualizaP", name: "Visualiza na Plataforma", align: "center", sortable: true },
    ];
    

    const tableData = [
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
        {
            arc: "teste",
            descricao: "teste teste",
            carencia: "15",
            visualizaC: "Não",
            visualizaP: "Adesão",
        },
    ]

    const handleNavigate = useCallback((link) => {
        navigate(link);
    }, [navigate]);

    const isNovaPerguntaRoute = location.pathname.includes(jsonRoute.Configuracao_Geral_AditivoDeReducaoDeCarencia_NovoAditivo);

    if (isNovaPerguntaRoute) {
        return <Outlet />;
    }


    return (
        <>
         
            <div className="header">
                <div>
                    <h1 className="title">Abre Perguntas e Respostas</h1>
                </div>
            </div>

            <div className="container">
                <div className="content">
                    <div className="contentRow">
                        <div className="contentColumn">
                            <label className="label">Status</label>
                            <StatusSelect options={status} placeholder="Selecione..." onChange={(val) => console.log("Status: ",val)}/>
                        </div>
                        <div className="contentColumn">
                            <label  className="label">Pesquisar</label>
                            <StatusSelect options={perguntas} placeholder="Selecione..." onChange={(val) => console.log("Status: ",val)}/>
                        </div>
                        <div className="contentColumn">
                            <label  className="label">Texto</label>
                            <InputPadrao />
                        </div>
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
                            additionalButtons: [{
                                title: "Novo",
                                onClick: () => handleNavigate(`../${jsonRoute.Configuracao_Geral_AditivoDeReducaoDeCarencia}/${jsonRoute.Configuracao_Geral_AditivoDeReducaoDeCarencia_NovoAditivo}`),
                                icon: "fa fa-file",
                            },
                            {
                                title: "Voltar",
                                onClick: () => navigate("/"),
                                icon: "fa-solid fa-reply",
                            }
                        ]
                        }}
                        
                        />
                    </div>
                </div>
            </div>
            </>
        )}
        

export default AditivoDeReducaoDeCarencia;