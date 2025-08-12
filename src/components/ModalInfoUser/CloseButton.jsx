"use client";

import React from "react";
import styles from "./InputDesign.module.css";

const CloseButton = ({ onClick }) => {
  return (
    <button className={styles.closeButton} onClick={onClick} aria-label="Close">
      <span className={styles.i}>✕</span>
    </button>
  );
};

export default CloseButton;
