import {useId} from "react";
import styles from "./CheckBox.module.css";

function CheckBox({
  value = "true", 
  text, 
  name,
  labelClassName,
  inputClassName,
  checked,
  ...restProps
}) {
  const id = useId();

  return (
    <label className={`${styles.checkbox} ${labelClassName}`} htmlFor={id}>
      <input
        type="checkbox"
        value={value}
        name={name}
        id={id}
        checked={checked}
        className={`checkboxInput ${styles.checkboxInput} ${inputClassName}`}
        {...restProps}
      />
      <span className={`${styles.checkMark}`}></span>
      <span className={styles.checkText}>{text}</span>
    </label>
  );
}

export default CheckBox;
