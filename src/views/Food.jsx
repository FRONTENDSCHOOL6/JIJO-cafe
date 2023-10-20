import Categories from "@/components/Categories"
import JijoSpinner from "@/components/JijoSpinner"
import MenuBubble from "@/components/MenuBubble"
import MenuTitle from "@/components/MenuTitle"
import Products from "@/components/Products"
// import { usePocketBaseFilteredData } from "@/hooks/usePocektBaseData";
import LazyImage from "@/utils/LazyImage"
import { useState } from "react"
// import MenuSearchForm from "@/components/Menu/MenuSearchForm";
import foodImage01 from "@/assets/images/menu/food/food_image01.jpg"
import MenuBanner from '@/components/Menu/MenuBanner'
import usePaginationQuery from "@/hooks/usePaginationQuery"
import JiJoHelmet from "@/utils/JiJoHelmet"

// const collection = "foods"

function Food() {
  const [category, setCategory] = useState("전체보기")

  const { error, ...rest } = usePaginationQuery({
    perPage: 16,
    queryKey: "foods",
    dependency: category,
    options: {
      sort: "-created",
      filter: category !== "전체보기" ? `(category~'${category}')` : "",
    },
  })

  // const {data, status} = usePocketBaseFilteredData( collection, 1, 20, category !== "전체보기" ? `(category~'${category}')` : "" );
  // console.log(category);

  const handleCategory = (newCategory) => {
    setCategory(newCategory)
  }

  if (status === "loading") {
    return <JijoSpinner />
  }

  if (error) {
    return <div role="alert">{error.toString()}</div>
  }

  return (
    <div>
      <JiJoHelmet pageTitle="메뉴소개 - 푸드" />
      <MenuTitle title="MEGA MENU" mainMenu="메뉴소개" subMenu="푸드" mainLink="/menu/drink" linkTo="/menu/food">
        FOOD MENU
      </MenuTitle>
      <MenuBubble>
        <strong>음료와 잘 어울리는</strong>
        <br />
        다양한 디저트
      </MenuBubble>
      <MenuBanner 
        bannerTitle="카페 지조 가을시즌 신메뉴" 
        title="풍요로운 가을이 만든 달콤함" 
        subTitle="청송 사과 한 잔, 보름달 한 상" 
        description="가을이 키운 달콤한 청송 사과 신메뉴와 가을을 닮은 풍요로운 보름달 신메뉴 출시! 지금 바로 가까운 메가MGC커피에서 만나보세요!"
        image={foodImage01}
        alt="가을이 키운 달콤한 청송사과 한 잔"
        >
      </MenuBanner>
      <section className="bg-white mx-auto max-w-7xl mt-[6.25rem] mobile:px-5">
        <div className="titleArea text-center">
          <p className="text-jj_24 font-light">카페 지조의 엄선된 메뉴</p>
          <h2 className="text-jj_60 font-black">JIJO MENU</h2>
          <span className="text-jj_14 font-light text-[#1c1c1b] opacity-70">※메뉴 이미지는 연출컷이라 실물과 다를 수 있습니다.</span>
        </div>

        <div className="checkboxArea border border-gray-200 p-[1.875rem] my-10">
          <p className="title text-jj_22 leading-tight pb-5 mb-5 border-b border-b-gray-200">분류보기</p>
          <Categories collection="foods" category={category} handleCategory={handleCategory} />
        </div>

        {/* <Products data={data} /> */}
        <Products {...rest} />
      </section>
    </div>
  )
}

export default Food
