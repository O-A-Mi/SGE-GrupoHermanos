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
      <div>
        <div className={styles.containerEdicao}>
          <div>
            <div className={styles.label}><strong>Nome</strong></div>
            <InputPadrao type='text'/>
          </div>
          <div>
          <div className={styles.label}><strong>Status</strong></div>
            <div>
              <StatusSelect options={status} placeholder="Selecionar..." onChange={(e) => { e ? console.log(e.value) : null }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NovoDepartamento
