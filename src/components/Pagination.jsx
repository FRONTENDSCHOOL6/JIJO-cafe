export default function Pagination({ dataLength, currentPage, postsPerPage, setCurrentPage }) {
  const totalPage = Math.ceil(dataLength / postsPerPage);

  const handleFirstButton = () => {
    setCurrentPage(currentPage * 0 + 1);
  };
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleLastButton = () => {
    setCurrentPage(totalPage);
  };

  return (
    <div className="flex justify-center w-full mt-6 p-10">
      <button className="PaginationButton" onClick={handleFirstButton} disabled={currentPage === 1}>
        처음
      </button>
      <button className="PaginationButton" onClick={handlePrevButton} hidden={currentPage === 1}>
        이전
      </button>
      {Array(totalPage)
        .fill()
        .map((_, i) => (
          <button
            className={`w-[2.625rem] h-[2.5rem] border rounded-[4px] ml-[0.375rem] ${i + 1 === currentPage ? "bg-primary" : ""}`}
            key={i + 1}
            onClick={() => {
              setCurrentPage(i + 1);
            }}
            aria-current={currentPage === i + 1 ? "currentPage" : undefined}
          >
            {i + 1}
          </button>
        ))}
      <button className="PaginationButton" onClick={handleNextButton} hidden={currentPage === totalPage}>
        다음
      </button>
      <button className="PaginationButton" onClick={handleLastButton}>
        마지막
      </button>
    </div>
  );
}
