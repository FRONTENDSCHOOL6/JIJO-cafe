import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import SliderImage0 from "@/assets/images/main/main_banner/slide0.png";
import SliderImage1 from "@/assets/images/main/slide1.jpg";
import SliderImage2 from "@/assets/images/main/slide2.jpg";
import SliderImage3 from "@/assets/images/main/slide3.jpg";
import SliderImage4 from "@/assets/images/main/slide4.jpg";
import SliderImage5 from "@/assets/images/main/slide5.jpg";
import "swiper/css/pagination";
import "@/styles/Carousel.css";

export default function MainCarousel() {
  const ArrayImg = [SliderImage1, SliderImage2, SliderImage3, SliderImage4, SliderImage5];

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
      {ArrayImg.map((item, el) => {
        return <SwiperSlide>{<img src={item} alt={`${el}`} className="block w-full h-screen border" />}</SwiperSlide>;
      })}
    </Swiper>
  );
}
