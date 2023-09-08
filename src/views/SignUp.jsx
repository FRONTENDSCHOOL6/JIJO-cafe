import Input from "@/components/Input";
import Form from "@/components/SignInForm";
import {useId} from "react";
import {Helmet} from "react-helmet-async";

function SignUp() {
  const inputProps = [
    {
      placeholder: "이름을 입력해주세요",
      name: "name",
    },
    {
      placeholder: "이메일을 입력해주세요 예)jijocoffee@gmail.com",
      name: "email",
      type: "email",
    },
    {
      placeholder: "비밀번호 10자리 이상, 14자리이하 하나의 알파벳 문자를 포함",
      name: "password",
      type: "password",
    },
    {
      placeholder: "비밀번호를 다시 한번 입력해주세요",
      name: "passwordConfirm",
      type: "password",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cafe-Jijo 회원가입 페이지</title>
      </Helmet>
      <form>
        <div>
          <h2>화원가입</h2>
          <span>카페 지조 소식을 알려드립니다.</span>
        </div>
        <p>이름</p>
        {inputProps?.map((inputProp) => {
          const id = useId();
          return (
            <Input
              key={id}
              type={inputProp.type}
              placeholder={inputProp.placeholder}
              name={inputProp.name}
            />
          );
        })}
      </form>
    </>
  );
}

export default SignUp;
