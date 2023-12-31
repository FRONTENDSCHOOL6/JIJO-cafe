import {forwardRef} from "react";

function SignInForm({children, className, ...restProps}, ref) {
  return (
    <>
      <form
        ref={ref}
        className={`${className} flex flex-col gap-4 py-[5.25rem] px-[9rem] bg-white rounded-[1.25rem] w-fit fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-md z-[999] mobile:p-8`}
        {...restProps}>
        {children}
      </form>
    </>
  );
}

export default forwardRef(SignInForm);
