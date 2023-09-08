import Button from "@/components/Button";

function KakaoTalkSignInButton() {
  return (
    <>
      <Button className="bg-[#FEE500] flex items-center justify-center">
        <img src="/kakao.svg" alt="카카오톡 로고" className="pr-2" />
        <span>카카오톡으로 로그인하기</span>
      </Button>
    </>
  );
}

export default KakaoTalkSignInButton;
