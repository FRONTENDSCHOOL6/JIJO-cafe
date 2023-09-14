import Button from "../../components/Button";
import MainTitle from "./MainTitle";

function MainShopingMall() {
  return (
    <section className="flex h-screen py-[10%] bg-primary">
      <h2 className="sr-only">메인페이지 쇼핑몰</h2>
      <div className="flex justify-center flex-1  mr-[20px] ml-[5rem]">
        <div className=" text-deepDarkGray">
          <MainTitle subHeading="지조 있게 추천하는 제품" mainHeading="CAFE JIJO SHOPING MALL"></MainTitle>
          <p className="text-jj_22 mobile:text-jj_18">카페 지조가 추천하는 제품들을 둘러보세요!</p>
          <p className="flex flex-col pt-5 pb-10 font-light whitespace-nowrap mobile:text-jj_13">
            <span>지조 MD가 직접 선정하는 다양한 제품들을</span>
            <span>합리적인 가격으로 만나보실 수 있습니다.</span>
          </p>
          <Button type="button" color="secondary" className="px-[1.875rem] text-center text-jj_20 font-normal h-[3.4375rem]">
            <a href="/">JIJO MALL 바로가기</a>
          </Button>
        </div>
      </div>
      <div className="flex-1 px-20 py-21">
        <div className="w-full h-full bg-black"></div>
      </div>
    </section>
  );
}

export default MainShopingMall;
