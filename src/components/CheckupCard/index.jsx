import React from "react";
import styles from "./CheckUpCard.module.css";

const CheckUpCard = () => {
  const descriptionCrianca = [
    "Glicose",
    "Colesterol Total",
    "Colesterol HDL",
    "Colesterol VLDL",
    "Colesterol LDL",
    "Triglicerídeos",
    "Perfil lipídico / lipidograma",
    "EAS (Urina Rotina)",
    "EPF (Parasitológico)",
    "Hemograma Completo",
    "Grupo Sanguíneo",
    "Fator RH"
  ];
  /*const descriptionHomem = [
    "Gama- glutamil transferase, dosagem",
    "Hemograma com contagem de plaquetas ou frações",
    "Glicose",
    "Creatina",
    "Uréia",
    "PSA Total",
    "Ácido úrico",
    "Colesterol Total",
    "Colesterol HDL",
    "Colesterol VLDL",
    "Colesterol LDL",
    "Triglicerídeos",
    "Perfil lipídico / lipidograma",
    "Transaminase oxalacética",
    "Transaminase pirúvica",
    "Rotina de Urina"
  ];
  const descriptionMulher = [
    "Gama- glutamil transferase, dosagem",
    "Hemograma com contagem de plaquetas",
    "Glicose",
    "Creatina",
    "Uréia",
    "Ferritina",
    "Colesterol Total",
    "Colesterol HDL",
    "Colesterol VLDL",
    "Colesterol LDL",
    "Triglicerídeos",
    "Perfil lipídico / lipidograma",
    "Transaminase oxalacética",
    "Transaminase pirúvica",
    "Tiroestimulante, hormônio TSH",
    "Rotina de Urina"
  ];*/
  return (
    <>
      <div className={styles.checkCard}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/079eb95abdd2d7843870f939e24c623dd6db1796b71c744d07e3bb455b2a1cf2?apiKey=5be68277a23a4af983dbbc2190a89c7a&" alt="Checkup provider logo" className={styles.checkLogo} />
        <div className={styles.contentWrapper}>
          <header className={styles.headerSection}>
            <h1 className={styles.title}>Check-up do Paciente</h1> {/* Substituir por Check-up da Criança depois */}
            <p className={styles.description}>
              A aquisição de check-ups é feita diretamente com os laboratórios
            </p>
          </header>
          <section className={styles.examDetails}>
            <div className={styles.examList}>
              <ul>
                {descriptionCrianca.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className={styles.price}>A partir de R$55,00</p>
              <p className={styles.priceNote}>
                (O valor será pago diretamente ao prestador.)
              </p>
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.bold}>Agende pelo telefone:</p>
              <p className={styles.phoneNumber}>(61) 3027-9000</p>
              <p className={styles.locationTitle}>Endereços:</p>
              <div>
                <p className={styles.branchName}>ASA NORTE</p>
                <p className={styles.branchNameChildren}>Endereço:</p>
                <p className={styles.branchNameChildren}>Conjunto Nacional</p>
                <p className={styles.branchNameChildren}>Sala 3056 (Torre Amarela)</p>
                <p className={styles.schedule}>
                  Horário de atendimento:
                  <br />
                  Segunda a sexta: 07h às 17h.
                  <br />
                  Sábado: 07h às 11h.
                </p>
              </div>
              <a href="https://labsantapaula.com.br/" className={styles.moreLocations}>Ver mais endereços</a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CheckUpCard;