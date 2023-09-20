import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { usePocketBaseFilteredData } from "@/hooks/usePocektBaseData";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/Carousel.css";

export default function MenuCarousel() {
  pb.autoCancellation(false);
  const { data } = usePocketBaseFilteredData("beverage", 1, 5, 'created >= "2023-09-08 00:00:00"', "beverage");

  return (
    <>
      <Swiper
        modules={[Navigation, A11y, Pagination]}
        navigation
        a11y={{
          prevSlideMessage: "이전 슬라이드",
          nextSlideMessage: "다음 슬라이드",
        }}
        grabCursor={true}
        spaceBetween={15}
        autoHeight={true}
        breakpoints={{
          390: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        id="menuSwiper"
      >
        {data &&
          data.items?.map((item, el) => {
            return (
              <SwiperSlide key={item.id}>
                <figure>
                  {<img src={getPbImageURL(item, "image")} alt="" />}
                  <div className="menutitleSection">
                    <h5 className="font-medium text-jj_24 text-deepDarkGray mobile:text-jj_16 mobile:textEllipsis">{item.title}</h5>
                    <figcaption className="mt-5 text-gray-400 mobile:text-jj_13 text-jj_16 max-w-[21.875rem] mobile:textEllipsis">
                      {item.description}
                    </figcaption>
                  </div>
                </figure>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
