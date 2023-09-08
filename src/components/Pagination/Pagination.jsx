import React from "react";

function Pagination({ total, postsPerPage, currentPage, setcurrentPage, offset }) {
  const PagesNumber = Math.ceil(total / postsPerPage);

  function handleFirstButton() {
    setcurrentPage(offset * 0 + 1);
  }
  function handlePrevButton() {
    setcurrentPage(currentPage - 1);
  }
  function handleNextButton() {
    setcurrentPage(currentPage + 1);
  }
  function handleLastButton() {
    setcurrentPage(PagesNumber);
  }

  return (
    <>
      <button className="PaginationButton" onClick={handleFirstButton} disabled={currentPage === 1}>
        처음
      </button>
      <button className="PaginationButton" onClick={handlePrevButton} hidden={currentPage === 1}>
        이전
      </button>
      {Array(PagesNumber)
        .fill()
        .map((_, i) => (
          <button
            className={`w-[2.625rem] h-[2.5rem] border rounded-[4px] ml-[0.375rem] ${i + 1 === currentPage ? "bg-primary" : ""}`}
            key={i + 1}
            onClick={() => {
              setcurrentPage(i + 1);
            }}
            aria-current={currentPage === i + 1 ? "currentPage" : undefined}
          >
            {i + 1}
          </button>
        ))}
      <button className="PaginationButton" onClick={handleNextButton} hidden={currentPage === PagesNumber}>
        다음
      </button>
      <button className="PaginationButton" onClick={handleLastButton}>
        마지막
      </button>
    </>
  );
}

export default Pagination;
