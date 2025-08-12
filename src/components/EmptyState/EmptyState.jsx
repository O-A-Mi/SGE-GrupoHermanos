import styles from "./EmptyState.module.css";

function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles.popup}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e86fe1cf00e18648c0de877bf2b245749923cef0e9a8d98cf5cabb048d3c5eb0?apiKey=5be68277a23a4af983dbbc2190a89c7a&"
          className={styles.image}
          alt="Empty state illustration"
        />
        <div className={styles.message}>
          Você não tem consultas futuras agendadas
        </div>
      </div>
    </div>
  );
}

export default EmptyState;
