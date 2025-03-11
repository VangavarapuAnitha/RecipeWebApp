import React from "react";
import styles from "./button.module.css";
interface ButtonProps {
  label: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.onClick} className={styles.button}>
        {props.label}
      </button>
    </div>
  );
};
export default Button;
