import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "@/styles/Carousel.css";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { usePocektBaseDataList } from "@/hooks/usePocektBaseData";

export default function MainBanner() {
  pb.autoCancellation(false);
  const { data } = usePocektBaseDataList("mainBanner");

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      loop={true}
      keyboard={true}
      grabCursor={true}
      className="mainSwiper"
    >
      {data &&
        data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {<img src={getPbImageURL(item, "pcTabletImage")} alt={item.title} className="block object-cover w-full h-screen" />}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
