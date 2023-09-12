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
          className={`${inputClassName} opacity-0 m-0 inline-block align-middle w-[1.375rem] border-0 outline-none`}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          id={id}
          {...restProps}
        />
        <span className="checkmark block w-[1.375rem] h-[1.375rem] rounded-[.1875rem] absolute left-0 top-1/2 -translate-y-1/2 border border-secondary"></span>
        <span className="pl-[.3125rem] text-secondary font-light">
          {labelText}
        </span>
      </label>
    </>
  );
}

export default CheckboxButton;
