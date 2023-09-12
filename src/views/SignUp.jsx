import Button from "@/components/Button";
import CheckboxButton from "@/components/CheckboxButton";
import Input from "@/components/Input";
import PageMainTitle from "@/components/PageMainTitle";
import {usePocektBaseDataList} from "@/hooks/usePocektBaseData";
import SignUpFormWrapper from "@/layout/Wrapper/SignUpFormWrapper";
import useAuthStore from "@/store/store";
import {useEffect} from "react";
import {useId} from "react";
import {Helmet} from "react-helmet-async";

const inputProps = [
  {
    label: "이름",
    placeholder: "이름을 입력해주세요",
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
    placeholder: "비밀번호 10자리 이상, 14자리이하 하나의 알파벳 문자를 포함",
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
                  inputClassName="mobile:text-center mobile:placeholder:text-center"
                  label={label}
                  key={id}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                />
              );
            })}
          </div>
          <div className="checkBoxWrap pt-[2.9375rem] flex flex-col gap-3 ">
            <CheckboxButton inputClassName="mr-1" labelText="전체동의" />
            <hr className="w-full" />
            <CheckboxButton
              required={true}
              inputClassName="mr-1"
              labelText="서비스 이용약관 동의 (필수)"
            />
            <CheckboxButton
              required={true}
              inputClassName="mr-1"
              labelText="개인정보 수집 및 이용 동의 (필수)"
            />
            <CheckboxButton
              required={true}
              inputClassName="mr-1"
              labelText="만 14세 이상 입니다 (필수)"
            />
            <CheckboxButton
              inputClassName="mr-1"
              labelText="광고성 정보 수신 동의 (선택)"
            />
          </div>

          <Button
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
