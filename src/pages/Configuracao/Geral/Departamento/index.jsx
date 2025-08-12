import styles from './Departamento.module.css'
import TabelaPadrao from '../../../../components/TabelaPadrao'
import { UseInputPadrao } from '../../../../components/InputPadrao'

function Departamento() {

  function handleRowClick() {
    alert("Clicado")
  }

  const tabelaColumns = [
    {
      value: 'status',
      name: 'Status do departamento',
      align: 'center',
      sortable: true
    },
    {
      value: 'nome',
      name: 'Nome do Departamento',
      align: 'center',
      sortable: true,
    },
  ]

  const tabelaDados = [
    { status: 'Ativo', nome: 'Suporte' },
    { status: 'Ativo', nome: 'Jurídico' },
    { status: 'Suspenso', nome: 'Jurídico' },
    { status: 'Ativo', nome: 'Diretoria' },
    { status: 'Ativo', nome: 'Financeiro' },
    { status: 'Inativo', nome: 'Comercial' },
    { status: 'Cancelado', nome: 'Financeiro' },
    { status: 'Cancelado', nome: 'Financeiro' },
    { status: 'Cancelado', nome: 'Financeiro' }
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
          options={{
            cardsPerPage: 10,
            showPagination: true,
            showExport: true,
            fileName: "departamentos",
            showColumnsSelector: true,
            showSearch: true,
            toolbar: true,
            rowOnClick: handleRowClick
          }}
        />
      </div>
    </>
  )
}

export default Departamento
