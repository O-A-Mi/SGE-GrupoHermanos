import styles from "./NovoDepartamento.module.css"
import StatusSelect from '../../../../../components/StatusSelect'
import { InputPadrao, UseInputMask } from '../../../../../components/InputPadrao'
import * as Icones from '../../../../../components/Icones'
import { useNavigate } from "react-router"


const status = [
  { value: "ativo", label: "ATIVO" },
  { value: "cancelado", label: "CANCELADO" },
  { value: "suspenso", label: "SUSPENSO" },
  { value: "inativo", label: "INATIVO" },
]

function NovoDepartamento() {

  const navigate = useNavigate();
  const [selectStatus, setSelectStatus, selectStatusRef] = UseInputMask()

  function handleGravarBotao() {
    alert("Departamento adicionado")
  }

  function handleVoltarBotao() {
    navigate(-1);
  }

  function handleNovoBotao() {
    alert("Botão novo clicado")
  }

  return (
    <>
      <div className="header">
        <h1 className="title">Novo departamento</h1>
        <h2 className="subtitle">Configuração de um novo departamento</h2>
      </div>
      <div className={styles.containerEdicao}>
        <div className={styles.metade}>
          <div className={styles.labelBig}><strong>Nome</strong></div>
          <InputPadrao type='text' />
        </div>
        <div className={styles.quarto}>
          <div className={styles.label}><strong>Status</strong>
          </div>
          <div>
            <InputPadrao
              type="select"
              options={status}
              value={selectStatus}
              inputRef={selectStatusRef}
              onChange={setSelectStatus}
              searchable={false}
              defaultSelect={false}
              required={true}
              placeholder="Selecionar..."

            />
          </div>
        </div>
      </div>
      <div className={styles.btnGrupo}>
        <button className={styles.btnNovo} onClick={handleNovoBotao}><Icones.IconFile />Novo</button>
        <button className={styles.btnGravar} onClick={handleGravarBotao}> <Icones.IconPlus />Gravar</button>
        <button className={styles.btnVoltar} onClick={handleVoltarBotao}> <Icones.IconReply />Voltar</button>
      </div>
    </>
  )
}

export default NovoDepartamento
