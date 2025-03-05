import React from "react";
interface ButtonProps {
  label: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
};
export default Button;
