import Button from "@/components/Button";
import CheckboxButton from "@/components/CheckboxButton";
import InValidErrorMessage from "@/components/InValidErrorMessage";
import Input from "@/components/Input";
import PageMainTitle from "@/components/PageMainTitle";
import {
  usePocektBaseDataList,
  usePocketBaseFilteredData,
} from "@/hooks/usePocektBaseData";
import SignUpFormWrapper from "@/layout/Wrapper/SignUpFormWrapper";
import useAuthStore from "@/store/store";
import {engReg, pwReg} from "@/utils/Validation";
import debounce from "@/utils/debounce";
import {set} from "ramda";
import {useState} from "react";
import {useEffect} from "react";
import {useId} from "react";
import {Helmet} from "react-helmet-async";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const inputProps = [
  {
    label: "닉네임",
    placeholder: "닉네임(영문)을 입력해주세요",
    name: "name",
  },
  {
    label: "이메일",
    placeholder: "이메일을 입력해주세요 예)jijocoffee@gmail.com",
    name: "email",
    type: "email",
  },
  {
    label: "비밀번호",
    placeholder:
      "비밀번호 10자리 이상, 14자리이하 하나의 알파벳 문자를 포함하는 특수문자",
    name: "password",
    type: "password",
  },
  {
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한번 입력해주세요",
    name: "passwordConfirm",
    type: "password",
  },
];

function SignUp() {
  /* Input 사용자 입력 값 감지 */
  const initalState = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formState, setFormState] = useState(initalState);
  const {name, email, password, passwordConfirm} = formState;
  const handleInput = debounce((e) => {
    const {name, value} = e.target;
    setFormState({...formState, [name]: value});
    if (name === "password") {
      validateSignUp();
    }
  });

  /* PassWord Validation */
  const [isValid, setIsValid] = useState(true);
  const validateSignUp = () => {
    if (!pwReg(password)) {
      setIsValid(false);
      return;
    }
    if (name === "name" && !engReg(value)) {
      toast.error("닉네임은 영문으로만 입력해주세요!", {icon: "😡"});
      setIsValid(false);
    }
    setIsValid(true);
  };

  /* 가입하기 버튼을 통한 회원가입 및 가입한 id로 로그인 */
  const signUp = useAuthStore((state) => state.signUp);
  const signIn = useAuthStore((state) => state.signIn);
  const navigate = useNavigate();
  const handleSignUp = () => {
    if (password !== passwordConfirm) {
      toast.error("비밀번호가 일치하지 않습니다.", {icon: "😡"});
    }
    signUp(formState);
    toast.success(
      `반갑습니다 ${name} 님! 회원가입이 완료되었습니다! 메인화면으로 이동합니다`,
      {
        icon: "🥳",
        duration: 3000,
      }
    );
    signIn(email, password);
    navigate("/");
  };

  /* 체크 박스 전체동의 클릭 시 하위 체크박스 전체 선택 */
  const checkBoxItems = [
    {
      labelText: "서비스 이용약관 동의 (필수)",
      inputClassName: "mr-1",
      required: true,
    },
    {
      labelText: "개인정보 수집 및 이용 동의 (필수)",
      inputClassName: "mr-1",
      required: true,
    },
    {
      labelText: "만 14세 이상 입니다 (필수)",
      inputClassName: "mr-1",
      required: true,
    },
    {
      labelText: "광고성 정보 수신 동의 (선택)",
      inputClassName: "mr-1",
    },
  ];
  const [checkedItems, setCheckedItems] = useState([]);
  const handleAllCheck = (e) => {
    if (e.target.checked) {
      setCheckedItems(checkBoxItems.map((item) => item.labelText));
    }
  };

  console.log(checkedItems);

  return (
    <>
      <Helmet>
        <title>지조 회원가입</title>
      </Helmet>

      <section>
        <h2 className="sr-only">회원가입 페이지</h2>
        <SignUpFormWrapper>
          <PageMainTitle
            pageTitleText="회원가입"
            pageSubTitleText="카페 지조 소식을 알려드립니다"
          />
          <div className="inputWrap flex flex-col gap-2 pt-[2.6rem]">
            {inputProps?.map(({label, type, placeholder, name}) => {
              const id = useId();
              return (
                <Input
                  defaultValue={formState[name]}
                  onChange={handleInput}
                  inputClassName="mobile:text-center mobile:placeholder:text-center placeholder:text-[11px]"
                  label={label}
                  key={id}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                />
              );
            })}
            {!isValid && (
              <InValidErrorMessage errorText="비밀번호 입력서식을 다시 한번 확인해주세요!" />
            )}
          </div>
          <div className="checkBoxWrap pt-[2.9375rem] flex flex-col gap-3 ">
            <CheckboxButton
              inputClassName="mr-1"
              labelText="전체동의"
              onClick={handleAllCheck}
            />
            <hr className="w-full" />
            {checkBoxItems.map(({labelText, inputClassName, required}) => {
              const id = useId();
              return (
                <CheckboxButton
                  required={required}
                  inputClassName={inputClassName}
                  labelText={labelText}
                  key={id}
                />
              );
            })}
          </div>

          <Button
            onClick={handleSignUp}
            type="submit"
            color="secondary"
            className="w-full h-fit mt-16 py-4 text-center">
            가입하기🥳
          </Button>
        </SignUpFormWrapper>
      </section>
    </>
  );
}

export default SignUp;
