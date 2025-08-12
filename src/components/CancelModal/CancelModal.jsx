import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CancelModal.module.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { link } from "../../mocks/links";

const CancelModal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.closeButton}>
        <FontAwesomeIcon className={styles.closeIcon} onClick={closeModal} icon={faClose}/>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3761be093e3d4992fb17160337d8d1e0151f0d8e13bd9557bccb38bd397dd564?apiKey=5be68277a23a4af983dbbc2190a89c7a&"
        className={styles.modalImage}
        alt="Cancel consultation illustration"
      />
      <h2 className={styles.modalTitle}>Reembolso e cancelamento</h2>
      <p className={styles.modalDescription}>
        Você pode pedir reembolso ou reagendar uma consulta até 48 horas antes
        da data de agendamento. Para pedir reembolso entre em contato com a
        nossa central de atendimento e para reagendar entre em contato com a
        clínica responsável.
      </p>
      <button className={styles.contactButton} onClick={() => window.open(link.whatsapp, '_blank')}>
        <span className={styles.contactIcon} aria-hidden="true">
           <FontAwesomeIcon className={styles.contactIcon} onClick={closeModal} icon={faWhatsapp}/>
        </span>
        <span className={styles.contactText}>
          Falar com a central de atendimento
        </span>
      </button>
    </div>
  );
};

export default CancelModal;
