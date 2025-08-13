import { UseInputMask, InputPadrao } from '../../../../components/InputPadrao';
import TabelaPadrao from '../../../../components/TabelaPadrao';
import { useState } from 'react';
import styles from './Status.module.css';

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
        { value: "cria_lancamento_com_esse_status_qdo_regera_nosso_numero", name: "Cria Lançamento com esse Status qdo Regera Nosso Número", align: "center", sortable: true }
    ]

    const tableData = [
        {
            descricao: "Aberto",
            tipo: "Aberto",
            cor: "Aberto",
            padrao: "Aberto",
            inativar_no_callcenter: "Aberto",
            desativar_tela: "Aberto",
            visualiza_na_tela_de_inadimplente_status_proposta_contrato: "Aberto",
            visualiza_na_tela_de_inadimplente_status_fi: "Aberto",
            congelamento_fi_status_e_tela: "Aberto",
            mudar_status_da_proposta_para_ativo_a_traves_do_arquivo_retorno: "Aberto",
            utiliza_na_tela_do_serasa: "Aberto",
            cria_lancamento_com_esse_status_qdo_regera_nosso_numero: "Aberto"
        },
        {
            descricao: "Aberto",
            tipo: "Aberto",
            cor: "Aberto",
            padrao: "Aberto",
            inativar_no_callcenter: "Aberto",
            desativar_tela: "Aberto",
            visualiza_na_tela_de_inadimplente_status_proposta_contrato: "Aberto",
            visualiza_na_tela_de_inadimplente_status_fi: "Aberto",
            congelamento_fi_status_e_tela: "Aberto",
            mudar_status_da_proposta_para_ativo_a_traves_do_arquivo_retorno: "Aberto",
            utiliza_na_tela_do_serasa: "Aberto",
            cria_lancamento_com_esse_status_qdo_regera_nosso_numero: "Aberto"
        },
        {
            descricao: "Aberto",
            tipo: "Aberto",
            cor: "Aberto",
            padrao: "Aberto",
            inativar_no_callcenter: "Aberto",
            desativar_tela: "Aberto",
            visualiza_na_tela_de_inadimplente_status_proposta_contrato: "Aberto",
            visualiza_na_tela_de_inadimplente_status_fi: "Aberto",
            congelamento_fi_status_e_tela: "Aberto",
            mudar_status_da_proposta_para_ativo_a_traves_do_arquivo_retorno: "Aberto",
            utiliza_na_tela_do_serasa: "Aberto",
            cria_lancamento_com_esse_status_qdo_regera_nosso_numero: "Aberto"
        },
    ]

    function onChangeFilterSelect(e) {
        setFilterSelect(e.target.value)
    }

    function onChangeFilterText(e) {
        setFilterText(e.target.value)
    }

    function addInfo(){
        alert('Informação adicionada com sucesso!')
    }

    function removeInfo(){
        alert('Informação removida com sucesso!')
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
                <div className={styles.content}>
                    <div className={styles.contentRow}>
                        <div className={styles.contentColumn}>
                            <label className={styles.label}>Pesquisar</label>
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
                            <label className={styles.label}>Texto</label>
                            <InputPadrao
                                type="text"
                                value={filterText}
                                onChange={onChangeFilterText}
                                inputRef={filterTextRef}
                                defaultSelect={false}
                                searchable={false}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <TabelaPadrao 
                        tabelaId="status"
                        columns={tableCollumns}
                        data={tableData}
                        options={{
                            fileName: "status",
                            showPagination: true,
                            showHeader: true,
                            toolbar: true,
                            toolbarPosition: "right",
                            showPaginationSwitch: true,
                            showSearch: true,
                            showToggleView: true,
                            showColumnsSelector: true,
                            showExport: true,
                            paginationEnabled: true,
                            tableView: "table",
                            rowOnClick: false,
                            additionalButtons: [{
                                title: "Adicionar Nova Informação",
                                onClick: addInfo,
                                icon: "fa fa-plus"
                            },
                            {
                                title: "Remover Informação",
                                onClick: removeInfo,
                                icon: "fa-solid fa-minus"
                            }]
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Status;