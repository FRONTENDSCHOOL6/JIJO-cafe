function ButtonWrapper({children}) {
  return (
    <>
      <div className="buttonWrap flex gap-[0.625rem] pt-4 pb-2">{children}</div>
    </>
  );
}

export default ButtonWrapper;
