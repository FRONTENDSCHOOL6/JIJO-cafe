import Button from "./Button";
import Input from "./Input";
import JijoLogoTitle from "@/assets/images/logoTitle.png";

function SignInModal() {
  return (
    <>
      <form className="flex flex-col gap-4 py-[5.25rem] px-[9rem] bg-white rounded-[1.25rem] w-fit m-auto">
        <img src={JijoLogoTitle} alt="" />
        <Input placeholder="이메일을 입력해주세요" label="이메일" />
        <Input placeholder="비밀번호를 입력해주세요" label="비밀번호" />
        <div className="buttonWrap flex">
          <Button className="bg-secondary text-white grow">로그인</Button>
          <Button className="bg-white border text-black px-[1.75rem] py-[0.75rem] shrink-0">
            회원가입
          </Button>
        </div>
      </form>
    </>
  );
}

export default SignInModal;
