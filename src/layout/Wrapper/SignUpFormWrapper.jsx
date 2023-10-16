function SignUpFormWrapper({children, ...restProps}) {
  return (
    <>
      <form
        className="w-fit m-auto pt-[2.125rem] pb-[14.625rem] mobile:pt-[10rem]"
        {...restProps}>
        {children}
      </form>
    </>
  );
}

export default SignUpFormWrapper;
