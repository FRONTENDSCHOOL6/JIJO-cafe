import React from "react";
import MainpageTitle from "../../components/MainpageTitle";
import Button from "@/components/Button";

function MainStore() {
  return (
    <section className="flex justify-between h-screen">
      <h2 className="sr-only">메인페이지 매장찾기</h2>
      <div className="flex justify-center mr-[20px] ml-[5rem] py-[10%]">
        <div className=" text-deepDarkGray">
          <MainpageTitle subHeading="지조 있게 추천하는 제품" mainHeading="CAFE JIJO SHOPING MALL"></MainpageTitle>
          <p className="flex flex-col text-jj_22 mobile:text-jj_18">
            <span>100% 프리미엄 아라비카 원두를 로스팅하여,</span>
            <span>깊고 부드러운 커피와 빅 사이즈로 구성된</span>
            <span>다양한 음료를 합리적인 가격으로 제공합니다.</span>
          </p>
          <p className="flex flex-col pt-5 pb-10 font-light whitespace-nowrap mobile:text-jj_13">
            <span>좋은 품질의 재료를, 합리적인 가격으로 제공하는 카페 지조,</span>
            <span>가까운 곳에 위치한 매장을 확인해보세요!</span>
          </p>
          <Button type="button" color="primary" className="px-[1.875rem] text-center text-jj_20 font-normal h-[3.4375rem]">
            <a href="/">매장 찾기</a>
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <div className="object-fill w-full h-full storeImage"></div>
      </div>
    </section>
  );
}

export default MainStore;
