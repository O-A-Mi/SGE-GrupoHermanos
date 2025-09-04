import StepperPadrao from "../../../../../../components/StepperPadrao";
import dialogMessage from "../../../../../../assets/dialog-ui/dialog";

import {
  UseInputPadrao,
  UseInputMask,
} from "../../../../../../components/InputPadrao";
import TogglePadrao from "../../../../../../components/TooglePadrao";
import styles from "./Combo.module.css";
import { useCallback, useEffect, useState, useRef } from "react";

function Combo() {
  const [arquivoPlano, setArquivoPlano] = useState("");
  const arquivoPlanoRef = useRef();
  const [fileBenef, setFileBenef] = useState(null);

  const [status, setStatus, statusRef] = UseInputMask();
  const [ordem, setOrdem, ordemRef] = UseInputMask();
  const [aparece, setAparece, apareceRef] = UseInputMask();
  const [grupo, setGrupo, grupoRef] = UseInputMask();
  const [concessao, setConcessao, concessaoRef] = UseInputMask();
  const [tipoPlano, setTipoPlano, tipoPlanoRef] = UseInputMask();
  const [convenio, setConvenio, convenioRef] = UseInputMask();
  const [descricao, setDescricao, descricaoRef] = UseInputMask();
  const [abreviacao, setAbreviacao, abreviacaoRef] = UseInputMask();
  const [tipoReajuste, setTipoReajuste, tipoReajusteRef] = UseInputMask();
  const [formaPagamento, setFormaPagamento, formaPagamentoRef] = UseInputMask();
  const [entidade, setEntidade, entidadeRef] = UseInputMask();
  const [carencia, setCarencia, carenciaRef] = UseInputMask();
  const [mesAniversario, setMesAniversario, mesAniversarioRef] = UseInputMask();
  const [vigenciaInicio, setVigenciaInicio, vigenciaInicioRef] = UseInputMask();
  const [vigenciaFim, setVigenciaFim, vigenciaFimRef] = UseInputMask();
  const [segmentacao, setSegmentacao, segmentacaoRef] = UseInputMask();
  const [numeroANS, setNumeroANS, numeroANSRef] = UseInputMask();
  const [limiteDependentes, setLimiteDependentes, limiteDependentesRef] =
    UseInputMask();
  const [acomodacao, setAcomodacao, acomodacaoRef] = UseInputMask();
  const [modoReajusteFaixa, setModoReajusteFaixa, modoReajusteFaixaRef] =
    UseInputMask();
  const [abrangencia, setAbrangencia, abrangenciaRef] = UseInputMask();
  const [fatorModeracao, setFatorModeracao, fatorModeracaoRef] = UseInputMask();
  const [custo, setCusto, custoRef] = UseInputMask("R$ 99.99", "both");
  const [precoFinal, setPrecoFinal, precoFinalRef] = UseInputMask(
    "R$ 99999",

    "both"
  );
  const [modoAdesao, setModoAdesao, modoAdesaoRef] = UseInputMask();
  const [valorAdesao, setValorAdesao, valorAdesaoRef] = UseInputMask(
    "R$ 99,99",
    "both"
  );

  const [faixaIdadeActive, setFaixaIdadeActive] = useState(false);
  const [adicionaDependenteActive, setAdicionaDependenteActive] =
    useState(false);
  const [cobraDependentesActive, setCobraDependentesActive] = useState(false);
  const [seguradoCarenciaActive, setSeguradoCarenciaActive] = useState(false);
  const [dependenteCarenciaActive, setDependenteCarenciaActive] =
    useState(false);
  const [auditoriaPerguntasActive, setAuditoriaPerguntasActive] =
    useState(false);
  const [cadastroFarmaciaActive, setCadastroFarmaciaActive] = useState(false);
  const [reajusteContratoActive, setReajusteContratoActive] = useState(false);
  const [reajusteFaixaActive, setReajusteFaixaActive] = useState(false);
  const [propostaEspecialActive, setPropostaEspecialActive] = useState(false);
  const [utilizaVigenciaActive, setUtilizaVigenciaActive] = useState(false);
  const [portalCorretorActive, setPortalCorretorActive] = useState(false);
  const [validaDnvActive, setValidaDnvActive] = useState(true);
  const [utilizaProRataActive, setUtilizaProRataActive] = useState(true);
  const [utilizaDmedActive, setUtilizaDmedActive] = useState(false);
  const [codProdutoEnvio, setCodProdutoEnvio, codProdutoEnvioRef] =
    UseInputMask();
  const [codEmpresaEnvio, setCodEmpresaEnvio, codEmpresaEnvioRef] =
    UseInputMask();
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

  const StatusOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const OrdemOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const ApareceOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const GrupoOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "kuko", label: "KUKO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const ConcessaoOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "nao", label: "NÃO" },
    { value: "sim", label: "SIM" },
  ];
  const TipoPlanoOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const ConvenioOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const FormaPagamentoOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const EntidadeOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const MesOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ];
  const tipoReajusteOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "anual", label: "ANUAL" },
    { value: "semestral", label: "SEMESTRAL" },
    { value: "trimestral", label: "TRIMESTRAL" },
    { value: "mensal", label: "MENSAL" },
  ];
  const SegmentacaoOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "anual", label: "ANUAL" },
    { value: "semestral", label: "SEMESTRAL" },
    { value: "trimestral", label: "TRIMESTRAL" },
    { value: "mensal", label: "MENSAL" },
  ];
  const FatorModeracaoOptions = [
    { value: "", label: "ESCOLHA UMA OPÇÃO" },
    { value: "anual", label: "ANUAL" },
    { value: "semestral", label: "SEMESTRAL" },
    { value: "trimestral", label: "TRIMESTRAL" },
    { value: "mensal", label: "MENSAL" },
  ];
  const ModoAdesaoOptions = [
    { value: "percentual", label: "Percentual" },
    { value: "monetário", label: "Monetário" },
  ];
  const ModoReajusteFaixaOptions = [
    { value: "mesAtual", label: "aniversariante do mes atual" },
    { value: "mesSubsequente", label: "aniversariante do mes subsequente" },
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    const isPng = selectedFile.name.endsWith(".png");

    if (!isPng) {
      dialogMessage("Por favor, selecione um arquivo .png válido.", "warning", {
        confirmButton: false,
      });
      e.target.value = "";
      return;
    }

    if (selectedFile) {
      setArquivoPlano(selectedFile.name);
      setFileBenef(selectedFile);
    } else {
      setArquivoPlano(null);
      setFileBenef(null);
    }
  };

  return (
    <>
      <div className={styles.pageComboProdutoServico}>
        <div>
          <div className={styles.stepprComboProdutoServico}></div>
        </div>

        <div className={styles.containerComboProdutoServico}>
          <div clasName={styles.contentComboProdutoServico}>
            <h1 className={styles.subTitle}>Configuração Inicial</h1>
            <div className={styles.inputs}>
              <UseInputPadrao
                type="select"
                label="Status"
                options={StatusOptions}
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
                options={OrdemOptions}
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
                options={ApareceOptions}
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
                options={GrupoOptions}
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
                options={ConcessaoOptions}
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
                options={TipoPlanoOptions}
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
                options={ConvenioOptions}
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
                options={EntidadeOptions}
                value={entidade}
                onChange={setEntidade}
                inputRef={entidadeRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 25}
                multiple={true}
              />
              <UseInputPadrao
                type="select"
                label="Forma de Pagamento"
                options={FormaPagamentoOptions}
                value={formaPagamento}
                onChange={setFormaPagamento}
                inputRef={formaPagamentoRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 25}
                multiple={true}
                required={true}
              />
            </div>
            <div className={styles.inputs}>
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
            </div>

            <div className={styles.inputs}>
              <UseInputPadrao
                type="select"
                label="Tipo Reajuste"
                options={tipoReajusteOptions}
                value={tipoReajuste}
                onChange={setTipoReajuste}
                inputRef={tipoReajusteRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 16.4}
                multiple={true}
                required={true}
              />
              <UseInputPadrao
                type="text"
                label="Carência"
                value={carencia}
                onChange={setCarencia}
                inputRef={carenciaRef}
                width={isMobile ? 100 : 16.4}
                required={true}
              />
              <UseInputPadrao
                type="select"
                label="Mês aniversário do Reajuste"
                options={MesOptions}
                value={mesAniversario}
                onChange={setMesAniversario}
                inputRef={mesAniversarioRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 16.4}
                multiple={true}
                required={true}
              />
              <UseInputPadrao
                type="date"
                label="Vigencia Contrato - Inicio"
                value={vigenciaInicio}
                onChange={setVigenciaInicio}
                inputRef={vigenciaInicioRef}
                width={isMobile ? 100 : 25}
              />
              <UseInputPadrao
                type="date"
                label="Vigencia Contrato - Fim"
                value={vigenciaFim}
                onChange={setVigenciaFim}
                inputRef={vigenciaFimRef}
                width={isMobile ? 100 : 25}
              />
            </div>
          </div>
          <div>
            <h1 className={styles.subTitle}>ANS</h1>
            <div className={styles.inputs}>
              <UseInputPadrao
                type="text"
                label="Número da ANS"
                value={numeroANS}
                onChange={setNumeroANS}
                inputRef={numeroANSRef}
                width={isMobile ? 100 : 16.4}
              />
              <UseInputPadrao
                type="select"
                label="Segmentação"
                options={SegmentacaoOptions}
                value={segmentacao}
                onChange={setSegmentacao}
                inputRef={segmentacaoRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 33.1}
              />
              <UseInputPadrao
                type="text"
                label="Acomodação"
                value={acomodacao}
                onChange={setAcomodacao}
                inputRef={acomodacaoRef}
                width={isMobile ? 100 : 16.4}
              />
              <UseInputPadrao
                type="text"
                label="Abrangência"
                value={abrangencia}
                onChange={setAbrangencia}
                inputRef={abrangenciaRef}
                width={isMobile ? 100 : 16.4}
              />
              <UseInputPadrao
                type="select"
                label="Fator de Moderação"
                options={FatorModeracaoOptions}
                value={fatorModeracao}
                onChange={setFatorModeracao}
                inputRef={fatorModeracaoRef}
                searchable={true}
                defaultSelect={false}
                width={isMobile ? 100 : 16.4}
              />
            </div>
          </div>
          <div>
            <h1 className={styles.subTitle}>Configuração de Envio Externo</h1>
            <div className={styles.inputs}>
              <UseInputPadrao
                type="text"
                label="Cód. Produto Envio"
                placeHolder="888"
                value={codProdutoEnvio}
                onChange={setCodProdutoEnvio}
                inputRef={codProdutoEnvioRef}
                width={isMobile ? 100 : 16.4}
              />
              <UseInputPadrao
                type="text"
                label="Cód. Empresa Envio"
                placeHolder="8888"
                value={codEmpresaEnvio}
                onChange={setCodEmpresaEnvio}
                inputRef={codEmpresaEnvioRef}
                width={isMobile ? 100 : 16.4}
              />
            </div>
          </div>
          <div>
            <h1 className={styles.subTitle}>Configuração de Módulos</h1>
            <div className={styles.inputs}>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Utiliza NºProposta Especial?"
                  checked={propostaEspecialActive}
                  onChange={() =>
                    setPropostaEspecialActive(!propostaEspecialActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Utiliza por Faixa de Idade?"
                  checked={faixaIdadeActive}
                  onChange={() => setFaixaIdadeActive(!faixaIdadeActive)}
                />
              </div>
              {faixaIdadeActive && (
                <>
                  <UseInputPadrao
                    type="text"
                    label="Custo"
                    placeHolder="00,00"
                    value={custo}
                    onChange={setCusto}
                    inputRef={custoRef}
                    width={isMobile ? 100 : 16.4}
                  />
                  <UseInputPadrao
                    type="text"
                    label="Preço Final"
                    placeHolder="00,00"
                    value={precoFinal}
                    onChange={setPrecoFinal}
                    inputRef={precoFinalRef}
                    required={true}
                    width={isMobile ? 100 : 16.4}
                  />
                  <UseInputPadrao
                    type="select"
                    label="Modo da Adesão"
                    options={ModoAdesaoOptions}
                    value={modoAdesao}
                    onChange={setModoAdesao}
                    inputRef={modoAdesaoRef}
                    searchable={true}
                    defaultSelect={false}
                    required={true}
                    width={isMobile ? 100 : 16.4}
                  />
                  <UseInputPadrao
                    type="text"
                    label="Valor da Adesão "
                    placeHolder="00,00"
                    value={valorAdesao}
                    onChange={setValorAdesao}
                    inputRef={valorAdesaoRef}
                    required={true}
                    width={isMobile ? 100 : 16.4}
                  />
                </>
              )}
            </div>
            <div className={styles.inputs}>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Adiciona Dependentes?"
                  checked={adicionaDependenteActive}
                  onChange={() =>
                    setAdicionaDependenteActive(!adicionaDependenteActive)
                  }
                />
              </div>
              {!adicionaDependenteActive && (
                <>
                  <UseInputPadrao
                    type="text"
                    label="Limite de Dependentes"
                    placeHolder="999"
                    value={limiteDependentes}
                    onChange={setLimiteDependentes}
                    inputRef={limiteDependentesRef}
                    width={isMobile ? 100 : 16.4}
                  />
                  <div className={styles.toggleCombo}>
                    <TogglePadrao
                      label="Cobra Dependentes?"
                      checked={cobraDependentesActive}
                      onChange={() =>
                        setCobraDependentesActive(!cobraDependentesActive)
                      }
                    />
                  </div>
                </>
              )}
            </div>
            <div className={styles.inputs}>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Utiliza Vigência?"
                  checked={utilizaVigenciaActive}
                  onChange={() =>
                    setUtilizaVigenciaActive(!utilizaVigenciaActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="V. no Portal do Corretor? "
                  checked={portalCorretorActive}
                  onChange={() =>
                    setPortalCorretorActive(!portalCorretorActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Valida DNV?"
                  checked={validaDnvActive}
                  onChange={() => setValidaDnvActive(!validaDnvActive)}
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Utiliza Pro Rata?"
                  checked={utilizaProRataActive}
                  onChange={() =>
                    setUtilizaProRataActive(!utilizaProRataActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Utiliza DMED?"
                  width="16%"
                  checked={utilizaDmedActive}
                  onChange={() => setUtilizaDmedActive(!utilizaDmedActive)}
                />
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Segurado têm carência?"
                  checked={seguradoCarenciaActive}
                  onChange={() =>
                    setSeguradoCarenciaActive(!seguradoCarenciaActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Dependente têm carência?"
                  checked={dependenteCarenciaActive}
                  onChange={() =>
                    setDependenteCarenciaActive(!dependenteCarenciaActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Usa Auditoria de Perguntas?"
                  checked={auditoriaPerguntasActive}
                  onChange={() =>
                    setAuditoriaPerguntasActive(!auditoriaPerguntasActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Envia Cadastros à S. Farmácia?"
                  checked={cadastroFarmaciaActive}
                  onChange={() =>
                    setCadastroFarmaciaActive(!cadastroFarmaciaActive)
                  }
                />
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Reajuste do Contrato?"
                  checked={reajusteContratoActive}
                  onChange={() =>
                    setReajusteContratoActive(!reajusteContratoActive)
                  }
                />
              </div>
              <div className={styles.toggleCombo}>
                <TogglePadrao
                  label="Reajuste por Faixa?"
                  checked={reajusteFaixaActive}
                  onChange={() => setReajusteFaixaActive(!reajusteFaixaActive)}
                />
              </div>
              {!reajusteFaixaActive && (
                <>
                  <UseInputPadrao
                    type="select"
                    label="Modo do Reajuste por Faixa"
                    options={ModoReajusteFaixaOptions}
                    value={modoReajusteFaixa}
                    onChange={setModoReajusteFaixa}
                    inputRef={modoReajusteFaixaRef}
                    searchable={true}
                    defaultSelect={false}
                    width={isMobile ? 100 : 16.4}
                  />
                </>
              )}
            </div>
          </div>
          <div>
            <h1 className={styles.subTitle}>Informações adicionais</h1>
            <div className={styles.inputs}>
              <UseInputPadrao
                label="Imagem (Preferencialmente 512 x 512)"
                identifier="arquivo-plano"
                onChange={handleFileChange}
                inputRef={arquivoPlanoRef}
                type="file"
                width={isMobile ? 100 : 50}
                gap={isMobile ? 0 : 0.5}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Combo;
