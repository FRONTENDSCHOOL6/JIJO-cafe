import Button from "@/components/Button";
import MainpageTitle from "@/components/MainpageTitle";

function MainEvent() {
  return (
    <section className="flex flex-col h-screen py-[10%] bg-blue-300">
      <h2 className="sr-only">메인페이지 쇼핑몰</h2>
      <div className="flex justify-center flex-1  mr-[20px] ml-[5rem]">
        <MainpageTitle subHeading="지조 있게 추천하는 제품" mainHeading="CAFE JIJO SHOPING MALL"></MainpageTitle>
      </div>
      <div className="flex flex-col flex-1 h-full px-20 bg-yellow">
        <div className="w-full h-full bg-orange-200"></div>
        <p className="mt-8 mb-3 font-light text-center mobile:text-jj_13">전체 매장 및 각 매장에서 다양한 이벤트가 진행중 입니다.</p>
        <Button type="button" color="primary" className="text-center text-jj_20 font-normal h-[5.4375rem]">
          <a href="/">이벤트 바로가기</a>
        </Button>
      </div>
    </section>
  );
}

export default MainEvent;
