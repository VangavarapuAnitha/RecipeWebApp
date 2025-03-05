import React from "react";

interface InputProps {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
