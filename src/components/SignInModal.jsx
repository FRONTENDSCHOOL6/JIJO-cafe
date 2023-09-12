import ButtonWrapper from "@/layout/Wrapper/ButtonWrapper";
import {emailReg, pwReg} from "@/utils/Validation";
import debounce from "@/utils/debounce";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import KakaoTalkSignInButton from "./KakaoTalkSignInButton";
import SignInForm from "./SignInForm";
import TextHorizen from "./TextHorizen";
import JijoCafeLogoTitle from "./JijoCafeLogoTitle";
import useOutsideClickClose from "@/hooks/useOutsideClickClose";
import useAuthStore from "@/store/store";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {ClientResponseError} from "pocketbase";
import InValidErrorMessage from "./InValidErrorMessage";
import EyeOpen from "./EyeOpen";
import EyeClosed from "./EyeClosed";

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
  };

  useOutsideClickClose(formRef, handleModalClose);

  /* PB Data 접근 및 해당 로그인 */
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const signIn = useAuthStore((state) => state.signIn);
  const handleSignIn = (e) => {
    try {
      e.preventDefault();
      const {email, password} = formData;
      signIn(email, password);
      toast.success(`${user.username}님 환영해요😁`, {icon: "👋"});
      navigate("/");
      setIsClickedSignin(false);
    } catch (error) {
      if (error instanceof ClientResponseError) {
        toast.error("로그인에 실패했습니다😥", {icon: "😥"});
        return;
      }
    }
  };

  /* 회원가입 페이지 이동 */
  const handleMoveSignUp = () => {
    navigate("/signUp");
  };

  /* Eye Component 상태에 따른 비밀번호 보이기 */
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    !isModalOpen && (
      <div className="w-full h-screen bg-[rgba(0,0,0,0.4)] fixed z-40 left-0 top-0">
        <SignInForm ref={formRef} onSubmit={handleSignIn}>
          <JijoCafeLogoTitle />
          <Input
            inputClassName={
              isEmailValid ? "" : "border-2 border-red-300 focus:border-red-300"
            }
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
              inputClassName={
                isPasswordValid
                  ? ""
                  : "border-2 border-red-300 focus:border-red-300"
              }
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
          <KakaoTalkSignInButton />
        </SignInForm>
      </div>
    )
  );
}

export default SignInModal;
