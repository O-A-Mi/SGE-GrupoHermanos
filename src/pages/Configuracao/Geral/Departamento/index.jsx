import styles from './Departamento.module.css'
import TabelaPadrao from '../../../../components/TabelaPadrao'

function Departamento() {

  const tabelaColumns = [
    { 
      value: 'nome', 
      name: 'Nome do Departamento',
      align: 'center',
      sortable: true,
    },
  ]

  const tabelaDados = [
    {nome: 'Suporte'},
    {nome: 'Jurídico'},
    {nome: 'Diretoria'},
    {nome: 'Financeiro'}
  ]

  return (
    <>
      <div className={styles.headerLocal}>
        <h1 className="title">Abre Departamento</h1>
        <h2 className="subtitle">Adicione, edite ou remova departamentos</h2>
      </div>
      <div className="container">
        <TabelaPadrao 
          tabelaId="departamentos-config"
          columns={tabelaColumns}  
          data={tabelaDados}
        />
      </div>
    </>
  )
}

export default Departamento
