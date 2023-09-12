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
      <label className={`${labelClassName} relative`} htmlFor={id}>
        <input
          required={required}
          className={`${inputClassName}`}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          id={id}
          {...restProps}
        />

        <span className="pl-[.3125rem] text-secondary font-light">
          {labelText}
        </span>
      </label>
    </>
  );
}

export default CheckboxButton;
