import "swiper/css/pagination";
import "@/styles/Carousel.css";
import pb from "@/api/pocketbase";
import LazyImage from "@/utils/LazyImage";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import JijoSpinner from "@/components/JijoSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import JijoError from "./../../components/JijoError";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export default function MainBanner({ className }) {
  const [mobileView, setMobileView] = useState(window.innerWidth < 760);

  const screenChange = (e) => {
    const matches = e.matches; //현재 화면의 너비와 미디어쿼리의 범위의 일치 여부를 boolean 값으로 반환
    setMobileView(matches);
  };

  useEffect(() => {
    let matchMedia = window.matchMedia("screen and (max-width:760px)"); // 미디어 쿼리 문자열의 분석 결과를 나타내는 객체를 반환하는 메서드
    matchMedia.addEventListener("change", screenChange);
    return () => matchMedia.removeEventListener("change", screenChange);
  }, [mobileView]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["mainBanner"],
    queryFn: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const mainBanner = await pb.collection("mainBanner").getFullList({
          sort: "-created",
        });
        return { mainBanner };
      } catch (error) {
        throw error;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="relative h-screen">
        <JijoSpinner className="h-screen" />
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert">
        <JijoError error={error} />
      </div>
    );
  }

  return (
    <Swiper
      modules={[Pagination, Autoplay, Keyboard]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      keyboard={{ enabled: true }}
      grabCursor={true}
      loop={true}
      id="mainSwiper"
      className={`${className}`}
    >
      {mobileView
        ? data &&
          data.mainBanner?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <LazyImage src={getPbImageURL(item, "mobileImage")} alt={item.title} className="block object-cover w-full h-screen" />
              </SwiperSlide>
            );
          })
        : data &&
          data.mainBanner?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <LazyImage src={getPbImageURL(item, "pcTabletImage")} alt={item.title} className="block object-cover w-full h-screen" />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}
