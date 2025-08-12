"use client";

import React from "react";
import styles from "./InputDesign.module.css";

const FormGroup = ({ label, value, type, editable = false, onChange }) => {
  return (
    <div className={styles.formGroup}>
      <label
        className={styles.label}
        htmlFor={editable ? label.toLowerCase() : undefined}
      >
        {label}
      </label>

      {editable ? (
        <input
          type={type}
          id={label.toLowerCase()}
          value={value}
          onChange={onChange}
          className={styles.input}
          aria-label={label}
        />
      ) : (
        <p className={styles.value}>{value}</p>
      )}
    </div>
  );
};

export default FormGroup;
