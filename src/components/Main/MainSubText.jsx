import React from "react";

export function MainText() {
  return (
    <>
      <Content />
    </>
  );
}
export function SubText() {
  return (
    <>
      <SubContent />
    </>
  );
}

export const Content = ({ text1, text2, text3 }) => {
  return (
    <p className="flex flex-col text-jj_22 mobile:text-jj_18">
      <span>{text1}</span>
      <span>{text2}</span>
      <span>{text3}</span>
    </p>
  );
};

export const SubContent = ({ text1, text2, text3 }) => {
  return (
    <p className="flex flex-col pt-5 pb-10 font-light whitespace-nowrap mobile:text-jj_13">
      <span>{text1}</span>
      <span>{text2}</span>
      <span>{text3}</span>
    </p>
  );
};
