// LoadingSpinner.jsx
import React from "react";
import styles from "./loadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
