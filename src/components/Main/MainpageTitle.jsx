function MainpageTitle({ subHeading, mainHeading, highLight }) {
  return (
    <div className="pb-10 max-w-[500px]">
      <p className="font-light text-jj_24 mobile:text-jj_20">{subHeading}</p>
      <h3 className={`inline font-bold leading-[1.2] break-keep text-jj_60 mobile:text-jj_43 ${highLight}`}>{mainHeading}</h3>
    </div>
  );
}

export default MainpageTitle;
