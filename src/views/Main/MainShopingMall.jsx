import Button from "@/components/Button";
import MainpageTitle from "@/components/Main/MainpageTitle";
import { Link } from "react-router-dom";
import ShopingMallCarousel from "@/components/Main/ShopingMallCarousel";
import nextArrow from "../../assets/images/main/nextArrow.png";
import { MainPageText1, MainPageText2 } from "@/components/Main/MainPageText";

function MainShopingMall() {
  const content1 = ["카페 지조가 추천하는 제품들을 둘러보세요!"];
  const content2 = ["지조 MD가 직접 선정하는 다양한 제품들을", "합리적인 가격으로 만나보실 수 있습니다."];
  return (
    <section className="grid items-center h-screen grid-cols-2 overflow-hidden mobile:grid-cols-1 mobile:grid-rows-2 bg-primary">
      <h2 className="sr-only">메인페이지 쇼핑몰</h2>
      <div className="px-20 text-deepDarkGray mobile:pl-10">
        <div>
          <MainpageTitle highLight="secondaryHighlight" subHeading="지조 있게 추천하는 제품" mainHeading="CAFE JIJO SHOPING MALL"></MainpageTitle>
          <MainPageText1 text={content1} />
          <MainPageText2 text={content2} />
          <Link to="/menu/product">
            <Button type="button" color="secondary" className="px-[2rem] text-center text-jj_20 font-normal h-[3.4375rem] break-keep mobile:mobileButton">
              상품 더보기
            </Button>
          </Link>
        </div>
      </div>
      <div className="mobile:pl-10">
        <div className="w-full h-auto py-10 overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] bg-secondary px-7 rounded-l-2xl mobile:py-4">
          <div className="pb-6 mobile:flex mobile:gap-5">
            <div className="title">
              <p className="pb-2 font-light text-white text-jj_20 mobile:text-jj_14">카페 지조에서 픽한 MD 전용상품!</p>
              <h4 className="text-white font-bold leading-[1] break-keep text-jj_34 pb-4 mobile:text-jj_24">지조 MD 전용 상품</h4>
            </div>
            <Link to="/menu/product" className="">
              <button className="flex items-center px-6 py-2 font-bold rounded-full text-deepDarkGray bg-primary text-jj_14 font-pretendard">
                바로가기
                <img src={nextArrow} alt="" className="block h-auto w-[1.2rem] ml-1" aria-hidden="true" />
              </button>
            </Link>
          </div>
          <ShopingMallCarousel />
        </div>
      </div>
    </section>
  );
}

export default MainShopingMall;
