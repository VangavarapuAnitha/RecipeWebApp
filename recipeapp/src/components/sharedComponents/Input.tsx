import React from "react";
import styles from "./input.module.css";
interface InputProps<T> {
  label: T;
  value: T;
  name: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: T;
}

// const Input: React.FC<InputProps<string>> = (props: InputProps<string>) => {
//   return (
//     <div className={styles.inputContainer}>
//       <label className={styles.label}>{props.label}</label>
//       <input
//         id={props.name}
//         name={props.name}
//         value={props.value}
//         onChange={props.onChange}
//         className={styles.input}
//       />
//       <p style={{ color: "red", marginTop: "0px" }}>{props.message}</p>
//     </div>
//   );
// };

const Input = <T extends string>(props: InputProps<T>) => {
  console.log(props);
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{String(props.label)}</label>
      <input
        id={props.name}
        name={String(props.name)}
        // value={JSON.stringify(props.value)}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      />
      {/* <p style={{ color: "red", marginTop: "0px" }}>{String(props.message)}</p> */}
      <p style={{ color: "red", marginTop: "0px" }}>{props.message}</p>
    </div>
  );
};
export default Input;

// export const InputNew = (props: InputProps<string>) => {
//   console.log(props);
//   return (
//     <div className={styles.inputContainer}>
//       <label className={styles.label}>{String(props.label)}</label>
//       <input
//         id={props.name}
//         name={props.name}
//         value={props.value}
//         onChange={props.onChange}
//         className={styles.input}
//       />
//       <p style={{ color: "red", marginTop: "0px" }}>{String(props.message)}</p>
//     </div>
//   );
// };
