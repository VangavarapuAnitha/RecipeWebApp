import React from "react";
import styles from "./input.module.css";
interface InputProps {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      />
      <p style={{ color: "red", marginTop: "0px" }}>{props.message}</p>
    </div>
  );
};
export default Input;
