import {useId} from "react";
import styles from "./CheckBox.module.css";

function CheckBox({
  value = "true",
  text,
  name,
  className,
  checked,
  ...restProps
}) {
  const id = useId();

  return (
    <label className={`${styles.checkbox} ${className}`} htmlFor={id}>
      <input
        type="checkbox"
        value={value}
        name={name}
        id={id}
        checked={checked}
        className={`checkboxInput ${styles.checkboxInput} ${className}`}
        {...restProps}
      />
      <span className={`${styles.checkMark}`}></span>
      <span className={styles.checkText}>{text}</span>
    </label>
  );
}

export default CheckBox;
