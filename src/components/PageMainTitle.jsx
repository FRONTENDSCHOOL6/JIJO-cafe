function PageMainTitle({pageTitleText, pageSubTitleText}) {
  return (
    <>
      <div className="text-center">
        <h2 className="font-bold text-[2.25rem] pb-3">{pageTitleText}</h2>
        <span className="pb-[2.625rem] font-light text-[#1c1c1b]">
          {pageSubTitleText}
        </span>
      </div>
    </>
  );
}

export default PageMainTitle;
