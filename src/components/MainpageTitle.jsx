import React from "react";

function MainpageTitle({ subHeading, mainHeading, highLight }) {
  return (
    <>
      <h3 className="font-light text-jj_24 mobile:text-jj_20">{subHeading}</h3>
      <div className="pb-6 border-black ">
        <p className={`relative inline-block pt-3 pb-3 font-bold leading-[1.2] break-keep text-jj_60 mobile:text-jj_43 ${highLight}`}>{mainHeading}</p>
      </div>
    </>
  );
}

export default MainpageTitle;
