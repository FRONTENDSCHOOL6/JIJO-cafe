import {useId} from "react";

function Input({
  label,
  type = "text",
  name = null,
  className,
  placeholder,
  ...restProps
}) {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`${className} bg-[#f8f8f8] h-[2.8125rem] w-[25.75rem] pl-4 rounded placeholder:text-[#828282]`}
        placeholder={placeholder}
        name={name}
        {...restProps}
      />
    </>
  );
}

export default Input;
