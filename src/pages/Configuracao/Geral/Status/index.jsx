import { UseInputMask, InputPadrao, UseInputPadrao } from '../../../../components/InputPadrao';
import  TabelaPadrao from '../../../../components/TabelaPadrao';
import { useState, useRef } from 'react';
import styles from './Status.module.css';

const Status = () => {
    const [filterSelect, setFilterSelect] = useState('')
    const [filterText, setFilterText] = useState('')

    const filterSelectRef = useRef(null)
    const filterTextRef = useRef(null)

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
        { value: "cria_lancamento_com_esse_status_qdo_regera_nosso_numero", name: "Cria Lançamento com esse Status qdo Regera Nosso Número", align: "center", sortable: true }
    ]

    const tableData = [
        {
            descricao: "Aberto",
            tipo: "Aberto",
            cor: "Aberto",
            padrao: "Aberto",
            inativarCallCenter: "Aberto",
            desativarTela: "Aberto",
            visualizaInadimplentePropostaContrato: "Aberto",
            visualizaInadimplenteFI: "Aberto",
            congelamentoFI: "Aberto",
            mudarStatusPropostaArquivoRetorno: "Aberto",
            utilizaTelaSerasa: "Aberto",
            criaLancamentoRegeraNossoNumero: "Aberto",
            enviaAutomaticamenteBackList: "Aberto",
            utilizaReguaInadimplencia: "Aberto"
        }
    ]

    function onChangeFilterSelect(e) {
        setFilterSelect(e.target.value)
    }

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
                <div className={styles.contentRow}>
                    <div className={styles.contentColumn}>
                        <InputPadrao
                            type="select"
                            value={filterSelect}
                            onChange={onChangeFilterSelect}
                            inputRef={filterSelectRef}
                            options={options}
                            defaultSelect={false}
                            searchable={false}
                        />
                    </div>
                    <div className={styles.contentColumn}>
                        <InputPadrao
                            type="text"
                            value={filterText}
                            onChange={onChangeFilterSelect}
                            inputRef={filterTextRef}
                            defaultSelect={false}
                            searchable={false}
                        />
                    </div>
                    <div className={styles.contentColumn}>
                        
                    </div>
                </div>
                <TabelaPadrao 
                    tabelaId="status"
                    columns={tableCollumns}
                    data={tableData}
                />

                {/*
                    TabelaPadrao = ({ tabelaId, columns, data, footer, options = {} }) => {
                        const defaultOptions = {
                            fileName: "relatorio",
                            cardsPerPage: 10,
                            cardsPerPageOptions: [10, 25, 50, 100],
                            showPagination: true,
                            showHeader: true,
                            showFooter: false,
                            toolbar: true,
                            toolbarPosition: "right",
                            showPaginationSwitch: false,
                            showSearch: false,
                            showRefresh: false,
                            showToggleView: false,
                            showColumnsSelector: false,
                            showExport: false,
                            showFilter: false,
                            showGuardaCampos: false,
                            additionalButtons: [],
                            paginationEnabled: true,
                            tableView: "table",
                            customView: null,
                            rowOnClick: false,
                            rowSelection: false,
                            rowSelectionMode: "multiple",
                            onRowSelectChange: null,
                */}
            </div>
        </>
    )
}

export default Status;