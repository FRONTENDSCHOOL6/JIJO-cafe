import pb from "@/api/pocketbase"
import { Link } from "react-router-dom"
import yyyymmddDate from "@/utils/yyyymmddDate"
import { NavLink } from "react-router-dom"
// import usePagination from "@/hooks/usePagination"
// import { getPbImageURL } from "@/utils/getPbImageURL"

function TableListPagination({ collection, field, data, page, gotoFirstPage, gotoLastPage, gotoPreviousPage, gotoNextPage, changePage }) {
  // 조회수 증가
  const handleUpViews = async (item) => {
    await pb.collection(`${collection}`).update(item.id, { [`${field}Views`]: item[`${field}Views`] + 1 })
  }
  console.log(data?.totalPages)

  return (
    <>
      <table className="min-w-max w-full table-auto bg-white my-6 border-t text-deepDarkGray">
        <thead>
          <tr className="text-jj_15 leading-normal">
            <th className="mobile:hidden py-3 px-6 items-center">번호</th>
            <th className="py-3 px-6 ">제목</th>
            <th className="mobile:hidden py-3 px-6 ">글쓴이</th>
            <th className="py-3 px-6 text-center">날짜</th>
            <th className="mobile:hidden py-3 px-6 ">조회</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light border-t">
          {data &&
            data.items?.map((item, index) => {
              return (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 whitespace-nowrap text-center mobile:hidden">
                    <span className=" font-medium">{data.items.length - index}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <Link to={`/bbs/${field}/detail/${item.id}`}>
                      <p
                        className="text-deepDarkGray"
                        onClick={() => {
                          handleUpViews(item)
                        }}
                      >
                        {item[field + "Title"]}
                      </p>
                    </Link>
                  </td>
                  <td className="py-3 px-6 mobile:hidden text-center">
                    <p className="text-deepDarkGray"> {item[field + "Writer"]}</p>
                  </td>
                  <td className="py-3 px-6 text-center text-deepDarkGray">
                    <time>{yyyymmddDate(item.created)}</time>
                  </td>
                  <td className=" mobile:hidden py-3 px-6 text-center text-deepDarkGray">
                    <span>{item[field + "Views"]}</span>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
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

export default TableListPagination
