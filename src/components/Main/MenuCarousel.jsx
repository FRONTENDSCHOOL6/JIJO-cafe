import "swiper/css";
import "swiper/css/navigation";
import "@/styles/Carousel.css";
import pb from "@/api/pocketbase";
import JijoError from "../JijoError";
import LazyImage from "@/utils/LazyImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { A11y, Navigation, Pagination, Keyboard } from "swiper/modules";

export default function MenuCarousel() {
  const { data, isError, error } = useQuery({
    queryKey: ["mainMenu"],
    queryFn: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const mainMenu = await pb.collection("beverage").getList(1, 7, {
          sort: "updated",
        });
        return { mainMenu };
      } catch (error) {
        throw error;
      }
    },
  });

  if (isError) {
    return (
      <div role="alert">
        <JijoError error={error} />
      </div>
    );
  }
  return (
    <>
      <Swiper
        modules={[Navigation, A11y, Pagination, Keyboard]}
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
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        keyboard={{ enabled: true }}
        id="menuSwiper"
      >
        {data &&
          data.mainMenu.items?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <figure>
                  <LazyImage src={getPbImageURL(item, "image")} alt="Swiper Slide" />
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
