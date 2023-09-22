import Categories from "@/components/Categories"
import JijoSpinner from "@/components/JijoSpinner"
import MenuBubble from "@/components/MenuBubble"
import MenuTitle from "@/components/MenuTitle"
import Products from "@/components/Products"
// import { usePocketBaseFilteredData } from "@/hooks/usePocektBaseData"
import { useState } from "react"
import LazyImage from "@/utils/LazyImage"
// import MenuSearchForm from "@/components/Menu/MenuSearchForm"
//import Pagination from "@/pockets/Pagination"
import JiJoHelmet from "@/utils/JiJoHelmet"
import productImage01 from "@/assets/images/menu/product/product_image01.jpg"
import usePaginationQuery from "@/hooks/usePaginationQuery"

// const collection = 'products';

function Product() {
  const [category, setCategory] = useState("전체보기")

  const { error, ...rest } = usePaginationQuery({
    perPage: 20,
    queryKey: "products",
    dependency: category,
    options: {
      sort: "-created",
      filter: category !== "전체보기" ? `(category~'${category}')` : "",
    },
  })

  // const {data, status} = usePocketBaseFilteredData(collection, 1, 20, category !== '전체보기' ? `(category~'${category}')` : '');

  const handleCategory = (newCategory) => {
    setCategory(newCategory)
  }

  if (error) {
    return <div role="alert">{error.toString()}</div>
  }

  if (status === "loading") {
    return <JijoSpinner />
  }

  return (
    <div>
      <JiJoHelmet pageTitle="메뉴소개 - 상품" />
      <MenuTitle title="MEGA MENU" mainMenu="메뉴소개" subMenu="상품" mainLink="/menu/drink" subLink="/menu/product">
        PRODUCT MENU
      </MenuTitle>
      <MenuBubble>
        <strong>MEGA DAILY GOODS</strong>
      </MenuBubble>
      <section className="bg-white mx-auto max-w-7xl mobile:w-full flex mobile:flex-col justify-between items-center mobile:items-start gap-[3.125rem] pt-[6.25rem] mobile:px-5">
        <div>
          <p className="font-light text-jj_24">지조로운 일상의 커피</p>
          <h2 className="my-10 font-bold leading-tight text-jj_60 break-keep">JIJO STICK</h2>
          <div className="text">
            <p className="pb-5 border-b title text-jj_22">
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
          <LazyImage src={productImage01} alt="지조로운 일상의 커피" />
        </figure>
      </section>
      <section className="bg-white mx-auto max-w-7xl mt-[6.25rem] mobile:px-5">
        <div className="text-center titleArea">
          <p className="font-light text-jj_24">카페 지조 상품</p>
          <h2 className="font-black text-jj_60">JIJO GOODS</h2>
          <span className="text-jj_14 font-light text-[#1c1c1b] opacity-70">※메뉴 이미지는 연출컷이라 실물과 다를 수 있습니다.</span>
        </div>

        <div className="checkboxArea border border-gray-200 p-[1.875rem] my-10">
          <p className="pb-5 mb-5 leading-tight border-b title text-jj_22 border-b-gray-200">분류보기</p>
          <Categories collection="products" category={category} handleCategory={handleCategory} />
        </div>

        {/* <Products data={data} /> */}
        <Products {...rest} />
      </section>
    </div>
  )
}

export default Product
