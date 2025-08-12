/* eslint-disable react/prop-types */
import styles from "../styles.module.css";

export default function ModalInfo({ onClose }) {

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Selecione uma opção para fazer login:</h2>
          <button className={styles.backButton} onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.confirmButton} >
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Fazer Login
          </button>

          <button className={styles.confirmButton} >
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Login Dependente
          </button>
        </div>
      </div>
    </div>
  );
}
