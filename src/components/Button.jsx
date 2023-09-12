function Button({type = "button", color, children, className, ...restProps}) {
  let buttonStyle;

  switch (color) {
    case "primary":
      buttonStyle = "bg-primary hover:bg-[#C7B08E]";
      break;
    case "secondary":
      buttonStyle = "bg-secondary text-white hover:bg-[#645B4B]";
      break;
    case "white":
      buttonStyle = "bg-white border border-black";
      break;

    default:
      buttonStyle = "";
      break;
  }

  return (
    <button
      type={type}
      className={`${buttonStyle} ${className} font-medium h-[2.8125rem] rounded-sm`}>
      {children}
    </button>
  );
}

export default Button;
