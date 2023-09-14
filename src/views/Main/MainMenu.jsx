import React from "react";
import Button from "./../../components/Button";
import MenuCarousel from "./MenuCarousel";
import MainTitle from "./MainTitle";

function MainMenu() {
  return (
    <section className="flex h-screen py-[10%] overflow-hidden">
      <h2 className="sr-only">메인페이지 메뉴</h2>
      <div className="flex justify-center w-1/2  mr-[20px] ml-[5rem]">
        <div className=" text-deepDarkGray">
          <MainTitle subHeading="CAFE JIJO 가을시즌 신메뉴" mainHeading="풍요로운 가을이 만든 달콤함"></MainTitle>
          <p className="text-jj_22 mobile:text-jj_18">청송 사과 한 잔, 보름달 한 상</p>
          <p className="flex flex-col py-5 font-light whitespace-nowrap mobile:text-jj_13">
            <span>가을이 키운 달콤한 청송 사과 신메뉴와</span>
            <span>가을을 닮은 풍요로운 보름달 신메뉴 출시!</span>
            <span>지금 바로 가까운 메가MGC커피에서 만나보세요!</span>
          </p>
          <Button type="button" color="secondary" className="px-[1.875rem] text-center text-jj_20 font-normal h-[3.4375rem]">
            <a href="/menu/drink">메뉴 더보기</a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="max-w-[1000px] overflow-hidden absolute">
          <MenuCarousel />
        </div>
      </div>
    </section>
  );
}

export default MainMenu;
