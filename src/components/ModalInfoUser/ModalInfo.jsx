"use client";

import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import CloseButton from "./CloseButton";
import FormGroup from "./FormGroup";

function ModalInfo() {
  const [email, setEmail] = useState("joaodasnevesk@gmail.com");
  const [cellphone, setCellphone] = useState("11 9999-9999");
  const [phone, setPhone] = useState("11 59999-9999");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCellphoneChange = (e) => setCellphone(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleClose = () => {
    console.log("Close button clicked");
    // Implement close functionality here
  };

  const handleSave = () => {
    console.log("Saving changes:", { email, cellphone, phone });
    // Implement save functionality here
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <section className={styles.identificationInfo}>
        <header className={styles.header}>
          <h2 className={styles.title}>Informações de identificação</h2>
          <CloseButton onClick={handleClose} />
        </header>

        <form className={styles.formContent}>
          <FormGroup label="Nome" value="João das Neves" />

          <FormGroup label="CPF" value="123.456.789-10" />

          <FormGroup label="Gênero" value="Masculino" />

          <FormGroup label="Data de nascimento" value="16/01/1990" />

          <FormGroup
            label="E-mail"
            value={email}
            type="email"
            editable={true}
            onChange={handleEmailChange}
          />

          <FormGroup
            label="Celular"
            value={cellphone}
            type="tel"
            editable={true}
            onChange={handleCellphoneChange}
          />

          <FormGroup
            label="Telefone"
            value={phone}
            type="tel"
            editable={true}
            onChange={handlePhoneChange}
          />

          <button
            type="button"
            className={styles.saveButton}
            onClick={handleSave}
          >
            Salvar alterações
          </button>
        </form>
      </section>
    </>
  );
}

export default ModalInfo;
