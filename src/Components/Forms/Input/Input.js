import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, label, type, value, setValue }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
