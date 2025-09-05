import TabelaPadrao from '../../../../components/TabelaPadrao'
import { InputPadrao, UseInputPadrao, UseInputMask } from '../../../../components/InputPadrao'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { jsonRoute } from '../../../../utils/json'
import { useCallback, useEffect, useState } from 'react'
import styles from './FuncaoUsuario.module.css'
import FuncaoUsuarioInfo from './components'



function FuncaoUsuario() {
  const [isMobile, setIsMobile] = useState(window.innerWidth<768);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [itemType, setItemType] = useState('');
  const [filterSelect,setFilterSelect,filterSelectRef] = UseInputMask();
  const [filterText,setFilterText, filterTextRef] = UseInputMask();
  const navigate = useNavigate();
  const location = useLocation();

  const status = [
    { value: "", label: "TODOS" },
    { value: "ativo", label: "ATIVO" },
    { value: "cancelado", label: "CANCELADO" },
    { value: "suspenso", label: "SUSPENSO" },
    { value: "inativo", label: "INATIVO" },
  ]

  const tabelaColumns = [
    {
      value: 'nome',
      name: 'Nome do Cargo',
      align: 'center',
      sortable: true,
    },
    {
      value: '  ',
      name: 'Status do Cargo',
      align: 'center',
      sortable: true
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

  const lista = [
    {label: "Descrição", value:""},
  ]

   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleNavigate = useCallback((link) => {
    navigate(link);
  }, [navigate]);


  const filteredData = tabelaDados.filter(item => {
    const matchesStatus = filterSelect ? item.status.toLowerCase() === filterSelect.toLowerCase() : true;
    const matchesName = filterText ? item.nome.toLowerCase().includes(filterText.toLowerCase()) : true;
    return matchesStatus && matchesName;
  });

  function handleRowClick(itemData, type){
    setItemSelecionado(itemData);
    setItemType(type);
    navigate(`${jsonRoute.Funcao_Usuario_Info}`);
  }

  const pathName = location.pathname.split('/');
  const pathNameLenght = pathName.length;
  const actualPath = pathName[pathNameLenght - 1];


  return(
    <>
    <div>
      {actualPath === 'funcao-usuario' && (
        <div className="header">
          <h1 className="title" > Usuario</h1>
          <h2 className='Subtitle'>Adicione, remova ou edite as funções do usuario </h2>
          <div>
            <div className={styles.PesquisaEStatus}>
              <div>
                <div className={styles.status}>
                  <UseInputPadrao
                    label="Status"
                    type="select"
                    options={status}
                    value={filterSelect}
                    inputRef={filterSelectRef}
                    searchable={false}
                    defaultSelect={false}
                    onChange={setFilterSelect}
                    width={isMobile ? 100 : 25}
                  />
                  <UseInputPadrao
                    label="Pesquisar"
                    type='select'
                    value={filterText}
                    searchable = {true}
                    defaultSelect = {false}
                    inputRef={filterTextRef}
                    onChange={setFilterText}
                    options={lista}
                    width={isMobile ? 100 : 75}
                  />           
                  <UseInputPadrao
                    label="Nome"
                    type='search'
                    value={filterText}
                    inputRef={filterTextRef}
                    onChange={setFilterText}
                    width={isMobile ? 100 : 75}
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <TabelaPadrao
                tabelaId="funcao-config"  
                columns={tabelaColumns}
                data={filteredData}
                options={{
                  additionalButtons: [{
                    title: "Nova Função Usuario",
                    onClick: ((item) => handleRowClick(item, 'nova')),
                    icon: "fa fa-file",
                  }],
                  cardsPerPage: 10,
                  showPagination: true,
                  showExport: true,
                  fileName: "FuncaoUsuario",
                  showColumnsSelector: true,
                  showSearch: false,
                  toolbar: true,
                  showToggleView: true,
                  rowOnClick: ((item) => handleRowClick(item, 'edicao'))
                }}
              />
            </div>
        </div>
      ) || actualPath === 'funcao-usuario-info' && itemSelecionado && itemType && (
        <FuncaoUsuarioInfo data={itemSelecionado} type={itemType}/>
      )}
      </div>
    </>
  )
}

export default FuncaoUsuario;