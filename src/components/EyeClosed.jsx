import {AiFillEyeInvisible} from "react-icons/ai";

function EyeClosed({...props}) {
  return (
    <>
      <AiFillEyeInvisible
        color="#181818"
        size="1.5rem"
        type="button"
        cursor="pointer"
        {...props}
      />
    </>
  );
}

export default EyeClosed;
