import TabelaPadrao from '../../../../components/TabelaPadrao'
import { InputPadrao, UseInputMask } from '../../../../components/InputPadrao'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { jsonRoute } from '../../../../utils/json'
import { useCallback, useEffect, useState } from 'react'

const status = [
  { value: "", label: "TODOS" },
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


function FuncaoUsuario() {
  const[isMobile, setIsMobile] = useState(window.innerWidth<768);
  const[filterSelect,setFilterSelect,filterSelectRef] = UseInputMask();
  const[filterText,setFilterText, filterTextRef] = UseInputMask();
  const navigate= useNavigate();
  const location = useLocation();

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

  function handleRowClick(texto) {
    alert(texto)
  }

  return(
    <>
    <div>
      <div className="header">
        <h1 className="title" > Usuario</h1>
        <h2 className='Subtitle'>Adicione, remova ou edite as funções do usuario </h2>
      </div>
    </div>
    </>
  )
}

export default FuncaoUsuario;