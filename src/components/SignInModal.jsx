import useOutsideClickClose from "@/hooks/useOutsideClickClose";
import ButtonWrapper from "@/layout/Wrapper/ButtonWrapper";
import useAuthStore from "@/store/store";
import {emailReg, pwReg} from "@/utils/Validation";
import debounce from "@/utils/debounce";
import {ClientResponseError} from "pocketbase";
import {useRef, useState} from "react";
import {toast} from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";
import Button from "./Button";
import EyeClosed from "./EyeClosed";
import EyeOpen from "./EyeOpen";
import InValidErrorMessage from "./InValidErrorMessage";
import Input from "./Input";
import JijoCafeLogoTitle from "./JijoCafeLogoTitle";
import KakaoTalkSignInButton from "./KakaoTalkSignInButton";
import SignInForm from "./SignInForm";
import TextHorizen from "./TextHorizen";
import {useEffect} from "react";

function SignInModal({setIsClickedSignin}) {
  /* Email과 Password 유효성 검사 및 조건부 렌더링 함수 */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const handleInput = debounce((e) => {
    const {value, name} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "email") {
      setIsEmailValid(emailReg(value));
    } else if (name === "password") {
      setIsPasswordValid(pwReg(value));
    }
  });

  /* 모달창 외부 클릭 시 로그인모달 닫기 */
  const formRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
    setIsClickedSignin(false);
  };
  useOutsideClickClose(formRef, handleModalClose);

  /* PB Data 접근 및 해당 로그인 */
  const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      toast.success(`${user.username}님 환영해요😁`, {icon: "👋"});
      navigate("/");
      setIsClickedSignin(false);
    }
  }, [user]);

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const {email, password} = formData;
      await signIn(email, password);
    } catch (error) {
      toast.error(
        "로그인에 실패했습니다. 아이디와 패스워드를 다시 확인해주세요",
        {icon: "😥"}
      );
      throw new Error(error);
    }
  };

  /* 회원가입 페이지 이동 */
  const handleMoveSignUp = () => {
    navigate("/signUp");
  };

  /* KaKao 사용자 로그인 */
  const kakaoSignIn = useAuthStore((state) => state.SignWithKaKao);
  const handleSigninKakao = async () => {
    await kakaoSignIn();
  };

  /* Eye Component 상태에 따른 비밀번호 보이기/보이지 않기 */
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  /* 이메일 및 비밀번호 형식에 유효하지않을때 덮여씌워질 tailwindcss className */
  const inValidBorder = "border-2 border-red-300 focus:border-red-300";

  return (
    !isModalOpen && (
      <div className="w-full h-screen bg-[rgba(0,0,0,0.4)] fixed z-50 left-0 top-0">
        <SignInForm ref={formRef}>
          <JijoCafeLogoTitle />
          <Input
            className={isEmailValid || inValidBorder}
            name="email"
            defaultValue={formData.email}
            onChange={handleInput}
            placeholder="이메일을 입력해주세요"
            label="이메일"
            type="email"
          />
          {!isEmailValid && (
            <InValidErrorMessage errorText="올바른 이메일 형식을 입력해주세요😅" />
          )}
          <div className="pwWrap flex flex-col relative">
            <Input
              className={isPasswordValid || inValidBorder}
              name="password"
              defaultValue={formData.password}
              onChange={handleInput}
              placeholder="비밀번호를 입력해주세요"
              label="비밀번호"
              type={isPasswordVisible ? "text" : "password"}
            />
            {isPasswordVisible ? (
              <EyeClosed
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 mt-3"
                onClick={handlePasswordVisible}
              />
            ) : (
              <EyeOpen
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 mt-3"
                onClick={handlePasswordVisible}
              />
            )}
          </div>

          {!isPasswordValid && (
            <InValidErrorMessage errorText="비밀번호는 10자 이상 그리고 특수문자 하나이상을 입력 해주세요!" />
          )}
          <ButtonWrapper>
            <Button
              className="bg-secondary text-white grow"
              color="primary"
              onClick={handleSignIn}>
              로그인
            </Button>
            <Link to="/signUp">
              <Button
                className="bg-white border text-black px-[1.75rem] py-[0.75rem] hover:#181818 hover:bg-gray-100 grow"
                onClick={handleMoveSignUp}>
                회원가입
              </Button>
            </Link>
          </ButtonWrapper>
          <TextHorizen>간편 로그인</TextHorizen>
          <KakaoTalkSignInButton onClick={handleSigninKakao} />
        </SignInForm>
      </div>
    )
  );
}

export default SignInModal;
