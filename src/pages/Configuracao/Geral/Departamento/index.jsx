import styles from './Departamento.module.css'
import TabelaPadrao from '../../../../components/TabelaPadrao'

function Departamento() {

  return (
    <>
      <div className="header">
        <h1 className="title">Abre Departamento</h1>
        <h2 className="subtitle">Adicione, edite ou remova departamentos</h2>
      </div>
      <div className="container">
        <div className={styles.grid}>
          <label htmlFor="departamentoStatus" className={styles.label}>Status</label>
          <div>
            <select name="departamentoStatus" id="departamentoStatus" className={styles.select}>
              <option value="ativo" className={styles.option}>ativo</option>
              <option value="cancelado" className={styles.option}>cancelado</option>
              <option value="inadimplente" className={styles.option}>inadimplente</option>
              <option value="suspenso" className={styles.option}>suspenso</option>
            </select>
          </div>
        </div>
        <TabelaPadrao>
          
        </TabelaPadrao>
      </div>
    </>
  )
}

export default Departamento
