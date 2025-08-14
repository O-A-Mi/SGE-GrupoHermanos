//import Stepper from "../../../../../components/Stepper";
import StatusSelect from "../../../../../components/StatusSelect";
import MultiSelect from "../../../../../components/MultiSelect/MultiSelect";
import { InputPadrao } from "../../../../../components/InputPadrao";
import { useState } from "react";
import * as Icones from "../../../../../components/Icones"
import { useNavigate } from "react-router";
import styles from '../PerguntasRespostas.module.css';

const NovaPergunta = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    /*
    const location = useLocation();
    const handleNavigate = useCallback((link) => {
        navigate(link);
    }, [navigate]);

    const isNovaPerguntaRoute = location.pathname.includes(jsonRoute.Configuracao_Geral_NovaPergunta2);

    if (isNovaPerguntaRoute) {
        return <Outlet />;
    }
    */

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

    const declaracao = [
        {value: "declaracao de saude", label: "Declaração de Saúde"},
        {value: "declaracao de conhecimento", label: "Declaração de Conhecimento"}
    ];

    const vizualização = [
        {value: "todos", label: "Todos"},
        {value: "associado", label: "Associado"},
        {value: "segurado", label: "Segurado"},
        {value: "dependente", label: "Dependente"}
    ];

    const options = [
        { value: 1, label: "TODOS" },
        { value: 5841, label: "TESTE WHATS (5841)" },
        { value: 8429, label: "ODONTO CORP. - SIGA ODONTO (8429)" },
        { value: 11161, label: "UMBRELLA (11161)" },
      ];
      

    const incrementar = () => {
        if(count < 999){
            setCount(count + 1);
        }
    };

    const decrementar = () => {
        if(count > 0){
            setCount(count-1);
        }
    };

    const handleChange = (e) => {
        const valor = parseInt(e.target.value, 10);
        if(!isNaN(valor) && valor >= 0 && valor <= 999){
            setCount(valor);
        }
    };

    const handleSalvar = () => {
        alert("Salvo");
    }
    
    const handleVoltar = () => {
        navigate(-1);
    };

    return(
        <>
        <div className="header">
            <div>
                <h1 className="title">Perguntas e Respostas</h1>
            </div>
        </div>

        <div className="container">
             <div className="content">
                    <div className="contentRow">

                        <div className={styles.contentColumn}>
                            <label className="subtitle">Título</label>
                                <InputPadrao />
                        </div>
                        <div className="contentColumn">
                            <label className="subtitle">Status</label>
                                <StatusSelect options={status} placeholder="ESCOLHA UMA OPÇÃO" onChange={(val) => console.log("Status: ",val)}/>
                        </div>
                        <div className="contentColumn">
                            <label className="subtitle">Declaração pertencente</label>
                                <StatusSelect options={declaracao} placeholder="Selecione..." onChange={(val) => console.log("Declaracao: ",val)}/>
                        </div>
                        <div className="contentColumn">
                            <label className="subtitle">Tipo Visualização</label>
                                <StatusSelect options={vizualização} placeholder="Selecione..." onChange={(val) => console.log("Vizualização: ",val)}/>
                        </div>
            </div>
        </div>

            <div className="content">
                <div className="contentRow">
                    <div className={styles.contentColumn}>
                        <label className="subtitle">Ordem visualização</label>

                        {/* AQUI: aplica a classe do flex */}
                        <div className={styles.ordemVisualizacao}>
                        <button className={styles.btnMenosEMais} onClick={decrementar}><Icones.IconMinus /> </button>
                        <InputPadrao
                            type="number"
                            value={count}
                            onChange={handleChange}
                        />
                        <button className={styles.btnMenosEMais} onClick={incrementar}><Icones.IconPlus /></button>
                        </div>
                    </div>

                    <div className={styles.limitarCombos}>
                        <label className="subtitle">Limitar Combos</label>
                        <MultiSelect options={options} placeholder="Selecione..." onChange={MultiSelect.handleChange} />
                    </div>
                </div>
            </div>
            <div className={styles.areaTexto}>
                <label className="subtitle">Texto</label>
                    <InputPadrao type="textarea" />
                <div className={styles.btnGroup}>
                    <button className={styles.btnGravar} onClick={handleSalvar}><Icones.IconFile />Gravar</button>
                    <button className={styles.btnVoltar} onClick={handleVoltar}><Icones.IconReply />Voltar</button>
                    <button className={styles.btnProximo} onClick={() => alert("Em progresso")}><Icones.IconRight />Proximo</button>
                </div>
            </div>
        </div>

        </>
    );
}

export default NovaPergunta;