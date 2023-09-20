import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, Keyboard} from "swiper/modules";
import "swiper/css/pagination";
import "@/styles/Carousel.css";
import pb from "@/api/pocketbase";
import {getPbImageURL} from "@/utils/getPbImageURL";
import {usePocektBaseDataList} from "@/hooks/usePocektBaseData";
import LazyImage from "@/utils/LazyImage";

export default function ShopingMallCarousel() {
  pb.autoCancellation(false);
  const {data} = usePocektBaseDataList("products");

  return (
    <Swiper
      modules={[Keyboard, Pagination]}
      a11y={{
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
      }}
      pagination={{clickable: true}}
      spaceBetween={10}
      slidesPerView={3}
      keyboard={{enabled: true}}
      grabCursor={true}
      id="shopingMallSwiper">
      {data &&
        data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {
                <div className="bg-white rounded-2xl">
                  <LazyImage
                    src={getPbImageURL(item, "image")}
                    alt={item.title}
                    className="block object-cover w-full h-auto rounded-2xl"
                  />
                  <div className="p-3 shadow-lg bg-slate-200 rounded-b-2xl">
                    <h5 className="overflow-hidden font-medium text-jj_24 text-ellipsis break-keep line-clamp-1">
                      {item.title}
                    </h5>
                    <del className="block text-gray-400 text-jj-18">
                      {item.price}
                    </del>
                    <b className="text-jj_20">회원전용</b>
                  </div>
                </div>
              }
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
