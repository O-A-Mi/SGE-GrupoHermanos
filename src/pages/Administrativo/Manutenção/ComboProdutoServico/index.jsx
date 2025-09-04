import styles from "./ComboProdutoServico.module.css";
import TabelaPadrao from "../../../../components/TabelaPadrao";
import {
  UseInputPadrao,
  UseInputMask,
} from "../../../../components/InputPadrao";
import { Outlet, Route, useLocation, useNavigate } from "react-router";
import { jsonRoute } from "../../../../utils/json";
import { useCallback, useEffect, useState } from "react";

function ComboProdutoServico() {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  const [status, setStatus, statusRef] = UseInputMask();
  const [tipoPlano, setTipoPlano, TipoPlanoRef] = UseInputMask();
  const [convenio, setConvenio, convenioRef] = UseInputMask();
  const [grupoContratual, setGrupoContratual, grupoContratualRef] =
    UseInputMask();
  const [texto, setTexto, textoRef] = UseInputMask();
  const [pesquisar, setPesquisar] = UseInputMask();
  const [filtroDescricao, setFiltroDescricao] = useState([
    { value: "", label: "TODOS" },
  ]);

  const Status = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
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
  const TipoPlano = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "PLANO ODONTO" },
    { value: "cancelado", label: "PLANO SAUDE" },
    { value: "suspenso", label: "SEGURO/ASSISTÊNCIA" },
    { value: "inativo", label: "SAUDE" },
    { value: "analise", label: "PLANO PET" },
    { value: "ibbca_suspenso", label: "OPCIONAIS" },
  ];
  const Convenio = [
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
  const GrupoContratual = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
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
    <div className={styles.headerComboProdutoServico}>
      <div className={styles.containerComboProdutoServico}>
        <div className={styles.contentComboProdutoServico}>
          <div className={styles.inputContainer}>
            <UseInputPadrao
              type="select"
              label="Status"
              options={Status}
              value={status}
              onChange={setStatus}
              inputRef={statusRef}
              searchable={true}
              defaultSelect={false}
              width={15}
            />
            <UseInputPadrao
              type="select"
              label="Tipo de Plano"
              options={TipoPlano}
              value={tipoPlano}
              onChange={setTipoPlano}
              inputRef={TipoPlanoRef}
              searchable={true}
              defaultSelect={false}
              width={15}
            />

            <UseInputPadrao
              type="select"
              label="Convênio"
              options={Convenio}
              value={convenio}
              onChange={setConvenio}
              inputRef={convenioRef}
              searchable={true}
              defaultSelect={false}
              width={30}
            />
            <UseInputPadrao
              type="select"
              label="Grupo Contratual"
              options={GrupoContratual}
              value={grupoContratual}
              onChange={setGrupoContratual}
              inputRef={grupoContratualRef}
              searchable={true}
              defaultSelect={false}
              width={30}
            />
          </div>
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
                  onClick: () =>
                    navigate(
                      `/${jsonRoute.Configuracao}/geral/${jsonRoute.Stepper_Cadastro_Combo_Produto_Servico}`
                    ),
                  icon: "fa fa-plus",
                  title: "Adicionar",
                },
              ],
              rowOnClick: (row, rowIndex) => {
                navigate(
                  `/${jsonRoute.Configuracao}/geral/${jsonRoute.Stepper_Cadastro_Combo_Produto_Servico}`
                );
              },
              toolbarComponent: () => (
                <div className={styles.inputTabela}>
                  <UseInputPadrao
                    type="select"
                    label="Pesquisar"
                    placeholder={"descrição"}
                    options={filtroDescricao}
                    value={pesquisar}
                    onChange={setPesquisar}
                    searchable={true}
                    defaultSelect={false}
                    width={15}
                  />
                  <UseInputPadrao
                    type="text"
                    label="Texto"
                    value={texto}
                    onChange={setTexto}
                    inputRef={textoRef}
                    width={85}
                  />
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default ComboProdutoServico;
