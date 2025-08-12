"use client";
import React from "react";
import styles from "./OverlayEditardados.module.css";

// Form field component for reusability
const ModalAdress = ({ label, value, id }) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.fieldLabel}>
        {label}
      </label>
      <div className={styles.textInput}>
        <input
          type="text"
          id={id}
          className={styles.txticon}
          defaultValue={value}
          aria-label={label}
        />
      </div>
    </div>
  );
};

// Header component for the overlay
const AddressFormHeader = ({ title, onClose }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.endereo}>{title}</h2>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Fechar"
      >
        close
      </button>
    </header>
  );
};

// Save button component
const SaveButton = ({ onClick }) => {
  return (
    <button className={styles.saveButton} onClick={onClick} type="submit">
      Salvar alterações
    </button>
  );
};

function OverlayEditardados() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const handleClose = () => {
    // Handle close logic here
    console.log("Overlay closed");
  };

  return (
    <section className={styles.overlayEditardados}>
      <AddressFormHeader title="Endereço" onClose={handleClose} />

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <AddressFormField label="CEP" value="09889-909" id="cep" />

          <AddressFormField
            label="Endereço"
            value="Avenida Paulista"
            id="endereco"
          />

          <AddressFormField
            label="Complemento"
            value="Apartamento 506"
            id="complemento"
          />

          <AddressFormField
            label="Bairro/Distrito"
            value="Bela Vista"
            id="bairro"
          />

          <AddressFormField label="Cidade" value="São Paulo" id="cidade" />

          <AddressFormField label="UF" value="SP" id="uf" />
        </div>

        <SaveButton onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default ModalAdress;
