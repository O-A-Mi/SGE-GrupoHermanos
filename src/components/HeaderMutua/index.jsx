import { useContext, useState, useEffect, useRef, useCallback } from 'react'; 
import { useNavigate, useLocation } from 'react-router';
import { UsuarioContext, BackscreenContext, useLoader } from '../../context/index.jsx';
import { jsonRoute } from "../../utils/json.js";
import styles from './styles.module.css';
import headerLogo from '/svg/logo.svg';
import headerMutua from '/img/home_mutua/logo.png';
import { useAtom } from 'jotai';
import { tipoUsuarioAtom} from '../../context/jotai.jsx';

export default function HeaderBemEstar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useAtom(tipoUsuarioAtom);
  const [showLogin, setShowLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const { usuarioLogado } = useContext(UsuarioContext);
  const { handleLogout: contextLogout } = useContext(UsuarioContext);
  const { showBackscreen, hideBackscreen } = useContext(BackscreenContext);
  const { showLoader, hideLoader } = useLoader();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);


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

  
 
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogoContainer}>
            <figure className={styles.headerImageField}>
              {['S', 'D'].includes(tipoUsuario) || !tipoUsuario || !usuarioLogado ? (
                <img 
                  src={headerLogo} 
                  alt="DrHoje" 
                  onClick={() => handleNavigate(jsonRoute.Cliente_Home)} 
                />
              ) : ['EMP', 'ENT'].includes(tipoUsuario) ? (
                <img 
                  src={headerLogo} 
                  alt="DrHoje" 
                  onClick={() => handleNavigate(jsonRoute.Empresarial_Home)}
                />
              ) : (
                <img 
                  src={headerLogo} 
                  alt="DrHoje" 
                />
              )}
            </figure>
          </div>
         
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
                <span>Faça sua assinatura</span>
              </li>
              
            </menu>
          </>
        </div>
      </header>

      
    </>
  );
}