function MainpageTitle({ subHeading, mainHeading, highLight }) {
  return (
    <div className="pb-10 ">
      <p className="font-light text-jj_24 mobile:text-jj_18">{subHeading}</p>
      <h3 className={`inline font-Roboto font-bold leading-[1.2] break-keep text-jj_60 mobile:text-jj_34 ${highLight}`}>{mainHeading}</h3>
    </div>
  );
}

export default MainpageTitle;
