import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { usePocketBaseFilteredData } from "@/hooks/usePocektBaseData";
import "swiper/css";
import "@/styles/Carousel.css";

export default function MenuCarousel() {
  pb.autoCancellation(false);
  const { data } = usePocketBaseFilteredData("beverage", 1, 5, 'created >= "2023-09-08 00:00:00"', "beverage");

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        onSwiper={setSwiperRef}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={2}
        autoHeight={false}
        loop={true}
        keyboard={true}
        className="menuSwiper"
      >
        {data.items?.map((item, el) => {
          return (
            <SwiperSlide key={item.id}>
              <figure>
                {<img key={item.id} src={getPbImageURL(item, "image")} alt="" />}
                <div className="titleSection">
                  <h5 key={item.id} className="text-jj_18">
                    {item.title}
                  </h5>
                  <figcaption key={item.id}>{item.description}</figcaption>
                </div>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
