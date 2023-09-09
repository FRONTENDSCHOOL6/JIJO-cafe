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

function SignInModal() {
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

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (!formRef.current || formRef.current.contains(e.target)) {
  //       return;
  //     }
  //     setIsModalOpen((prev) => !prev);
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [isModalOpen]);

  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
  };

  useOutsideClickClose(formRef, handleModalClose);

  return (
    !isModalOpen && (
      <div className="w-full h-screen bg-[rgba(0,0,0,0.4)] fixed z-40 left-0 top-0">
        <SignInForm ref={formRef}>
          <JijoCafeLogoTitle />
          <Input
            name="email"
            defaultValue={formData.email}
            onChange={handleInput}
            placeholder="이메일을 입력해주세요"
            label="이메일"
            type="email"
          />
          {!isEmailValid && (
            <span className="text-red-600">
              올바른 이메일 형식을 입력해주세요😅
            </span>
          )}
          <Input
            name="password"
            defaultValue={formData.password}
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요"
            label="비밀번호"
            type="password"
          />
          {!isPasswordValid && (
            <span className="text-red-600">
              비밀번호는 10자 이상 그리고 특수문자 하나이상을 입력 해주세요!
            </span>
          )}
          <ButtonWrapper>
            <Button className="bg-secondary text-white grow" color="primary">
              로그인
            </Button>
            <Link to="/signUp">
              <Button className="bg-white border text-black px-[1.75rem] py-[0.75rem]">
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
