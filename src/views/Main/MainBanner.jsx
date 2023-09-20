import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, Keyboard} from "swiper/modules";
import "swiper/css/pagination";
import "@/styles/Carousel.css";
import pb from "@/api/pocketbase";
import {getPbImageURL} from "@/utils/getPbImageURL";
import {usePocektBaseDataList} from "@/hooks/usePocektBaseData";
import {useState, useEffect} from "react";
import JijoSpinner from "@/components/JijoSpinner";
import LazyImage from "@/utils/LazyImage";

export default function MainBanner() {
  pb.autoCancellation(false);
  const {data, status} = usePocektBaseDataList("mainBanner");
  const [mobileView, setMobileView] = useState(window.innerWidth < 760);

  const screenChange = (e) => {
    const matches = e.matches; //현재 화면의 너비와 미디어쿼리의 범위의 일치 여부를 boolean 값으로 반환
    setMobileView(matches);
  };

  useEffect(() => {
    let matchMedia = window.matchMedia("screen and (max-width:760px)"); // 미디어 쿼리 문자열의 분석 결과를 나타내는 객체를 반환하는 메서드
    matchMedia.addEventListener("change", screenChange);
    return () => matchMedia.removeEventListener("change", screenChange);
  }, []);

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
      keyboard={{enabled: true}}
      grabCursor={true}
      id="mainSwiper">
      {mobileView
        ? data &&
          data?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <LazyImage
                  src={getPbImageURL(item, "mobileImage")}
                  alt={item.title}
                  className="block object-cover w-full h-screen"
                />

                {/* <img src={getPbImageURL(item, "mobileImage")} alt={item.title} className="block object-cover w-full h-screen" /> */}
              </SwiperSlide>
            );
          })
        : data &&
          data?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <LazyImage
                  src={getPbImageURL(item, "pcTabletImage")}
                  alt={item.title}
                  className="block object-cover w-full h-screen"
                />
                {/* <img
                  src={getPbImageURL(item, "pcTabletImage")}
                  alt={item.title}
                  className="block object-cover w-full h-screen"
                /> */}
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}
