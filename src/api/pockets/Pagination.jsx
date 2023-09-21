import usePagination from "@/hooks/usePagination"
import { NavLink } from "react-router-dom"
import { getPbImageURL } from "@/utils/getPbImageURL"
import cartImage from "@/assets/images/menu/cart.svg" // 상대 경로를 사용하여 이미지 import
import { numberWithComma } from "@/utils/numberWithComma"
import { useQueryGetProducts, useQueryGetFoods, useQueryGetBeverage, useQueryGetNotices, useQueryGetEvents } from "@/api/pockets/useQueryPocketBase"
import { getProducts, getFoods, getBeverage, getNotices, getEvents } from "@/api/pockets"

function Pagination() {
  const { isLoading, error, page, data, gotoFirstPage, gotoLastPage, gotoPreviousPage, gotoNextPage, changePage } = usePagination({
    perPage: 4,
    queryFn: getProducts,
    useQueryPocketBase: useQueryGetProducts,
    collections: "products",
  })

  if (isLoading) {
    return <div className="flex justify-center items-center p-8 min-h-[486px]">로딩 중...</div>
  }

  if (error) {
    return (
      <div role="alert" className="flex justify-center items-center p-8 min-h-[420px]">
        {error.toString()}
      </div>
    )
  }

  return (
    <>
      {/* 각 페이지 JSX 보여줄 리스트  */}
      <ul className="flex gap-3 justify-center p-9 min-h-[398px]">
        {data.items?.map((item) => {
          // console.log(data.items)
          const imageSource = getPbImageURL(item, "image")
          // console.log(imageSource)
          return (
            <div key={item.id} className="relative cursor-pointer">
              <div className="imgFrame relative w-80 h-80 overflow-hidden">
                <img src={imageSource} className="w-full transition-all ease-in hover:scale-110" alt={item.title} />
              </div>
              <a href="/cart">
                <img src={cartImage} className="absolute bottom-0 right-0" alt="Cart" />
              </a>
              <div className="text py-6">
                <p className="title text-jj_22 pb-5 mb-[.3125rem] border-b overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</p>
                <span className="price text-[#1c1c1b] opacity-70 text-jj_14 leading-none">{numberWithComma(item.price)}</span>
                <p className="desc text-[#1c1c1b] opacity-70 text-jj_14 mobile:text-sm mt-5 overflow-hidden text-ellipsis line-clamp-2">{item.description}</p>
              </div>
            </div>
          )
        })}
      </ul>

      {/* 페이지네이션  <- 1,2,3, -> */}
      <ul className="flex gap-6 justify-center my-8">
        <li>
          <NavLink to="#first" className="grid place-content-center  px-4 py-2 border border-transparent rounded bg-primary hover:bg-[#C7B08E]" onClick={gotoFirstPage} aria-label="처음으로 이동" title="처음으로 이동">
            처음
          </NavLink>
        </li>
        <li>
          <NavLink to="#prev" className="grid place-content-center  px-4 py-2  border border-transparent rounded bg-primary hover:bg-[#C7B08E]" onClick={gotoPreviousPage} disabled={page === 1} aria-label="이전 페이지로 이동" title="이전 페이지로 이동">
            이전
          </NavLink>
        </li>
        {Array(data.totalPages)
          .fill(null)
          .map((_, index) => {
            const pageIndex = index + 1
            return (
              <li key={index}>
                <NavLink
                  to="#page"
                  onClick={(e) => changePage(pageIndex, e)}
                  className={() => {
                    const baseClassNames = "grid place-content-center  px-4 py-2 border border-transparent rounded text-slate-500hove r:bg-[#C7B08E]"
                    const isActive = page - 1 === index

                    return !isActive ? baseClassNames : `${baseClassNames} font-black border-current text-slate-600 hover:border-current`
                  }}
                >
                  {pageIndex}
                </NavLink>
              </li>
            )
          })}
        <li>
          <NavLink to="#next" className="disabled:cursor-not-allowed grid place-content-center  px-4 py-2  border border-transparent rounded bg-primary hover:bg-[#C7B08E]" onClick={gotoNextPage} disabled={page === data.totalPages} aria-label="다음 페이지로 이동" title="다음 페이지로 이동">
            다음
          </NavLink>
        </li>
        <li>
          <NavLink to="#last" className="disabled:cursor-not-allowed grid place-content-center px-4 py-2 border border-transparent rounded bg-primary hover:bg-[#C7B08E]" onClick={gotoLastPage} aria-label="마지막으로 이동" title="마지막으로 이동">
            마지막
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Pagination
