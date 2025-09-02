import { useState, useEffect } from "react";
import styles from "./Navigator.module.css";
import { Link } from "react-router";
import img from "./logo_moviecom.png";

const Navigator = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sideBarOpen, setSideBarOpen] = useState({
    sidebar: false,
    configuracoes: false,
    geral: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = (menu) => {
    if (menu == "close") {
      return setSideBarOpen({
        sidebar: false,
        configuracoes: false,
        geral: false,
      });
    } else {
      setSideBarOpen((prevState) => ({
        ...prevState,
        [menu]: !prevState[menu],
      }));
    }
  };

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navBarContent}>
          <div className={styles.navBarHome}>
            <Link to="/" className={styles.navLink}>
              <img src={img} style={{ width: "150px" }} />
            </Link>
          </div>
          {!isMobile ? (
            <div className={styles.navBarOptions}>
              <Link to="/configuracao/geral/status" className={styles.navLink}>
                <i className="fa-solid fa-gear"></i>
                <p>Status</p>
              </Link>
              <Link
                to="/configuracao/geral/perguntas-respostas"
                className={styles.navLink}
              >
                <i className="fa-solid fa-gear"></i>
                <p>Perguntas e Respostas</p>
              </Link>
              <Link
                to="/configuracao/geral/departamento"
                className={styles.navLink}
              >
                <i className="fa-solid fa-gear"></i>
                <p>Departamento</p>
              </Link>
              <Link
                to="/configuracao/geral/abre-botoes-formulario"
                className={styles.navLink}
              >
                <i className="fa-solid fa-gear"></i>
                <p>Abre Botões de Formulários</p>
              </Link>
            </div>
          ) : (
            <div className={styles.navBarOptions}>
              <button
                className={styles.navHamburger}
                onClick={() => toggleMenu("sidebar")}
              >
                <i className="fa-solid fa-bars"></i>
              </button>

              <div
                className={`${styles.sideBar} ${
                  sideBarOpen.sidebar ? " " + styles.open : ""
                }`}
              >
                <div className={styles.sideMenu}>
                  <div className={styles.sideBarClose}>
                    <button
                      className={styles.sideBarCloseButton}
                      onClick={() => toggleMenu("close")}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <button
                    className={styles.sideMenuOpen}
                    onClick={() => toggleMenu("configuracoes")}
                  >
                    <p>Configurações</p>
                    <i className="fa-solid fa-gear"></i>
                  </button>

                  <div
                    className={`${styles.sideMenuContent} ${
                      sideBarOpen.configuracoes ? styles.open : ""
                    }`}
                  >
                    <button
                      className={styles.sideOptionOpen}
                      onClick={() => toggleMenu("geral")}
                    >
                      <p>Geral</p>
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    <div
                      className={`${styles.sideSubMenuContent} ${
                        sideBarOpen.geral ? styles.open : ""
                      }`}
                    >
                      <div>
                        <Link
                          className={styles.sideOption}
                          to="/configuracao/geral/status"
                        >
                          <p>Status</p>
                        </Link>
                      </div>
                      <div>
                        <Link
                          className={styles.sideOption}
                          to="/configuracao/geral/perguntas-respostas"
                        >
                          <p>Perguntas e Respostas</p>
                        </Link>
                      </div>
                      <div>
                        <Link
                          className={styles.sideOption}
                          to="/configuracao/geral/departamento"
                        >
                          <p>Departamento</p>
                        </Link>
                      </div>
                      <div>
                        <Link
                          className={styles.sideOption}
                          to="/configuracao/geral/abre-botoes-formulario"
                        >
                          <p>Abre Botões de Formulários</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigator;
