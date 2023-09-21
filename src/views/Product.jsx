import {Helmet} from "react-helmet-async";
import MenuTitle from "@/components/MenuTitle";
import MenuBubble from "@/components/MenuBubble";
import CheckBox from "@/components/CheckBox/CheckBox";
import Products from "@/components/Products";
import LazyImage from "@/utils/LazyImage";


function Product() {
  return (
    <div>
      <Helmet>
        <title>메뉴소개 - 상품</title>
      </Helmet>
      <MenuTitle title="MEGA MENU">PRODUCT MENU</MenuTitle>
      <MenuBubble>
        <strong>MEGA DAILY GOODS</strong>
      </MenuBubble>
      <section className="bg-white mx-auto max-w-7xl mobile:w-full flex mobile:flex-col justify-between items-center mobile:items-start gap-[3.125rem] pt-[6.25rem] mobile:px-5">
        <div>
          <p className="text-jj_24 font-light">지조로운 일상의 커피</p>
          <h2 className="text-jj_60 font-bold break-keep leading-tight my-10">JIJO STICK</h2>
          <div className="text">
            <p className="title text-jj_22 border-b pb-5">
              하루에 하나로 충분 ! 메가로운 대용량 아메리카노
              <br />당 걱정 없는 당 충전! 건강한 단맛, 스테비아 믹스커피
            </p>
            <p className="desc text-[#1c1c1b] opacity-70 pt-5">
              #지조루틴 #지조스틱
              <br /> 지조스틱 4종을 지금 바로 매장에서 만나보세요.
            </p>
          </div>
        </div>
        <figure className="shrink-0 tablet:shrink mobile:w-full">
          <LazyImage src="/src/assets/images/menu/product/product_image01.jpg" alt="지조로운 일상의 커피" />
        </figure>
      </section>
      <section className="bg-white mx-auto max-w-7xl mt-[6.25rem] mobile:px-5">
        <div className="titleArea text-center">
          <p className="text-jj_24 font-light">카페 지조 상품</p>
          <h2 className="text-jj_60 font-black">JIJO GOODS</h2>
          <span className="text-jj_14 font-light text-[#1c1c1b] opacity-70">※메뉴 이미지는 연출컷이라 실물과 다를 수 있습니다.</span>
        </div>

        <div className="checkboxArea border border-gray-200 p-[1.875rem] my-10">
          <p className="title text-jj_22 leading-tight pb-5 mb-5 border-b border-b-gray-200">분류보기</p>
          <div className="checkboxWrap flex gap-[.625rem]">
            <CheckBox text="전체 상품보기" defaultChecked="checked" />
            <CheckBox text="MD" />
          </div>
        </div>

        {/* <Pagination></Pagination> */}
      </section>
    </div>
  )
}

export default Product
