import {AiFillEye} from "@react-icons/all-files/ai/AiFillEye";

function EyeOpen({className, ...props}) {
  return (
    <>
      <AiFillEye
        type="button"
        className={`${className} hover:text-darkGray`}
        color="#181818"
        cursor="pointer"
        size="1.5rem"
        {...props}
      />
    </>
  );
}

export default EyeOpen;
