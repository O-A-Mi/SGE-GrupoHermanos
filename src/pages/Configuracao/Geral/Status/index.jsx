import { UseInputMask, InputPadrao } from '../../../../components/InputPadrao';
import TabelaPadrao from '../../../../components/TabelaPadrao';
import { useState, useCallback, useEffect } from 'react';
import styles from './Status.module.css';
import { Outlet, useNavigate, useLocation } from 'react-router';
import { jsonRoute } from "../../../../utils/json";

const Status = () => {
    const [filterSelect, setFilterSelect, filterSelectRef] = UseInputMask()
    const [filterText, setFilterText, filterTextRef] = UseInputMask()

    const [options, setOptions] = useState([
        { value: "Descrição", label: "Descrição" }
    ])

    const tableCollumns = [
        { value: "descricao", name: "Descrição", align: "center", sortable: true },
        { value: "tipo", name: "Tipo", align: "center", sortable: true },
        { value: "cor", name: "Cor", align: "center", sortable: true },
        { value: "padrao", name: "Padrão", align: "center", sortable: true },
        { value: "inativar_no_callcenter", name: "Inativar no CallCenter", align: "center", sortable: true },
        { value: "desativar_tela", name: "Desativar Tela", align: "center", sortable: true },
        { value: "visualiza_na_tela_de_inadimplente_status_proposta_contrato", name: "Visualiza na tela de inadimplente - Status Proposta/Contrato", align: "center", sortable: true },
        { value: "visualiza_na_tela_de_inadimplente_status_fi", name: "Visualiza na tela de inadimplente - Status FI", align: "center", sortable: true },
        { value: "congelamento_fi_status_e_tela", name: "Congelamento FI - Status e Tela", align: "center", sortable: true },
        { value: "mudar_status_da_proposta_para_ativo_a_traves_do_arquivo_retorno", name: "Mudar Status da proposta para Ativo através do Arquivo Retorno", align: "center", sortable: true },
        { value: "utiliza_na_tela_do_serasa", name: "Utiliza na Tela do Serasa", align: "center", sortable: true },
        { value: "cria_lancamento_com_esse_status_qdo_regera_nosso_numero", name: "Cria Lançamento com esse Status qdo Regera Nosso Número", align: "center", sortable: true },
        { value: "envia_automaticamente_para_backlist", name: "Envia automaticamente para BackList", align: "center", sortable: true },
        { value: "utiliza_na_regua_de_inadimplencia", name: "Utiliza na régua de inadimplência", align: "center", sortable: true },
    ]
    
    const buildColor = (cor) => (
        <div style={{ borderRadius: '50%', margin: 'auto', width: '20px', height: '20px', background: `#${cor}`}} />
    )

    const [tableData, setTableData] = useState([
        {
            descricao: "A",
            tipo: "Aberto",
            cor: buildColor('cf2786'),
            padrao: "Aberto",
            inativar_no_callcenter: "Aberto",
            desativar_tela: "Aberto",
            visualiza_na_tela_de_inadimplente_status_proposta_contrato: "Aberto",
            visualiza_na_tela_de_inadimplente_status_fi: "Aberto",
            congelamento_fi_status_e_tela: "Aberto",
            mudar_status_da_proposta_para_ativo_a_traves_do_arquivo_retorno: "Aberto",
            utiliza_na_tela_do_serasa: "Aberto",
            cria_lancamento_com_esse_status_qdo_regera_nosso_numero: "Aberto",
            envia_automaticamente_para_backlist: "Aberto",
            utiliza_na_regua_de_inadimplencia: "Aberto"
        },
        {
            descricao: "B",
            tipo: "Aberto",
            cor: buildColor('756dd1'),
            padrao: "Aberto",
            inativar_no_callcenter: "Aberto",
            desativar_tela: "Aberto",
            visualiza_na_tela_de_inadimplente_status_proposta_contrato: "Aberto",
            visualiza_na_tela_de_inadimplente_status_fi: "Aberto",
            congelamento_fi_status_e_tela: "Aberto",
            mudar_status_da_proposta_para_ativo_a_traves_do_arquivo_retorno: "Aberto",
            utiliza_na_tela_do_serasa: "Aberto",
            cria_lancamento_com_esse_status_qdo_regera_nosso_numero: "Aberto",
            envia_automaticamente_para_backlist: "Aberto",
            utiliza_na_regua_de_inadimplencia: "Aberto"
        },
        {
            descricao: "C",
            tipo: "Aberto",
            cor: buildColor('deb626'),
            padrao: "Aberto",
            inativar_no_callcenter: "Aberto",
            desativar_tela: "Aberto",
            visualiza_na_tela_de_inadimplente_status_proposta_contrato: "Aberto",
            visualiza_na_tela_de_inadimplente_status_fi: "Aberto",
            congelamento_fi_status_e_tela: "Aberto",
            mudar_status_da_proposta_para_ativo_a_traves_do_arquivo_retorno: "Aberto",
            utiliza_na_tela_do_serasa: "Aberto",
            cria_lancamento_com_esse_status_qdo_regera_nosso_numero: "Aberto",
            envia_automaticamente_para_backlist: "Aberto",
            utiliza_na_regua_de_inadimplencia: "Aberto"
        },
    ], [])

    const [tableFiltro, setTableFiltro] = useState([])

    useEffect(() => {
        setTableFiltro(tableData)
    }, [tableData])

    function filtrarDescricao(){ 
        console.log('aqui'),
        setTableFiltro(tableData.filter(
            ({descricao}) => descricao.toLowerCase().includes(filterText.toLowerCase())
        ))
    }

    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigate = useCallback((link) => {
        navigate(link);
    }, [navigate]);

    return (
        <>
            <div className="header">
                <div>
                    <h1 className="title">Status</h1>
                </div>
                <div>
                    <h2 className="subtitle">Página de Status cadastrados no sistema.</h2>
                </div>
            </div>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.contentRow}>
                        <div className={styles.contentColumn}>
                            <label className={styles.label}>Pesquisar</label>
                            <InputPadrao
                                type="select"
                                value={filterSelect}
                                inputRef={filterSelectRef}
                                options={options}
                                defaultSelect={false}
                                searchable={false}
                                onChange={setFilterSelect}
                            />
                        </div>
                        <div className={styles.contentColumn}>
                            <label className={styles.label}>Texto</label>
                            <InputPadrao
                                value={filterText}
                                onChange={setFilterText}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <TabelaPadrao 
                        tabelaId="status"
                        columns={tableCollumns}
                        data={tableFiltro}
                        options={{
                            fileName: "status",
                            showPagination: true,
                            showHeader: true,
                            toolbar: true,
                            toolbarPosition: "right",
                            showPaginationSwitch: true,
                            showSearch: filtrarDescricao,
                            showToggleView: true,
                            showColumnsSelector: true,
                            showExport: true,
                            paginationEnabled: true,
                            tableView: "table",
                            rowOnClick: () => handleNavigate(`../${jsonRoute.Configuracao_Geral_EdicaoStatus}`),
                            additionalButtons: [{
                                title: "Imprimir",
                                onClick: () => false,
                                icon: "fa-solid fa-print"
                            },{
                                title: "Adicionar Nova Informação",
                                onClick: () => handleNavigate(`../${jsonRoute.Configuracao_Geral_NovoStatus}`),
                                icon: "fa fa-plus"
                            },
                            {
                                title: "Voltar",
                                onClick: () => navigate(-1),
                                icon: "fa fa-arrow-left"
                            }]
                        }}
                    />
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Status;