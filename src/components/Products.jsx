import cart from "@/assets/images/menu/cart.svg"
import { getPbImageURL } from "@/utils/getPbImageURL"
import { numberWithComma } from "@/utils/numberWithComma"
import { useState } from "react"
import useCartStore from "@/store/cartStore"
import ProductDialog from "./ProductDialog"
import LazyImage from "@/utils/LazyImage"
import toast from "react-hot-toast"
import { NavLink } from "react-router-dom"

function Products({ data, page, gotoFirstPage, gotoLastPage, gotoPreviousPage, gotoNextPage, changePage }) {
  return (
    <>
      <div className="itemWrap">
        <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mobile:grid-cols-2">
          {data?.items?.map((item) => (
            <ProductItem key={item.id} item={item} category={item.category} />
          ))}
        </ul>
      </div>
      <ul className="flex gap-6 justify-center my-20">
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
        {data?.totalPages &&
          Array(data.totalPages)
            .fill(null)
            .map((_, index) => {
              const pageIndex = index + 1
              return (
                <li key={index}>
                  <NavLink
                    to="#page"
                    onClick={(e) => changePage(pageIndex, e)}
                    className={() => {
                      const baseClassNames = "grid place-content-center  px-4 py-2 border border-transparent rounded text-slate-500 hover:bg-[#C7B08E]"
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
          <NavLink
            to="#next"
            className={`disabled:cursor-not-allowed grid place-content-center  px-4 py-2  border border-transparent rounded bg-primary hover:bg-[#C7B08E] ${page === data?.totalPages ? "disabled" : ""}`}
            onClick={gotoNextPage}
            aria-label="다음 페이지로 이동"
            title="다음 페이지로 이동"
          >
            다음
          </NavLink>
        </li>
        <li>
          <NavLink to="#last" className={`disabled:cursor-not-allowed grid place-content-center px-4 py-2 border border-transparent rounded bg-primary hover:bg-[#C7B08E] ${page === data?.totalPages ? "disabled" : ""}`} onClick={gotoLastPage} aria-label="마지막으로 이동" title="마지막으로 이동">
            마지막
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Products

function ProductItem({ item, ...restProps }) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  /* Cart 배열에 새로운 아이템 */
  const add = useCartStore((state) => state.add)
  const handleAddToCart = () => {
    add(item)
    toast.success(`장바구니에 ${item.title}가 담겼습니다!`, {
      icon: "🛒",
    })
  }

  return (
    <li key={item.id} className="relative cursor-pointer" {...restProps}>
      <div>
        <div className="imgFrame relative w-80 h-80 overflow-hidden" onClick={handleClick}>
          <LazyImage src={item.imageURL ? item.imageURL : getPbImageURL(item, "image")} className="w-full transition-all ease-in hover:scale-110" alt={item.title} />
          {isClicked && <ProductDialog key={item.id} item={item} />}
        </div>
        <div className="text py-6">
          <p className="title text-jj_22 pb-5 mb-[.3125rem] border-b overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</p>
          <span className="price text-[#1c1c1b] opacity-70 text-jj_14 leading-none">{numberWithComma(item.price)}</span>
          <p className="desc text-[#1c1c1b] opacity-70 text-jj_14 mobile:text-sm mt-5 overflow-hidden text-ellipsis line-clamp-2">{item.description}</p>
        </div>
      </div>
      <button
        onClick={() => {
          handleAddToCart(item)
        }}
        className="absolute bottom-[11.25rem] right-0"
      >
        <LazyImage src={cart} alt="장바구니 아이콘" />
      </button>
    </li>
  )
}
