import { UseInputMask, InputPadrao, UseInputPadrao } from '../../../../../components/InputPadrao';
import TogglePadrao from '../../../../../components/TooglePadrao';
import TabelaPadrao from '../../../../../components/TabelaPadrao';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { jsonRoute } from "../../../../../utils/json";

const NovoStatus = () => {
    const [tipo, setTipo, tipoRef] = UseInputMask();
    const [descricao, setDescricao, descricaoRef] = UseInputMask();

    const [padrao, setPadrao] = useState(false);
    const [callcenter, setCallcenter] = useState(false);
    const [desativarTela, setDesativarTela] = useState(false);
    const [visualizaInadimplenteStatusProposta, setVisualizaInadimplenteStatusProposta] = useState(false);
    const [visualizaInadimplenteStatusFi, setVisualizaInadimplenteStatusFi] = useState(false);
    const [congelamentoFiStatusETela, setCongelamentoFiStatusETela] = useState(false);
    const [mudarStatusPropostaParaAtivo, setMudarStatusPropostaParaAtivo] = useState(false);
    const [utilizaTelaSerasa, setUtilizaTelaSerasa] = useState(false);
    const [criaLancamentoComEsseStatus, setCriaLancamentoComEsseStatus] = useState(false);
    const [enviaAutomaticamenteParaBacklist, setEnviaAutomaticamenteParaBacklist] = useState(false);
    const [utilizaReguaInadimplencia, setUtilizaReguaInadimplencia] = useState(false);

    return (
        <>
            <div className="header">
                <div>
                    <h1 className="title">Novo Status</h1>
                </div>
                <div>
                    <h2 className="subtitle">Página de Status cadastrados no sistema.</h2>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="contentRow">
                        <div className="contentColumn">
                            <UseInputPadrao
                                label="Tipo"
                                type="select"
                                value={tipo}
                                inputRef={tipoRef}
                                onChange={setTipo}
                            />
                        </div>
                        <div className="contentColumn">
                            <UseInputPadrao
                                label="Descrição"
                                type="text"
                                value={descricao}
                                inputRef={descricaoRef}
                                onChange={setDescricao}
                            />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <TogglePadrao label="Padrão" checked={padrao} onChange={setPadrao} />
                    <TogglePadrao label="Inativar no CallCenter" checked={callcenter} onChange={setCallcenter} />
                    <TogglePadrao label="Desativar Tela" checked={desativarTela} onChange={setDesativarTela} />
                    <TogglePadrao label="Visualiza na tela de inadimplente - Status Proposta/Contrato" checked={visualizaInadimplenteStatusProposta} onChange={setVisualizaInadimplenteStatusProposta} />
                    <TogglePadrao label="Visualiza na tela de inadimplente - Status FI" checked={visualizaInadimplenteStatusFi} onChange={setVisualizaInadimplenteStatusFi} />
                    <TogglePadrao label="Congelamento FI - Status e Tela" checked={congelamentoFiStatusETela} onChange={setCongelamentoFiStatusETela} />
                    <TogglePadrao label="Mudar Status da proposta para Ativo através do Arquivo Retorno" checked={mudarStatusPropostaParaAtivo} onChange={setMudarStatusPropostaParaAtivo} />
                    <TogglePadrao label="Utiliza na Tela do Serasa" checked={utilizaTelaSerasa} onChange={setUtilizaTelaSerasa} />
                    <TogglePadrao label="Cria Lançamento com esse Status qdo Regera Nosso Número" checked={criaLancamentoComEsseStatus} onChange={setCriaLancamentoComEsseStatus} />
                    <TogglePadrao label="Envia automaticamente para BackList" checked={enviaAutomaticamenteParaBacklist} onChange={setEnviaAutomaticamenteParaBacklist} />
                    <TogglePadrao label="Utiliza na régua de inadimplência" checked={utilizaReguaInadimplencia} onChange={setUtilizaReguaInadimplencia} />
                </div>
                <div className="content">
                    <button className="button">Gravar</button>
                    <button className="button">Novo</button>
                    <button className="button">Voltar</button>
                </div>
            </div>
        </>
    )
}

export default NovoStatus;
