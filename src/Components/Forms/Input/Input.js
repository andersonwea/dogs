import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, label, type, value, setValue }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Input;
