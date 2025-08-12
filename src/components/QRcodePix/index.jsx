import styles from './styles.module.css';
import toastMessage from "../../assets/toast-ui/toast.js";
import {QRCodeSVG} from 'qrcode.react';

const QRcodePix = ({ closeModal, src, titulo }) => {
  return (
    <div className={`${styles.modalContainer} ${styles.show}`}> 
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{titulo ? titulo : 'Pix'}</h4>
          <div className={styles.modalCloseButton}>
            <a onClick={() => closeModal()}><i className="fas fa-times"></i></a>
          </div>
        </div>
        <div className={styles.modalBody}>
          <QRCodeSVG value={src} size={250}/>
        </div>
        <button key={'qrPix'} onClick = {()=>{navigator.clipboard.writeText(src); toastMessage('Código Pix copiado!', 'info')}} className={styles.buttonCopiar}><i className={"fa fa-copy"}></i><span className={styles.actionButtonText}>Copiar código Pix</span></button>
      </div>
    </div>
  );
};

export default QRcodePix