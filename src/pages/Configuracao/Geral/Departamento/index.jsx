import styles from './Departamento.module.css'
import TabelaPadrao from '../../../../components/TabelaPadrao'
import { InputPadrao, UseInputMask } from '../../../../components/InputPadrao'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { jsonRoute } from '../../../../utils/json'
import { useCallback } from 'react'

/* Listas de placeholder */


const status = [
  { value: "ativo", label: "ATIVO" },
  { value: "cancelado", label: "CANCELADO" },
  { value: "suspenso", label: "SUSPENSO" },
  { value: "inativo", label: "INATIVO" },
]


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
  { status: 'Suspenso', nome: 'Financeiro' },
  { status: 'Ativo', nome: 'Corinthians' },
  { status: 'Cancelado', nome: 'Financeiro' }
]


function Departamento() {

  /* Hooks */

  const [filterSelect, setFilterSelect, filterSelectRef] = UseInputMask()
  const [filterText, setFilterText, filterTextRef] = UseInputMask()
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = useCallback((link) => {
    navigate(link);
  }, [navigate]);


  /* Constantes */

  const isNovoDepartamentoRoute = location.pathname.includes(jsonRoute.Configuracao_Geral_NovoDepartamento);
  if (isNovoDepartamentoRoute) {
    return <Outlet />;
  }

  const filteredData = tabelaDados.filter(item => {
    const matchesStatus = filterSelect ? item.status.toLowerCase() === filterSelect.toLowerCase() : true;
    const matchesName = filterText ? item.nome.toLowerCase().includes(filterText.toLowerCase()) : true;
    return matchesStatus && matchesName;
  });

  /* Funções */

  function handleRowClick(texto) {
    alert(texto)
  }

  return (
    <>
      <div className="header">
        <h1 className="title">Abre Departamento</h1>
        <h2 className="subtitle">Adicione, edite ou remova departamentos</h2>
      </div>
      <div className={styles.pesquisaEStatus}>
        <div>
          <div className={styles.label}><strong>Status</strong></div>
          <div>
            <InputPadrao
              type="select"
              options={status}
              value={filterSelect}
              inputRef={filterSelectRef}
              searchable={false}
              defaultSelect={true}
              onChange={setFilterSelect}
            />
          </div>
        </div>
        <div>
          <div className={styles.label}><strong>Nome</strong></div>
          <InputPadrao
            type='search'
            value={filterText}
            inputRef={filterTextRef}
            onChange={setFilterText}
          />
        </div>
      </div>
      <div className='container'>
        <TabelaPadrao
          tabelaId="departamentos-config"
          columns={tabelaColumns}
          data={filteredData}
          options={{
            additionalButtons: [{
              title: "Novo departamento",
              onClick: () => handleNavigate(`../${jsonRoute.Configuracao_Geral_Departamento}/${jsonRoute.Configuracao_Geral_NovoDepartamento}`),
              icon: "fa fa-file",
            }],
            cardsPerPage: 10,
            showPagination: true,
            showExport: true,
            fileName: "departamentos",
            showColumnsSelector: true,
            showSearch: true,
            toolbar: true,
            rowOnClick: () => { handleRowClick("Linha clicada") }
          }}
        />
      </div>
    </>
  )
}

export default Departamento
