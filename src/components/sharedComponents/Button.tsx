import React from "react";
import styles from "./button.module.css";
interface ButtonProps {
  label: string;
  onClick: () => void;
  type: "edit" | "add" | "delete";
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button
        className={`${styles.button} ${styles[props.type]}`}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
};
export default Button;
