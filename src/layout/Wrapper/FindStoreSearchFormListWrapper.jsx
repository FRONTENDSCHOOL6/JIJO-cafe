function FindStoreSearchFormListWrapper({children}) {
  return (
    <>
      <div className="searchFormListWrap bg-white pb-[15rem] text-center pt-4 h-[20rem] overflow-scroll">
        {children}
      </div>
    </>
  );
}

export default FindStoreSearchFormListWrapper;
