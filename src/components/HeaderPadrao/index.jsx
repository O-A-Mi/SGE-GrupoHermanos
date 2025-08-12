import { useContext, useState, useEffect, useRef, useCallback } from 'react'; 
import { useNavigate, useLocation } from 'react-router';
import { UsuarioContext, BackscreenContext, useLoader, useBrand, useModal } from '../../context';
import { jsonRoute } from "../../utils/json.js";
import { getBaseConfig } from '../../utils/utilsConfig.js';
import styles from './styles.module.css';
import { useAtom } from 'jotai';
import { assinaturaListaAtom, assinaturaAtom, carrinhoAtom, showCarrinhoAtom, nomeAtom, saldoDisponivelAtom, saldoPendenteAtom, tipoUsuarioAtom, fotoPerfilAtom, tokenClienteAtom, cpfcnpjAtom } from '../../context/jotai';
import Carrinho from './components/Carrinho';
import { carregarInfos, carregarLinks } from '../../db/carregarGeral.jsx';
import toastMessage from '../../assets/toast-ui/toast.js';
import dialogMessage from '../../assets/dialog-ui/dialog.jsx';
import ModalAgendamento from '../../pages/AreaCliente/MinhaConta/ExamesConsultas/ModalAgendamento/index.jsx';

// Componente para o menu do usuário logado
const LoggedUserMenu = ({
  listaAssinaturas, 
  assinaturaSelecionada, 
  handleNavigate, 
  fazerLogout, 
  toggleSubMenu, 
  MarcarAssinatura,
  toggleMenu,
  toggleCarrinho,
  listaCarrinho,
  showCarrinho,
  menuRef,
  buttonRef,
  isMenuOpen,
  isSubMenuOpen,
  handleClickProntoAtendimento,
  permitidoPA,
  setPermitidoPA,
  setProdutosPA,
  produtosPA
}) => {
  const [tipoUsuario] = useAtom(tipoUsuarioAtom);
  const [nome] = useAtom(nomeAtom);
  const [fotoPerfil] = useAtom(fotoPerfilAtom);

  useEffect(() => {
    try {
      const produtos = JSON.parse(assinaturaSelecionada?.sub_produto || '[]');
      const produtosFiltrados = produtos.filter(produto => produto.modo_at === 'P');
      setProdutosPA(produtosFiltrados);
      setPermitidoPA(produtosFiltrados.length > 0);
    } catch (error) {
      console.error('Erro ao analisar sub_produto:', error);
      setProdutosPA([]);
      setPermitidoPA(false);
    }
  }, [assinaturaSelecionada]);

  return (
    <>
      {(['S', 'D'].includes(tipoUsuario) && permitidoPA) && (
        <nav className={styles.headerNavbar}>
          <li className={styles.headerNavbarItem}>
            <button 
              className={styles.headerNavbarButton} 
              onClick={handleClickProntoAtendimento}
            >
              <i className="fas fa-clock"></i>
              <span>
                {produtosPA.length !== 1
                  ? 'Pronto Atendimento Online'
                  : produtosPA[0]?.descricao || 'Pronto Atendimento Online'}
              </span>
            </button>
          </li>
        </nav>
      )}

      <input type="checkbox" className={styles.headerResponsiveBtn} id="header-responsive-btn" />
      <label 
        htmlFor="header-responsive-btn" 
        className={styles.headerResponsiveBtnLabel} 
        onClick={toggleMenu}
      >
        <i className={styles.barra}></i>
        <i className={styles.barra}></i>
        <i className={styles.barra}></i>
      </label>

      <menu
        className={`${styles.headerMenu} ${styles.logged} ${isMenuOpen ? styles.headerMenuActive : ''}`}
        id="header-menu"
        ref={menuRef}
        style={{ maxHeight: isSubMenuOpen ? '-webkit-fill-available' : '' }}
      >
        {['S', 'D'].includes(tipoUsuario) && (
          <>
            {isSubMenuOpen && (
              <ul className={styles.headerSubMenuContainer}>
                <li className={styles.closeSubMenu} tabIndex="0" onClick={toggleSubMenu}>
                  <span>Voltar</span>
                </li>

                <li className={styles.headerSubMenu}>
                  {listaAssinaturas.map((item) => (
                    <label
                      key={item.token_proposta}
                      className={`${styles.headerSubMenuItens} ${assinaturaSelecionada.token_proposta === item.token_proposta ? styles.active : ''}`}
                      onClick={() => MarcarAssinatura(item)}
                    >
                      <p className={styles.headerSubMenuItensText}>
                        {assinaturaSelecionada.token_proposta === item.token_proposta ? "Assinatura Selecionada" : "Selecionar Assinatura"}
                      </p>
                      <div className={styles.headerSubMenuItensBox}>
                        <p dangerouslySetInnerHTML={{ __html: `<span>${item.plano.replace('Saúde', 'Saúde <strong>') + '</strong>'} <br><sub>(${item.referencia})</sub></span>` }} style={{ gap: '0.35rem' }}></p>
                        <input
                          type="radio"
                          className={styles.headerSubMenuInput}
                          checked={assinaturaSelecionada.token_proposta === item.token_proposta}
                          readOnly
                        />
                      </div>
                    </label>
                  ))}
                </li>
              </ul>
            )}
            
            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Cliente_Area)}>
              <span>Minha conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
            
            <li className={styles.headerMenuItem} tabIndex="0" onClick={toggleSubMenu}>
              <span>Alterar assinatura</span>
              <i className="fas fa-chevron-right"></i>
            </li>

            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => {
              fazerLogout(jsonRoute.Cliente_Home);
            }}>
              <span>Sair da conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
          </>
        )}
        {['P'].includes(tipoUsuario) && (
          <>
            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Prestador_Area)}>
              <span>Minha conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
            
            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => {
              fazerLogout(jsonRoute.Prestador_Login);
            }}>
              <span>Sair da conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
          </>
        )}
        {['ENT'].includes(tipoUsuario) && (
          <>
            {isSubMenuOpen && (
              <ul className={styles.headerSubMenuContainer}>
                <li className={styles.closeSubMenu} tabIndex="0" onClick={toggleSubMenu}>
                  <span>Voltar</span>
                </li>

                <li className={styles.headerSubMenu}>
                  {listaAssinaturas.map((item) => (
                    <label
                      key={item.token_proposta}
                      className={`${styles.headerSubMenuItens} ${assinaturaSelecionada.token_proposta === item.token_proposta ? styles.active : ''}`}
                      onClick={() => MarcarAssinatura(item)}
                    >
                      <p className={styles.headerSubMenuItensText}>
                        {assinaturaSelecionada.token_proposta === item.token_proposta ? "Assinatura Selecionada" : "Selecionar Assinatura"}
                      </p>
                      <div className={styles.headerSubMenuItensBox}>
                        <p dangerouslySetInnerHTML={{ __html: `<span>${item.plano.replace('Saúde', 'Saúde <strong>') + '</strong>'} <br><sub>(${item.referencia})</sub></span>` }} style={{ gap: '0.35rem' }}></p>
                        <input
                          type="radio"
                          className={styles.headerSubMenuInput}
                          checked={assinaturaSelecionada.token_proposta === item.token_proposta}
                          readOnly
                        />
                      </div>
                    </label>
                  ))}
                </li>
              </ul>
            )}
            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Entidade_Area)}>
              <span>Minha conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
            
            <li className={styles.headerMenuItem} tabIndex="0" onClick={toggleSubMenu}>
              <span>Alterar assinatura</span>
              <i className="fas fa-chevron-right"></i>
            </li>

            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => {
              fazerLogout(jsonRoute.Entidade_Login);
            }}>
              <span>Sair da conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
          </>
        )}
        {['EMP'].includes(tipoUsuario) && (
          <>
            {isSubMenuOpen && (
              <ul className={styles.headerSubMenuContainer}>
                <li className={styles.closeSubMenu} tabIndex="0" onClick={toggleSubMenu}>
                  <span>Voltar</span>
                </li>

                <li className={styles.headerSubMenu}>
                  {listaAssinaturas.map((item) => (
                    <label
                      key={item.token_proposta}
                      className={`${styles.headerSubMenuItens} ${assinaturaSelecionada.token_proposta === item.token_proposta ? styles.active : ''}`}
                      onClick={() => MarcarAssinatura(item)}
                    >
                      <p className={styles.headerSubMenuItensText}>
                        {assinaturaSelecionada.token_proposta === item.token_proposta ? "Assinatura Selecionada" : "Selecionar Assinatura"}
                      </p>
                      <div className={styles.headerSubMenuItensBox}>
                        <p dangerouslySetInnerHTML={{ __html: `<span>${item.plano.replace('Saúde', 'Saúde <strong>') + '</strong>'} <br><sub>(${item.referencia})</sub></span>` }} style={{ gap: '0.35rem' }}></p>
                        <input
                          type="radio"
                          className={styles.headerSubMenuInput}
                          checked={assinaturaSelecionada.token_proposta === item.token_proposta}
                          readOnly
                        />
                      </div>
                    </label>
                  ))}
                </li>
              </ul>
            )}
            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Empresarial_Area)}>
              <span>Minha conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
            
            <li className={styles.headerMenuItem} tabIndex="0" onClick={toggleSubMenu}>
              <span>Alterar assinatura</span>
              <i className="fas fa-chevron-right"></i>
            </li>

            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => {
              fazerLogout(jsonRoute.Empresarial_Home);
            }}>
              <span>Sair da conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
          </>
        )}
        {['R'].includes(tipoUsuario) && (
          <>
            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Consultor_Area)}>
              <span>Minha conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
            
            <li className={styles.headerMenuItem} tabIndex="0" onClick={() => {
              fazerLogout(jsonRoute.Consultor_Login);
            }}>
              <span>Sair da conta</span>
              <i className="fas fa-chevron-right"></i>
            </li>
          </>
        )}
      </menu>

      <div className={styles.headerUserButtonMenu}>
        <li className={`${styles.headerUserButton} ${styles.headerUserMenuButton}`}>
          <button
            className={styles.headerMenuButton}
            id="header-user-button"
            onClick={toggleMenu}
            ref={buttonRef}
          >
            <img className={styles.profileImage} src={fotoPerfil} alt={nome} />
            <span>{nome}</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        </li>
        {showCarrinho && ['S'].includes(tipoUsuario) && (
          <li className={`${styles.headerUserButton} ${styles.headerShoppingButton}`}>
            <button className={styles.headerMenuButton} onClick={toggleCarrinho}>
              <i className="fas fa-cart-shopping"></i>
              {listaCarrinho.length > 0 && (
                <span className={styles.carrinhoCount}><strong>{listaCarrinho.length}</strong></span>
              )}
            </button>
          </li>
        )}
      </div>
    </>
  );
};

// Componente para o menu do usuário não logado
const GuestUserMenu = ({ handleNavigate, showLogin }) => {
  return (
    <>
      <input type="checkbox" className={styles.headerResponsiveBtn} id="header-responsive-btn" />
      <label htmlFor="header-responsive-btn" className={styles.headerResponsiveBtnLabel}>
        <i className={styles.barra}></i>
        <i className={styles.barra}></i>
        <i className={styles.barra}></i>
      </label>

      <menu className={styles.headerMenu}>
        {showLogin && <li 
          className={`${styles.headerMenuItem} ${styles.headerLoginButton}`} 
          tabIndex="0" 
          onClick={() => (location.pathname.includes(jsonRoute.Empresarial_Home) || location.pathname.includes(jsonRoute.Empresarial_VendaCadastro) || location.pathname.includes(jsonRoute.Empresarial_VendaPagamento) || location.pathname.includes(jsonRoute.Empresarial_VendaConfirmacao)) ? handleNavigate(jsonRoute.Empresarial_Login) : handleNavigate(jsonRoute.Cliente_Login)}
        >
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span></span>
        </li>}
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Cliente_Home)}>
          <span>Área do Cliente</span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Empresarial_Home)}>
          <span>Área da Empresa</span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Entidade_Login)}>
          <span>Área da Entidade</span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Prestador_Login)}>
          <span>Área do Prestador</span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Consultor_Login)}>
          <span>Área do Consultor</span>
        </li>
      </menu>
    </>
  );
};

export default function HeaderPadrao() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);
  const [assinaturaSelecionada, setAssinaturaSelecionada] = useAtom(assinaturaAtom);
  const [listaAssinaturas] = useAtom(assinaturaListaAtom);
  const [saldoDisponivel, setSaldoDisponivel] = useAtom(saldoDisponivelAtom);
  const [saldoPendente, setSaldoPendente] = useAtom(saldoPendenteAtom);
  const [nome, setNome] = useAtom(nomeAtom);
  const [tokenCliente, setTokenCliente] = useAtom(tokenClienteAtom);
  const [tipoUsuario, setTipoUsuario] = useAtom(tipoUsuarioAtom);
  const [listaCarrinho] = useAtom(carrinhoAtom);
  const [showCarrinho] = useAtom(showCarrinhoAtom);
  const [showLogin, setShowLogin] = useState(true);
  const [produtosPA, setProdutosPA] = useState([]);
  const [permitidoPA, setPermitidoPA] = useState(false);
  const [produtosAG, setProdutosAG] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { assets, brandName } = useBrand();
  const { usuarioLogado } = useContext(UsuarioContext);
  const { handleLogout: contextLogout } = useContext(UsuarioContext);
  const { openModal, closeModal, isModalOpen, modalContent } = useModal();
  const { showBackscreen, hideBackscreen } = useContext(BackscreenContext);
  const { showLoader, hideLoader } = useLoader();
  const [cpf] = useAtom(cpfcnpjAtom);
  const {baselink, endpoints} = getBaseConfig();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const {companyId} = getBaseConfig();

  const fazerLogout = (rotaDestino) => {
    showLoader();
    contextLogout(navigate, rotaDestino);
  };

  useEffect(() => {
    if (!usuarioLogado) {
      setIsMenuOpen(false);
      setIsSubMenuOpen(false);
    }
  }, [usuarioLogado]);

  const handleMenuPosition = useCallback(() => {
    if (!menuRef.current || !buttonRef.current) return;
    
    if (window.innerWidth >= 768) {
      const ButtonReferencia = buttonRef.current.getBoundingClientRect();
      menuRef.current.style.top = `${ButtonReferencia.top + ButtonReferencia.height}px`;
      menuRef.current.style.right = `${window.innerWidth - ButtonReferencia.right}px`;
    } else {
      menuRef.current.style.top = 'calc(var(--header-height) + 1px)';
      menuRef.current.style.right = '0px';
    }
  }, []);

  const toggleMenu = useCallback(() => {
    handleMenuPosition();
    setIsMenuOpen(prev => !prev);
  }, [handleMenuPosition]);

  const toggleCarrinho = useCallback(() => {
    setIsCarrinhoOpen(true);
    showBackscreen();
  }, [showBackscreen]);

  const closeCarrinho = useCallback(() => {
    setIsCarrinhoOpen(false);
    hideBackscreen();
  }, [hideBackscreen]);

  const toggleSubMenu = useCallback(() => {
    const event = new Event("resize");
    window.dispatchEvent(event);

    document.querySelectorAll(`.${styles.headerMenuItem}`).forEach((item) => {
      item.classList.toggle(styles.menuHidden);
    });
    setIsSubMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (usuarioLogado && listaAssinaturas && listaAssinaturas.length > 0 && ['S', 'D', 'ENT', 'EMP'].includes(tipoUsuario)) {
      const assinaturaLocal = JSON.parse(localStorage.getItem('assinaturaSelecionada'));

      if (assinaturaLocal) {
        const assinaturaEncontrada = listaAssinaturas.find(assinatura => assinatura.token_proposta === assinaturaLocal.token_proposta)
        MarcarAssinatura(assinaturaEncontrada || listaAssinaturas[0]);
      } else {
        MarcarAssinatura(listaAssinaturas[0]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuarioLogado, listaAssinaturas]);

  useEffect(() => {
    let timeOutFunctionId;
    const resizeHandler = () => {
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(handleMenuPosition, 500);
    };

    window.addEventListener("resize", resizeHandler);

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.headerSubMenuContainer}`)
      ) {
        setIsMenuOpen(false);
        setIsSubMenuOpen(false);
        document.querySelectorAll(`.${styles.headerMenuItem}`).forEach((item) => {
          if (item.classList.contains(styles.menuHidden)) {
            item.classList.remove(styles.menuHidden);
          }
        });
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, handleMenuPosition]);

  useEffect(() => {
    setIsMenuOpen(false);
    const headerBtn = document.getElementById("header-responsive-btn");
    if (headerBtn) headerBtn.checked = false;
    
    setTimeout(() => {
      const root = document.getElementById('root');
      if (root) root.scrollTo(0, 0);
    });

    if(location.pathname.toLowerCase().includes('login')){
      setShowLogin(false);
    } else{
      setShowLogin(true);
    }
  }, [location]);

  const handleNavigate = useCallback((link, options) => {
    showLoader();
     
    const headerBtn = document.getElementById("header-responsive-btn");
    if (headerBtn && headerBtn.checked) {
        headerBtn.checked = false;
        setIsMenuOpen(false);
    }
    if (isSubMenuOpen) {
        toggleSubMenu();
    }

    navigate(link, options);
  }, [navigate, isSubMenuOpen, toggleSubMenu, setIsMenuOpen]);

  
  const carregarDadosAssinatura = useCallback((dados) => {
    let resp = JSON.parse(dados)[0];
    const index = listaAssinaturas.find(e => e.token_proposta === resp.token_proposta);

    if (!index) {
      return; 
    }
    
    const assinatura = {...index, ...resp};
    setSaldoDisponivel(assinatura.saldo_disponivel);
    setSaldoPendente(assinatura.saldo_pendente);
    setTipoUsuario(assinatura.tipo_benef);
    setTokenCliente(assinatura.id_cliente);
    setAssinaturaSelecionada(assinatura);
    if(!location.pathname.includes([jsonRoute.Cliente_Area, jsonRoute.Entidade_Area, jsonRoute.Consultor_Area, jsonRoute.Prestador_Area, jsonRoute.Empresarial_Area])){
      hideLoader();
    }
  }, [
    listaAssinaturas,
    setAssinaturaSelecionada,
    setNome,
    setSaldoDisponivel,
    setSaldoPendente,
    setTipoUsuario,
    setTokenCliente,
    location.pathname,
    handleNavigate
  ]);

  const carregarDadosAssinaturaPME = useCallback((dados) => {
    let resp = JSON.parse(dados)[0];
    const index = listaAssinaturas.find(e => e.token_proposta === resp.token_proposta);

    if (!index) {
      return; 
    }
    
    const assinatura = {...index, ...resp};
    setTokenCliente(assinatura.token_cliente);
    setAssinaturaSelecionada(assinatura);
    if(!location.pathname.includes([jsonRoute.Cliente_Area, jsonRoute.Entidade_Area, jsonRoute.Consultor_Area, jsonRoute.Prestador_Area, jsonRoute.Empresarial_Area])){
      hideLoader();
    }
  }, [
    listaAssinaturas,
    setAssinaturaSelecionada,
    setNome,
    setTokenCliente
  ]);

  const MarcarAssinatura = useCallback((itemAssinatura) => {
    if(!itemAssinatura) return;
    showLoader(); 

    window.carregarDadosAssinatura = carregarDadosAssinatura;
    window.carregarDadosAssinaturaPME = carregarDadosAssinaturaPME;

    if(['S', 'D'].includes(tipoUsuario)){
      const params = {
        campo: '*',
        tabela: 'VW_SITE_DADOS_ASSINATURA',
        condicao: `TOKEN_PROPOSTA = '${itemAssinatura.token_proposta}' AND TOKEN_BENEF = '${itemAssinatura.id_benef}' AND CD_EMPRESA = '${companyId}'`,
      }

      carregarInfos('carregarDadosAssinatura', params, 'carregarDadosAssinatura');
    } else if(['ENT', 'EMP'].includes(tipoUsuario)) {
      const params = {
        campo: '*',
        tabela: 'VW_SITE_DADOS_ASSINATURA_PME',
        condicao: `TOKEN_PROPOSTA = '${itemAssinatura.token_proposta}' AND CD_EMPRESA = '${companyId}'`,
      }

      carregarInfos('carregarDadosAssinaturaPME', params, 'carregarDadosAssinaturaPME');
    }
  }, [
    companyId,
    carregarDadosAssinatura,
    carregarDadosAssinaturaPME
  ]);

  useEffect(() => {
    window.retornoTelemedicina = retornoTelemedicina;
    return () => {
      delete window.retornoTelemedicina;
    };
  }, []);

  useEffect(() => {
    try {
      const produtos = JSON.parse(assinaturaSelecionada?.sub_produto || '[]');
      const produtosPAfiltrados = produtos.filter(produto => produto.modo_at === 'P');
      const produtosAGfiltrados = produtos.filter(produto => produto.modo_at === 'A');
      setPermitidoPA(produtosPAfiltrados.length > 0);
      setProdutosPA(produtosPAfiltrados);
      setProdutosAG(produtosAGfiltrados);
    } catch (error) {
      console.error('Erro ao analisar sub_produto:', error);
      setPermitidoPA(false);
      setProdutosPA([]);
      setProdutosAG([]);
    }
  }, [assinaturaSelecionada]);

  const handleClickProntoAtendimento = () => {
    if (produtosPA.length === 1) {
      consultarTelemedicina(produtosPA[0].cod_externo);
    } else if (produtosPA.length > 1) {
      openModal("modalProdutosPA");
    }
  };

  const consultarTelemedicina = (codexternoSelecionado) => {
    showLoader();
    const paramsTelemedicina = {
      idcontratante: tokenCliente,
      idcontrato: assinaturaSelecionada.token_proposta,
      cpf: cpf,
      tipobeneficiario: tipoUsuario,
      codigo_consulta: codexternoSelecionado
    };

    carregarLinks('telemedicina', `${baselink}${endpoints.consultarTelemedicina}`, paramsTelemedicina, 'retornoTelemedicina');
  };

  const retornoTelemedicina = (retorno) => {
    try {
      const resp = JSON.parse(retorno);

      if (resp.link) {
        toastMessage('Redirecionando para Telemedicina', 'success');
        window.open(resp.link, '_blank');
      } else {
        dialogMessage(resp.mensagem || 'Não foi possível redirecionar para Telemedicina', 'warning', { confirmButton: false });
      }
    } catch (error) {
      console.error("Erro ao parsear resposta de telemedicina:", error);
      dialogMessage("Erro ao carregar dados da telemedicina.", "error", { confirmButton: false });
    } finally {
      hideLoader();
    }
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <figure className={styles.headerImageField} >
            {['S', 'D'].includes(tipoUsuario) || !tipoUsuario || !usuarioLogado ? (
              <img 
                src={assets.logo} alt={`Logo ${brandName}`}
                onClick={() => {
                  if(!['EEBD6B2601026E42', 'CB75F9A520A9E29F', '79AEF9EFBC10EB3B', '2A7ECCCBFDF86768'].includes(assinaturaSelecionada?.token_plano)) return
                  if(location.pathname.toLowerCase().includes('empresa')){
                    handleNavigate(jsonRoute.Empresarial_Home);
                  } else{
                    handleNavigate(jsonRoute.Cliente_Home);
                  }
                }} 
              />
            ) : ['EMP'].includes(tipoUsuario) ? (
              <img 
                src={assets.logo} alt={`Logo ${brandName}`}
                onClick={() => handleNavigate(jsonRoute.Empresarial_Home)}
              />
            ) : (
              <img 
                src={assets.logo} alt={`Logo ${brandName}`}
              />
            )}
          </figure>
          
          {usuarioLogado ? (
            <LoggedUserMenu
              listaAssinaturas={listaAssinaturas}
              assinaturaSelecionada={assinaturaSelecionada}
              nome={nome}
              handleNavigate={handleNavigate}
              fazerLogout={fazerLogout}
              toggleSubMenu={toggleSubMenu}
              MarcarAssinatura={MarcarAssinatura}
              toggleMenu={toggleMenu}
              toggleCarrinho={toggleCarrinho}
              listaCarrinho={listaCarrinho}
              showCarrinho={showCarrinho}
              menuRef={menuRef}
              buttonRef={buttonRef}
              isMenuOpen={isMenuOpen}
              isSubMenuOpen={isSubMenuOpen}
              showLoader={showLoader}
              hideLoader={hideLoader}
              handleClickProntoAtendimento={handleClickProntoAtendimento}
              setProdutosPA={setProdutosPA}
              produtosPA={produtosPA}
              setPermitidoPA={setPermitidoPA}
              permitidoPA={permitidoPA}
            />
          ) : (
            <GuestUserMenu handleNavigate={handleNavigate} showLogin={showLogin} />
          )}
        </div>
      </header>

      {['S'].includes(tipoUsuario) && (
        <Carrinho isOpen={isCarrinhoOpen} closeCarrinho={closeCarrinho} />
      )}
      {isModalOpen("modalProdutosPA") && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Escolha um produto para o atendimento:</h2>
            </div>
            <div className={styles.modalBody}>
              {produtosPA.map((produto, index) => (
                <li key={index} className={styles.modalItem}>
                  <button 
                    onClick={() => {
                      closeModal("modalProdutosPA");
                      consultarTelemedicina(produto.cod_externo);
                    }}
                    className={styles.modalButton}
                  >
                    {produto.descricao}
                  </button>
                </li>
              ))}
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.backButton} onClick={() => closeModal("modalProdutosPA")}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen("modalProdutosAG") && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Escolha um produto para o atendimento:</h2>
            </div>
            <div className={styles.modalBody}>
              {produtosAG.map((produto, index) => (
                <li key={index} className={styles.modalItem}>
                  <button 
                    onClick={() => {
                      closeModal("modalProdutosAG");
                      openModal("modalAgendamentoProduto", {produto: produto});
                    }}
                    className={styles.modalButton}
                  >
                    {produto.descricao}
                  </button>
                </li>
              ))}
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.backButton} onClick={() => closeModal("modalProdutosAG")}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen("modalAgendamentoProduto") && (
        <ModalAgendamento
          closeModal={() => closeModal("modalAgendamentoProduto")}
          produto={modalContent.produto}
        />
      )}
    </>
  );
}