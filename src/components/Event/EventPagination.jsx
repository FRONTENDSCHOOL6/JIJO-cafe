import { NavLink } from "react-router-dom";

function EventPagination({ data, page, gotoFirstPage, gotoLastPage, gotoPreviousPage, gotoNextPage, changePage }) {
  return (
    <ul className="flex justify-center gap-6 my-8">
      <li>
        <NavLink
          to="#first"
          className="grid place-content-center  px-4 py-2 border border-transparent rounded bg-primary hover:bg-[#C7B08E]"
          onClick={gotoFirstPage}
          aria-label="처음으로 이동"
          title="처음으로 이동"
        >
          처음
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#prev"
          className="grid place-content-center  px-4 py-2  border border-transparent rounded bg-primary hover:bg-[#C7B08E]"
          onClick={gotoPreviousPage}
          disabled={page === 1}
          aria-label="이전 페이지로 이동"
          title="이전 페이지로 이동"
        >
          이전
        </NavLink>
      </li>
      {data?.totalPages &&
        Array(data.totalPages)
          .fill(null)
          .map((_, index) => {
            const pageIndex = index + 1;
            return (
              <li key={index}>
                <NavLink
                  to="#page"
                  onClick={(e) => changePage(pageIndex, e)}
                  className={() => {
                    const baseClassNames = "grid place-content-center  px-4 py-2 border border-transparent rounded text-slate-500 hover:bg-[#C7B08E]";
                    const isActive = page - 1 === index;
                    return !isActive ? baseClassNames : `${baseClassNames} font-black border-current text-slate-600 hover:border-current`;
                  }}
                >
                  {pageIndex}
                </NavLink>
              </li>
            );
          })}
      <li>
        <NavLink
          to="#next"
          className={`disabled:cursor-not-allowed grid place-content-center  px-4 py-2  border border-transparent rounded bg-primary hover:bg-[#C7B08E] ${
            page === data?.totalPages ? "disabled" : ""
          }`}
          onClick={gotoNextPage}
          aria-label="다음 페이지로 이동"
          title="다음 페이지로 이동"
        >
          다음
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#last"
          className={`disabled:cursor-not-allowed grid place-content-center px-4 py-2 border border-transparent rounded bg-primary hover:bg-[#C7B08E] ${
            page === data?.totalPages ? "disabled" : ""
          }`}
          onClick={gotoLastPage}
          aria-label="마지막으로 이동"
          title="마지막으로 이동"
        >
          마지막
        </NavLink>
      </li>
    </ul>
  );
}

export default EventPagination;
