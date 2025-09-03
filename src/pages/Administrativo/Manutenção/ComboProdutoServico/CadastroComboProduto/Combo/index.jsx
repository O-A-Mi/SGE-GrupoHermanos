import StepperPadrao from "../../../../../../components/StepperPadrao";
import {
  UseInputPadrao,
  UseInputMask,
} from "../../../../../../components/InputPadrao";
import styles from "./Combo.module.css";
import { useCallback, useEffect, useState } from "react";

function Combo() {
  const [status, setStatus, statusRef] = UseInputMask();
  const [ordem, setOrdem, ordemRef] = UseInputMask();
  const [aparece, setAparece, apareceRef] = UseInputMask();
  const [grupo, setGrupo, grupoRef] = UseInputMask();
  const [concessao, setConcessao, concessaoRef] = UseInputMask();
  const [tipoPlano, setTipoPlano, tipoPlanoRef] = UseInputMask();
  const [convenio, setConvenio, convenioRef] = UseInputMask();
  const [descricao, setDescricao, descricaoRef] = UseInputMask();
  const [abreviacao, setAbreviacao, abreviacaoRef] = UseInputMask();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Status = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const Ordem = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const Aparece = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const Grupo = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "kuko", label: "KUKO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const Concessao = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "nao", label: "NÃO" },
    { value: "sim", label: "SIM" },
  ];
  const TipoPlano = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const Convenio = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];

  return (
    <>
      <div className={styles.pageComboProdutoServico}>
        <div>
          <div className={styles.titleComboProdutoServico}>
            <h1>Combo Produtos/ Serviços</h1>
          </div>
          <div className={styles.stepprComboProdutoServico}></div>
        </div>

        <div className={styles.containerComboProdutoServico}>
          <div clasName={styles.contentComboProdutoServico}>
            <h1 className={styles.subTitle}>Configuração Inicial</h1>
            <div className={styles.inputs}>
              <UseInputPadrao
                type="select"
                label="Status"
                options={Status}
                value={status}
                onChange={setStatus}
                inputRef={statusRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 16.4}
                required={true}
              />
              <UseInputPadrao
                type="select"
                label="Ordem"
                options={Ordem}
                value={ordem}
                onChange={setOrdem}
                inputRef={ordemRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 16.4}
              />
              <UseInputPadrao
                type="select"
                label="Aparece em"
                options={Aparece}
                value={aparece}
                onChange={setAparece}
                inputRef={apareceRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 16.4}
              />
              <UseInputPadrao
                type="select"
                label="Grupo Contratual"
                options={Grupo}
                value={grupo}
                onChange={setGrupo}
                inputRef={grupoRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 25}
              />
              <UseInputPadrao
                type="select"
                label="Tabela de Concessão"
                options={Concessao}
                value={concessao}
                onChange={setConcessao}
                inputRef={concessaoRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 25}
              />
            </div>
            <div className={styles.inputs}>
              <UseInputPadrao
                type="select"
                label="Tipo de Plano"
                options={TipoPlano}
                value={tipoPlano}
                onChange={setTipoPlano}
                inputRef={tipoPlanoRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 25}
                required={true}
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
                width={isMobile ? 100 : 25}
              />
              <UseInputPadrao
                type="select"
                label="Entidade"
                options={TipoPlano}
                value={tipoPlano}
                onChange={setTipoPlano}
                inputRef={tipoPlanoRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 25}
                multiple={true}
              />
              <UseInputPadrao
                type="select"
                label="Forma de Pagamento"
                options={Convenio}
                value={convenio}
                onChange={setConvenio}
                inputRef={convenioRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 25}
                multiple={true}
                required={true}
              />
            </div>
            <div className={styles.inputs}></div>
            <UseInputPadrao
              type="text"
              label="Descrição"
              value={descricao}
              onChange={setDescricao}
              inputRef={descricaoRef}
              width={isMobile ? 100 : 50}
              required={true}
            />
            <UseInputPadrao
              type="text"
              label="Abreviação"
              value={abreviacao}
              onChange={setAbreviacao}
              inputRef={abreviacaoRef}
              width={isMobile ? 100 : 50}
              required={true}
            />
            <div className={styles.inputs}></div>
          </div>
          <div>
            <h1 className={styles.subTitle}>ANS</h1>
            <div className={styles.inputs}></div>
          </div>
          <div>
            <h1 className={styles.subTitle}>Configuração de Envio Externo</h1>
            <div className={styles.inputs}></div>
          </div>
          <div>
            <h1 className={styles.subTitle}>Configuração de Módulos</h1>
          </div>
          <div>
            <h1 className={styles.subTitle}>Informações adicionais</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Combo;
