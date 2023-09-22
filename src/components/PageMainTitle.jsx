function PageMainTitle({pageTitleText, pageSubTitleText}) {
  return (
    <>
      <div className="text-center pb-[2.625rem] ">
        <h2 className="font-bold text-jj_43 pb-3">{pageTitleText}</h2>
        <span className="font-light text-[#1c1c1b]">{pageSubTitleText}</span>
      </div>
    </>
  );
}

export default PageMainTitle;
