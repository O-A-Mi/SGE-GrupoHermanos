import styles from './styles.module.css';

export default function ModalText ({closeModal, title, text}) {
    return (
        <div className={styles.modalTextContainer}>
            <div className={styles.modalText}>
                <div className={styles.modalTextHeader}>
                    <h1 className={styles.modalTextTitle}>{title}</h1>
                    <button className={styles.closeButton} onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className={styles.modalTextContent}>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
        </div>
    )
};