import styles from "./NovoDepartamento.module.css"
import StatusSelect from '../../../../../components/StatusSelect'
import { InputPadrao } from '../../../../../components/InputPadrao'

const status = [
  { value: "ativo", label: "ATIVO" },
  { value: "cancelado", label: "CANCELADO" },
  { value: "suspenso", label: "SUSPENSO" },
  { value: "inativo", label: "INATIVO" },
]

function NovoDepartamento() {

  return (
    <>
      <div className="header">
        <h1 className="title">Novo departamento</h1>
        <h2 className="subtitle">Configuração de um novo departamento</h2>
      </div>
        <div className={styles.containerEdicao}>
          <div className={styles.metade}>
            <div className={styles.labelBig}><strong>Nome</strong></div>
            <InputPadrao type='text'/>
          </div>
          <div className={styles.quarto}>
          <div className={styles.label}><strong>Status</strong></div>
            <div>
              <StatusSelect options={status} placeholder="Selecionar..." onChange={(e) => { e ? console.log(e.value) : null }} />
            </div>
          </div>
        </div>
    </>
  )
}

export default NovoDepartamento
