import {useId} from "react";

function CheckboxButton({
  children,
  disabled,
  inputClassName,
  labelClassName,
  checked,
  ...restProps
}) {
  const id = useId();

  return (
    <>
      <input
        className={inputClassName}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        id={id}
        {...restProps}
      />
      <label className={`${labelClassName} pl-1`} htmlFor={id}>
        {children}
      </label>
    </>
  );
}

export default CheckboxButton;
