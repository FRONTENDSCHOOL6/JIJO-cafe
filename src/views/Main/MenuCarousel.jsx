import { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { usePocketBaseFilteredData } from "@/hooks/usePocektBaseData";
import "swiper/css";
import "@/styles/Carousel.css";
import { PrevButton, NextButton } from "@/styles/NevigationArrowButton";

export default function MenuCarousel() {
  pb.autoCancellation(false);
  const { data } = usePocketBaseFilteredData("beverage", 1, 5, 'created >= "2023-09-08 00:00:00"', "beverage");

  const sliderRef = useRef(null);
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        // ref={sliderRef}
        modules={[Navigation]}
        // navigation={{
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={2}
        autoHeight={false}
        loop={true}
        keyboard={true}
        className="menuSwiper"
        // onSwiper={(swiper) => {
        //   setTimeout(() => {
        //     swiper.params.navigation.prevEl = navigationPrevRef.current;
        //     swiper.params.navigation.nextEl = navigationNextRef.current;
        //   });
        // }}
      >
        {data &&
          data.items?.map((item, el) => {
            return (
              <SwiperSlide key={item.id}>
                <figure>
                  {<img src={getPbImageURL(item, "image")} alt="" />}
                  <div className="titleSection">
                    <h5 className="text-jj_18">{item.title}</h5>
                    <figcaption>{item.description}</figcaption>
                  </div>
                </figure>
              </SwiperSlide>
            );
          })}
        <div className="absolute top-[10%] right-[330px] borderborder-red-500">
          {/* <button ref={navigationPrevRef} onClick={handlePrev} className="buttonCss" />
          <button ref={navigationNextRef} onClick={handleNext} className="buttonCss" /> */}
          {/* <PrevButton />
          <NextButton /> */}
        </div>
      </Swiper>
    </>
  );
}
