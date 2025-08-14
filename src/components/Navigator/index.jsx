import styles from './Navigator.module.css';
import { Link } from 'react-router';

const Navigator = () => {
    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navBarHome}>
                    <Link to="/" className={styles.navLink}>
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </div>
                <div className={styles.navBarOptions}>
                    <Link to="/configuracao/geral/status" className={styles.navLink}>
                        <i className="fa-solid fa-gear"></i><p>Status</p>
                    </Link>
                    <Link to="/configuracao/geral/perguntas-respostas" className={styles.navLink}>
                        <i className="fa-solid fa-gear"></i><p>Perguntas e Respostas</p>
                    </Link>
                    <Link to="/configuracao/geral/departamento" className={styles.navLink}>
                        <i className="fa-solid fa-gear"></i><p>Departamento</p>
                    </Link>
                </div>

                <div>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </>
    );
}

export default Navigator;
