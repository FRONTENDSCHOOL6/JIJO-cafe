import React from "react";
import Button from "@/components/Button";
import MenuCarousel from "@/components/Main/MenuCarousel";
import MainpageTitle from "@/components/Main/MainpageTitle";
import { Link } from "react-router-dom";
import { MainPageText1, MainPageText2 } from "@/components/Main/MainPageText";

function MainMenu() {
  const content1 = ["청송 사과 한 잔, 보름달 한 상"];
  const content2 = ["가을이 키운 달콤한 청송 사과 신메뉴와", "가을을 닮은 풍요로운 보름달 신메뉴 출시!", "지금 바로 가까운 메가MGC커피에서 만나보세요!"];
  return (
    <section className="grid h-screen grid-cols-2 overflow-hidden bg-white mobile:grid-cols-1 mobile:grid-rows-2 place-content-center">
      <h2 className="sr-only">메인페이지 메뉴</h2>
      <div className="mr-[1.25rem] ml-[5rem] text-deepDarkGray">
        <div className="">
          <MainpageTitle highLight="primaryHighlight" subHeading="CAFE JIJO 가을시즌 신메뉴" mainHeading="풍요로운 가을이 만든 달콤함"></MainpageTitle>
          <MainPageText1 text={content1} />
          <MainPageText2 text={content2} />
          <Link to="/menu/drink">
            <Button type="button" color="secondary" className="px-[1.875rem] text-center text-jj_20 font-normal mobile:mobileButton h-[3.4375rem]">
              메뉴 더보기
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute overflow-hidden">
          <MenuCarousel />
        </div>
      </div>
    </section>
  );
}

export default MainMenu;
