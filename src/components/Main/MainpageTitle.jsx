import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MainText, SubText } from "./MainSubText";

function MainpageTitle({ subHeading, mainHeading, highLight, children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <p className="font-light text-jj_24 mobile:text-jj_20">{subHeading}</p>
      <h3
        className={`relative inline-block font-bold leading-[1.2] pt-3 pb-4 break-keep text-jj_60 mobile:text-jj_43 ${highLight}`}
        data-aos="fade-up"
        data-aos-delay="10"
        data-aos-duration="800"
      >
        {mainHeading}
      </h3>
      <MainText />
      <SubText />
    </>
  );
}

export default MainpageTitle;
