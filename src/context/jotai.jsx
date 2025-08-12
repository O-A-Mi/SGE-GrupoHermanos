import { atom  } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { atomWithStorage, createJSONStorage  } from 'jotai/utils'

export const defaultUserInfo = {
  id_usuario: "", // token do usuario logado
  token_cliente:"", // token do estipulante do S ou D logado
  tipo_usuario: "", // tipo do usuario logado S, D, P, E, R
  cpfcnpj: "", // cpf ou cnpj do usuario
  login: "", // login do usuario
  nome: "", // nome do usuario
  assinatura: [], // area do cliente
  saldo_disponivel: "", // area do cliente
  saldo_pendente: "", // area do cliente
  token_entidade:"", // substituir pelo id_usuario quando possivel
  sessao_id: "",
  fotoperfil: "https://sistema.hermanosti.com/clubedebeneficio/img/profile_placeholder.png",
  permissao: [], 
  permissoesFormatadas: {},
};

export const userInfoAtom = atomWithStorage(
  "userInfo",
  defaultUserInfo,
  createJSONStorage(() => sessionStorage)
);

export const idAtom = focusAtom(userInfoAtom, (optic) => optic.prop('id_usuario'));
export const tokenClienteAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_cliente'));
export const tipoUsuarioAtom = focusAtom(userInfoAtom, (optic) => optic.prop('tipo_usuario'));
export const cpfcnpjAtom = focusAtom(userInfoAtom, (optic) => optic.prop('cpfcnpj'));
export const loginAtom = focusAtom(userInfoAtom, (optic) => optic.prop('login'));
export const nomeAtom = focusAtom(userInfoAtom, (optic) => optic.prop('nome'));
export const assinaturaListaAtom = focusAtom(userInfoAtom, (optic) => optic.prop('assinatura'));
export const saldoDisponivelAtom = focusAtom(userInfoAtom, (optic) => optic.prop('saldo_disponivel'));
export const saldoPendenteAtom = focusAtom(userInfoAtom, (optic) => optic.prop('saldo_pendente'));
export const tokenEntidadeAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_entidade'));
export const fotoPerfilAtom = focusAtom(userInfoAtom, (optic) => optic.prop('fotoperfil'));
export const permissoesAtom = focusAtom(userInfoAtom, (optic) => optic.prop('permissao'));
export const permissoesFormatadasAtom = focusAtom(userInfoAtom, (optic) => optic.prop('permissoesFormatadas'));

export const dadosClienteAtom = atomWithStorage(
  "dadosCliente",
  {},
  createJSONStorage(() => localStorage)
);

export const defaultAssinatura = {
  id: "",
  tipo_benef: "",
  token_benef: "",
  token_proposta: "",
  token_combo: "",
  plano: "",
  valor: "",
  cor: "",
  forma_pagamento: "",
  periodicidade_pagamento: ""
}

export const assinaturaAtom = atomWithStorage(
  "assinaturaSelecionada",
  defaultAssinatura,
  createJSONStorage(() => localStorage)
);

export const permissoesOrdemAtom = atom({
  AREA_CLIENTE_ROOT: "1",
  AREA_CLIENTE_CARTEIRINHA: "1.01",
  AREA_CLIENTE_COMPRA: "1.02",
  AREA_CLIENTE_COMPRA_RESUMO: "1.02.1",
  AREA_CLIENTE_COMPRA_PAGAMENTO: "1.02.2",
  AREA_CLIENTE_COMPRA_CONFIRMACAO: "1.02.3",
  AREA_CLIENTE_ASSINATURA: "1.03",
  AREA_CLIENTE_DADOS_CONTA: "1.04",
  AREA_CLIENTE_HISTORICO_USO: "1.05",
  AREA_CLIENTE_DADOS_COBRANCA: "1.06",
  // -------------------------------- //
  AREA_EMPRESA_ROOT: "2",
  AREA_EMPRESA_EMPRESA: "2.01",
  AREA_EMPRESA_MOVIMENTACOES: "2.02",
  AREA_EMPRESA_BENEFICIARIOS: "2.03",
  AREA_EMPRESA_CONSULTAS: "2.04",
  AREA_EMPRESA_COMPRAS: "2.05",
  AREA_EMPRESA_USUARIOS: "2.06",
  AREA_EMPRESA_RELATORIOS: "2.07",
  // -------------------------------- //
  AREA_ENTIDADE_ROOT: "3",
  AREA_ENTIDADE_EMPRESA: "3.01",
  AREA_ENTIDADE_MOVIMENTACOES: "3.02",
  AREA_ENTIDADE_BENEFICIARIOS: "3.03",
  AREA_ENTIDADE_CONSULTAS: "3.04",
  AREA_ENTIDADE_COMPRAS: "3.05",
  AREA_ENTIDADE_USUARIOS: "3.06",
  AREA_ENTIDADE_RELATORIOS: "3.07",
  // -------------------------------- //
  AREA_PRESTADOR_ROOT: "4",
  AREA_PRESTADOR_TOKEN: "4.01",
  AREA_PRESTADOR_PACIENTES: "4.02",
  AREA_PRESTADOR_ATENDIMENTO: "4.03",
  AREA_PRESTADOR_LOTES: "4.04",
  AREA_PRESTADOR_DADOS_CONTA: "4.05",
  // -------------------------------- //
  AREA_CONSULTOR_ROOT: "5",
  AREA_CONSULTOR_DADOS_CONTA: "5.01",
  AREA_CONSULTOR_EQUIPE_VENDAS: "5.02",
  AREA_CONSULTOR_ACOMPANHAMENTO: "5.03",
  AREA_CONSULTOR_MATERIAL_APOIO: "5.04",
});

export const clienteCadastroAtom = atom({
  nome:'',
  cpf: '',
  email: '',
  genero: '',
  dataNascimento: '',
  celular: '',
  telefone: '',
  cep: '',
  cnpj: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  pais: ''
});

export const adesaoCad = atom({
  nome:'',
  cpf: '',
  email: '',
  genero: '',
  dataNascimento: '',
  celular: '',
  telefone: '',
  cep: '',
  cnpj: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  pais: ''
});

export const carrinhoAtom = atom([]);
export const showCarrinhoAtom = atom(true);

export const comprovanteAbertoAtom = atom(false)
export const compraAbertaAtom = atom(false)