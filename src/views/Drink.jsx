import {Helmet} from "react-helmet-async";
import MenuTitle from "@/components/MenuTitle";
import MenuBubble from "@/components/MenuBubble";
import CheckBox from "@/components/CheckBox/CheckBox";
import Products from "@/components/Products";

function Drink() {
  return (
    <div>
      <Helmet>
        <title>메뉴소개 - 음료</title>
      </Helmet>
      <MenuTitle title="MEGA MENU">DRINK MENU</MenuTitle>
      <MenuBubble>
        <strong>깊고 부드러운 커피 맛의 비밀</strong>
        <br />
        행복을 선사하는 다양한 음료
      </MenuBubble>
      <section className="mx-auto max-w-7xl flex justify-between items-center gap-[3.125rem] pt-[6.25rem]">
        <div>
          <p className="text-jj_24 font-light">카페 지조 가을시즌 신메뉴</p>
          <h2 className="text-jj_60 font-bold break-keep leading-tight">
            풍요로운 가을이 만든 달콤함
          </h2>
          <div className="text">
            <p className="title text-jj_22 border-b pb-5">
              청송 사과 한 잔, 보름달 한 상
            </p>
            <p className="desc text-[#1c1c1b] opacity-70 pt-5">
              가을이 키운 달콤한 청송 사과 신메뉴와
              <br /> 가을을 닮은 풍요로운 보름달 신메뉴 출시!
              <br /> 지금 바로 가까운 메가MGC커피에서 만나보세요!
            </p>
          </div>
        </div>
        <figure className="shrink-0">
          <img
            src="/src/assets/images/menu/drink/drink_image01.jpg"
            alt="가을이 키운 달콤한 청송사과 한 잔"
          />
        </figure>
      </section>
      <section className="mx-auto max-w-7xl mt-[6.25rem]">
        <div className="titleArea text-center">
          <p className="text-jj_24 font-light">카페 지조의 엄선된 메뉴</p>
          <h2 className="text-jj_60 font-black">JIJO MENU</h2>
          <span className="text-jj_14 font-light text-[#1c1c1b] opacity-70">
            ※메뉴 이미지는 연출컷이라 실물과 다를 수 있습니다.
          </span>
        </div>

        <div className="checkboxArea border border-gray-200 p-[1.875rem] my-10">
          <p className="title text-jj_22 leading-tight pb-5 mb-5 border-b border-b-gray-200">
            분류보기
          </p>
          <div className="checkboxWrap flex gap-[.625rem]">
            <CheckBox text="전체 상품보기" defaultChecked="checked" />
            <CheckBox text="커피" />
            <CheckBox text="티" />
            <CheckBox text="에이드&주스" />
            <CheckBox text="스무디&프라페" />
            <CheckBox text="디카페인" />
            <CheckBox text="음료" />
            <CheckBox text="신상품" />
          </div>
        </div>

        <Products sub="beverage" />
      </section>
    </div>
  );
}

export default Drink;
