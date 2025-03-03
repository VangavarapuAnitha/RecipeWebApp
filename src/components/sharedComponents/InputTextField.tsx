import React from "react";
import styles from "./inputTextField.module.css";

interface InputField {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextField: React.FC<InputField> = (props) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      />
    </div>
  );
};
export default InputTextField;
