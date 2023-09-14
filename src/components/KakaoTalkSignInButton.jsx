import Button from "@/components/Button";

function KakaoTalkSignInButton({...restProps}) {
  return (
    <>
      <Button
        className="bg-[#FEE500] flex text-black items-center justify-center hover:bg-amber-300"
        {...restProps}>
        <img src="/kakao.svg" alt="카카오톡 로고" className="pr-2" />
        <span>카카오톡으로 로그인하기</span>
      </Button>
    </>
  );
}

export default KakaoTalkSignInButton;
