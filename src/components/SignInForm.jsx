function SignInForm({children, className, ...restProps}) {
  return (
    <>
      <form
        className={`${className} flex flex-col gap-4 py-[5.25rem] px-[9rem] bg-white rounded-[1.25rem] w-fit fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-md`}
        {...restProps}>
        {children}
      </form>
    </>
  );
}

export default SignInForm;
