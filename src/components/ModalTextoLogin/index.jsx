import style from './styles.module.css';

const ModalTextoLogin = ({ onClose, title, text }) => {
    return (
        <div className={style.modalOverlay}>
            <div className={style.modal}>
                <div className={style.header}>
                    <h1 className={style.title}>{title}</h1>
                    <button
                        className={style.closeButton}
                        aria-label="Fechar"
                        onClick={onClose}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className={style.content}>
                    <p className={style.text}>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalTextoLogin;