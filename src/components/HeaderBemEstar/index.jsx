import { useContext, useState, useEffect, useRef, useCallback } from 'react'; 
import { useNavigate, useLocation } from 'react-router';
import { UsuarioContext, BackscreenContext, useLoader } from '../../context/index.jsx';
import { jsonRoute } from "../../utils/json.js";
import styles from './styles.module.css';
import headerLogo from '/svg/logo.svg';
import { useAtom } from 'jotai';
import { assinaturaListaAtom, assinaturaAtom, carrinhoAtom, showCarrinhoAtom, nomeAtom, tipoUsuarioAtom, fotoPerfilAtom, saldoDisponivelAtom, saldoPendenteAtom, tokenClienteAtom} from '../../context/jotai.jsx';
import Carrinho from '../HeaderPadrao/components/Carrinho.jsx';
import { getBaseConfig } from '../../utils/utilsConfig.js';

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
}) => {
  const [tipoUsuario] = useAtom(tipoUsuarioAtom);
  const [nome] = useAtom(nomeAtom);
  const [fotoPerfil] = useAtom(fotoPerfilAtom);

  return (
    <>
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
              fazerLogout(jsonRoute.BemEstar_Home);
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
        <li className={`${styles.headerMenuItem} ${styles.headerLoginButton}`} tabIndex="0" onClick={() => handleNavigate(jsonRoute.Cliente_Login)}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span></span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => document.getElementById("assinaturasSection").scrollIntoView() }>
          <span>Adquirir serviços</span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => document.getElementById("anuncioSection").scrollIntoView()}>
          <span>Como funciona</span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => document.getElementById("faqSection").scrollIntoView()}>
          <span>FAQ</span>
        </li>
        <li className={styles.headerMenuItem} tabIndex="0" onClick={() => document.getElementById("faqSection").scrollIntoView()}>
          <span>Contato</span>
        </li>
      </menu>
    </>
  );
};

export default function HeaderBemEstar() {
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
  const location = useLocation();
  const navigate = useNavigate();

  const { usuarioLogado } = useContext(UsuarioContext);
  const { handleLogout: contextLogout } = useContext(UsuarioContext);
  const { showBackscreen, hideBackscreen } = useContext(BackscreenContext);
  const { showLoader, hideLoader } = useLoader();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const {companyId} = getBaseConfig();

  const fazerLogout = (rotaDestino) => {
    showLoader();
    contextLogout(navigate, rotaDestino);
  };

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

  const MarcarAssinatura = useCallback((itemAssinatura) => {
    if(!itemAssinatura) return;
    showLoader(); 

    window.carregarDadosAssinatura = carregarDadosAssinatura;

    const params = {
      campo: '*',
      tabela: 'VW_SITE_DADOS_ASSINATURA',
      condicao: `TOKEN_PROPOSTA = '${itemAssinatura.token_proposta}' AND TOKEN_BENEF = '${itemAssinatura.id_benef}' AND CD_EMPRESA = '${companyId}'`,
    }

    carregarInfos('carregarDadosAssinatura', params, 'carregarDadosAssinatura');
  }, [
    companyId,
    carregarDadosAssinatura
  ]);
 
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <figure className={styles.headerImageField} >
            {['S', 'D'].includes(tipoUsuario) || !tipoUsuario || !usuarioLogado ? (
              <img 
                src={headerLogo} alt={`Logo Drhoje`}
                onClick={() => {
                  if(!['EEBD6B2601026E42', 'CB75F9A520A9E29F', '79AEF9EFBC10EB3B', '2A7ECCCBFDF86768'].includes(assinaturaSelecionada?.token_plano)) return
                  handleNavigate(jsonRoute.BemEstar_Home);
                }} 
              />
            ) : (
              <img 
                src={headerLogo} alt={`Logo Drhoje`}
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
            />
          ) : (
            <GuestUserMenu handleNavigate={handleNavigate} showLogin={showLogin} />
          )}
        </div>
      </header>

      {['S'].includes(tipoUsuario) && (
        <Carrinho isOpen={isCarrinhoOpen} closeCarrinho={closeCarrinho} />
      )}
    </>
  );
}