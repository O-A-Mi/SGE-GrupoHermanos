import StepperPadrao from "../../../../../../components/StepperPadrao";

import dialogMessage from "../../../../../../assets/dialog-ui/dialog";

import {
  UseInputPadrao,
  UseInputMask,
} from "../../../../../../components/InputPadrao";
import TogglePadrao from "../../../../../../components/TooglePadrao";
import styles from "./FaixaDependente.module.css";
import { useCallback, useEffect, useState, useRef } from "react";
import TabelaPadrao from "../../../../../../components/TabelaPadrao";

function ComboFaixaDependente() {
  const isMobile = window.innerWidth <= 768;
  const [parentesco, setParentesco, parentescoRef] = UseInputMask();

  const parentescoOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "avó", label: "Avó" },
    { value: "filho", label: "Filho" },
    { value: "pai", label: "Pai" },
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
      <h2>Faixa de Dependente</h2>
      <div>
        <UseInputPadrao
          type="select"
          label="Parentesco a ser incluidos"
          options={parentescoOptions}
          value={parentesco}
          onChange={setParentesco}
          inputRef={parentescoRef}
          searchable={true}
          defaultSelect={false}
          width={isMobile ? 100 : 100}
          multiple={true}
        />
      </div>
      <div></div>
      <div></div>
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
        }}
      />
    </>
  );
}

export default ComboFaixaDependente;
