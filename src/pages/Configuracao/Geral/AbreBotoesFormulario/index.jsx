import styles from "./AbreBotoes.module.css";
import TabelaPadrao from "../../../../components/TabelaPadrao";
import {
  UseInputPadrao,
  UseInputMask,
} from "../../../../components/InputPadrao";
import { Outlet, useLocation, useNavigate } from "react-router";
import { jsonRoute } from "../../../../utils/json";
import { useCallback, useEffect, useState } from "react";
import Status from "./../Status/index";

function AbreBotoesFormulario() {
  const [status, setstatus, statusRef] = UseInputMask();

  const [pesquisar, setPesquisar, pesquisarRef] = UseInputMask();
  const [filtroDescricao, setFiltroDescricao] = useState([
    { value: "", label: "TODOS" },
  ]);

  const [texto, settexto, textoRef] = UseInputMask();
  const Status = [
    { value: "", label: "TODOS" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
    { value: "analise", label: "EM ANALISE PELA OPERADORA" },
    { value: "ibbca_suspenso", label: "IBBCA SUSPENSO" },
    { value: "inadimplente_ibbca", label: "INADIMPLENTE IBBCA" },
    { value: "inativo_por_inadimplencia", label: "INATIVO POR INADIMPLENCIA" },
    { value: "recisao_contratual", label: "RECISAO CONTRATUAL" },
  ];

  const [tabelaColumns, setTabelaColumns] = useState([
    { value: "status", name: "Status", sortable: true },
    { value: "descricao", name: "Descrição", sortable: false },
    { value: "acoes", name: "Ações", sortable: false },
  ]);

  const [tabelaData, setTabelaData] = useState([
    { status: "Ativo", descricao: "Botão 1", acoes: "Editar | Excluir" },
    { status: "Inativo", descricao: "Botão 2", acoes: "Editar | Excluir" },
    { status: "Suspenso", descricao: "Botão 3", acoes: "Editar | Excluir" },
  ]);

  return (
    <>
      <div>
        <div className={styles.abreBotaoHeader}>
          <h1 className={styles.abreBotaoTitle}>Abre Botões de Formulários</h1>
        </div>
        <div className={styles.abreBotaoContainer}>
          <div className={styles.abreBotaoContent}>
            <TabelaPadrao
              tabelaId="abre-botoes-formulario"
              columns={tabelaColumns}
              data={tabelaData}
              options={{
                showSearch: true,
                showRefresh: true,
                showToggleView: true,
                showColumnsSelector: true,
                showExport: true,
                showGuardaCampos: true,
                additionalButtons: [
                  {
                    onClick: () => false,
                    icon: "fa fa-plus",
                    title: "Adicionar",
                  },
                ],
                rowOnClick: () => alert("click"),
                toolbarComponent: () => (
                  <div className={styles.inputs}>
                    <UseInputPadrao
                      type="select"
                      label="Status"
                      options={Status}
                      value={status}
                      onChange={setstatus}
                      inputRef={statusRef}
                      searchable={true}
                      defaultSelect={false}
                    />
                    <UseInputPadrao
                      type="select"
                      label="Pesquisar"
                      placeholder={"descrição"}
                      options={filtroDescricao}
                      value={pesquisar}
                      onChange={setPesquisar}
                      searchable={true}
                      defaultSelect={false}
                    />
                    <UseInputPadrao
                      type="text"
                      label="Texto"
                      value={texto}
                      onChange={settexto}
                      inputRef={textoRef}
                    />
                  </div>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AbreBotoesFormulario;
