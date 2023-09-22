export const MainPageText1 = ({text, className, ...restProps}) => {
  if (text.length === 0) {
    return null;
  }
  return (
    <p
      className={`flex flex-col text-jj_22 mobile:text-jj_15 ${className}`}
      {...restProps}>
      {text.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </p>
  );
};

export const MainPageText2 = ({text, className, ...restProps}) => {
  if (text.length === 0) {
    return null;
  }
  return (
    <p
      className={`${className} flex flex-col py-5 font-light whitespace-nowrap mobile:text-jj_13 `}
      {...restProps}>
      {text.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </p>
  );
};
