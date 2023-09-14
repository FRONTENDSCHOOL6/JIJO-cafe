import {useId} from "react";

function Input({
  label,
  type = "text",
  name = null,
  labelClassName,
  className,
  placeholder,
  ...restProps
}) {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`${className} bg-[#f8f8f8] h-[2.8125rem] w-[25.75rem] pl-4 text-black rounded placeholder:text-[#828282] focus:border-2 focus:outline-none focus:border-primary`}
        placeholder={placeholder}
        name={name}
        {...restProps}
      />
    </>
  );
}

export default Input;
