import MainpageTitle from "@/components/Main/MainpageTitle";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { MainPageText1, MainPageText2 } from "@/components/Main/MainPageText";

function MainStore({ className }) {
  const content1 = ["100% 프리미엄 아라비카 원두를 로스팅하여,", "깊고 부드러운 커피와 빅 사이즈로 구성된", "다양한 음료를 합리적인 가격으로 제공합니다."];
  const content2 = ["좋은 품질의 재료를, 합리적인 가격으로 제공하는 카페 지조,", "가까운 곳에 위치한 매장을 확인해보세요!"];
  return (
    <section className={`${className}`}>
      <h2 className="sr-only">메인페이지 매장찾기</h2>
      <div className="w-full h-full"></div>
      <div className="w-full storeImage"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 text-deepDarkGray top-1/2 left-1/4 mobile:left-1/2 tablet:pl-36">
        <div>
          <MainpageTitle highLight="primaryHighlight" subHeading="카페 지조 매장 찾기" mainHeading="CAFE JIJO STORE"></MainpageTitle>
          <MainPageText1 text={content1} />
          <MainPageText2 text={content2} />
          <Link to="/findStore">
            <Button type="button" color="primary" className="px-[1.875rem] text-center text-jj_20 font-normal mobile:mobileButton h-[3.4375rem]">
              매장 찾기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainStore;
