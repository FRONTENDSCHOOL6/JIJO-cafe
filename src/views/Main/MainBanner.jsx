import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css/pagination";
import "@/styles/Carousel.css";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { usePocektBaseDataList } from "@/hooks/usePocektBaseData";
import { useState, useEffect } from "react";

export default function MainBanner() {
  pb.autoCancellation(false);
  const { data } = usePocektBaseDataList("mainBanner");
  const [mediaQuery, setMediaQuery] = useState(window.innerWidth < 760);

  const screenChange = (e) => {
    const matches = e.matches;
    setMediaQuery(matches);
  };

  useEffect(() => {
    let matchMedia = window.matchMedia("screen and (max-width:760px)");
    matchMedia.addEventListener("change", screenChange);
    return () => matchMedia.removeEventListener("change", screenChange);
  }, []);
  console.log(data);

  return (
    <Swiper
      modules={[Pagination, Autoplay, Keyboard]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      keyboard={{ enabled: true }}
      grabCursor={true}
      id="mainSwiper"
    >
      {mediaQuery
        ? data &&
          data?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={getPbImageURL(item, "mobileImage")} alt={item.title} className="block object-fill w-full h-screen" />
              </SwiperSlide>
            );
          })
        : data &&
          data?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={getPbImageURL(item, "pcTabletImage")} alt={item.title} className="block object-fill w-full h-screen" />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}
