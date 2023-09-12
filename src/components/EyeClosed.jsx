import {AiFillEyeInvisible} from "react-icons/ai";

function EyeClosed({...props}) {
  return (
    <>
      <AiFillEyeInvisible
        color="#181818"
        size="1.5rem"
        type="button"
        cursor="pointer"
        role="button"
        aria-label="비밀번호 보기"
        {...props}
      />
    </>
  );
}

export default EyeClosed;
