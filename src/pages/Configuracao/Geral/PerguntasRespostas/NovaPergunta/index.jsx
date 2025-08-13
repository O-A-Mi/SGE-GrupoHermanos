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
    
    const handleVoltar = () => {
        navigate(-1);
    };

    return(
        <>
        <div className="header">
            <div className="title">Perguntas e Respostas</div>
            
        </div>

        <div className="conteiner">
            
            <div className="subtitle">Título</div>
            <InputPadrao />
            
            <div className="subtitle">Status</div>
            <StatusSelect options={status} placeholder="ESCOLHA UMA OPÇÃO" onChange={(val) => console.log("Status: ",val)}/>
            
            <div className="subtitle">Declaração pertencente</div>
            <StatusSelect options={declaracao} placeholder="Selecione..." onChange={(val) => console.log("Declaracao: ",val)}/>
            
            <div className="subtitle">Tipo Visualização</div>
            <StatusSelect options={vizualização} placeholder="Selecione..." onChange={(val) => console.log("Vizualização: ",val)}/>
            
            <div>
                <div className="subtitle">Ordem visualização</div> 
                <button onClick={decrementar}>-</button> 
                <InputPadrao type="number" value={count} onChange={handleChange}></InputPadrao>
                <button onClick={incrementar}>+</button>
            </div>

            <div>
                <div className="subtitle">Limitar Combos</div>
                <MultiSelect options={options} placeholder="Selecione..." onChange={MultiSelect.handleChange}/>
            </div>

            <div className="subtitle">Texto</div>
            <InputPadrao type="textarea" />
            <div className={styles.btnGroup}>
                <button className={styles.btnGravar}><Icones.IconFile />Gravar</button>
                <button className={styles.btnVoltar} onClick={handleVoltar}><Icones.IconReply />Voltar</button>
                <button className={styles.btnProximo}><Icones.IconRight />Proximo</button>
            </div>
        </div>
        </>
    );
}

export default NovaPergunta;