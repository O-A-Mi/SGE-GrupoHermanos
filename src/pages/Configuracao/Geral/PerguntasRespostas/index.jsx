import React from "react";
import StatusSelect from "../../../../components/StatusSelect/";
import { InputPadrao } from "../../../../components/InputPadrao";
import TabelaPadrao from "../../../../components/TabelaPadrao";
import PaginacaoNumerados from "../../../../components/PaginacaoNumerados";
import * as Icones from "../../../../components/Icones";
const PerguntasRespostas = () => {

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
        {value: "pergunta", label: "Pergunta"},
        {value: "titulo", label: "Título"},
    ];

    return(
        <>
            <div className="header">
                <div className="title">Abre Perguntas e Respostas</div>
                <div className="subtitle">Teste</div>
            </div>
            <div className="conteiner">
                <div className="subtitle">Status</div>
                <div>
                    <StatusSelect options={status} placeholder="Selecione..." onChange={(val) => console.log("Status: ",val)}/>
                </div>
                <div className="subtitle">Pesquisar</div>
                <div>
                    <StatusSelect options={perguntas} placeholder="Selecione..." onChange={(val) => console.log("Status: ",val)}/>
                <div className="subtitle">Texto</div>
                </div>
                    <InputPadrao type="text" />
                </div>

            <div>
                <div>
                    <button>
                        <Icones.IconFile />
                    </button>
                    <button>
                        <Icones.IconReply />
                    </button>
                    <button>
                        <Icones.IconServer />
                    </button>
                </div>
            </div>

            <div>
                <button>
                    <Icones.IconHide />
                </button>
                <button>
                    <Icones.IconSearch />
                </button>
                <button>
                    <Icones.IconAlternar />
                </button>
                <button>
                    <Icones.IconColuna />
                </button>
                <button>
                    <Icones.IconPrint />
                </button>
                <button>
                    <Icones.IconExport />
                </button>
                <TabelaPadrao />
                <PaginacaoNumerados />
            </div>
        
        </>
    );
}

export default PerguntasRespostas;