function SignUpFormWrapper({children}) {
  return (
    <>
      <form className="w-fit m-auto pt-[2.125rem] pb-[14.625rem]">
        {children}
      </form>
    </>
  );
}

export default SignUpFormWrapper;
