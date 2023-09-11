import {useId} from "react";

function CheckboxButton({
  labelText,
  disabled,
  inputClassName,
  labelClassName,
  checked,
  required = false,
  ...restProps
}) {
  const id = useId();

  return (
    <>
      <label className={`${labelClassName}`} htmlFor={id}>
        <input
          required={required}
          className={`${inputClassName}`}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          id={id}
          {...restProps}
        />
        {labelText}
      </label>
    </>
  );
}

export default CheckboxButton;
