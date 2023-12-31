function PageMainTitle({pageTitleText, pageSubTitleText}) {
  return (
    <>
      <div className="text-center pb-[2.625rem]">
        <h2 className="font-bold font-Roboto text-jj_43 pb-3 mobile:text-3xl">
          {pageTitleText}
        </h2>
        <span className="font-light text-[#1c1c1b]">{pageSubTitleText}</span>
      </div>
    </>
  );
}

export default PageMainTitle;
