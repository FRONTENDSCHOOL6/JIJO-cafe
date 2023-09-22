import Button from "./Button";
import {AiFillGithub} from "react-icons/ai";

function GithubSignInButton({...restProps}) {
  return (
    <>
      <Button
        className="bg-black flex text-white items-center justify-center hover:bg-gray-800 pr-3"
        {...restProps}>
        <AiFillGithub className="mr-6" size="22" />
        <span>깃허브로 로그인하기</span>
      </Button>
    </>
  );
}

export default GithubSignInButton;
