import { useState, useEffect } from "react";
// import { FullPage, Slide } from "react-full-page";
import { Helmet } from "react-helmet-async";
import MainBanner from "./MainBanner";
import MainMenu from "./MainMenu";
import MainShopingMall from "./MainShopingMall";
import MainEvent from "./MainEvent";
import MainStore from "./MainStore";
import Footer from "@/layout/Footer/Footer";

function Main() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      // 페이지를 벗어날 때 스타일 제거
      document.body.style.overflow = "auto";
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const handleScroll = (e) => {
    // 세로 스크롤 크기를 담은 변수. 위로 스크롤되면 음수, 아래로 스크롤되면 양수를 반환하고, 멈춰있을 땐 0을 반환
    const deltaY = e.deltaY;
    if (deltaY > 0 && currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else if (deltaY < 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentPage]);

  return (
    <div>
      <Helmet>
        <title>카페지조-메인페이지</title>
      </Helmet>
      <h1 className="sr-only">메인페이지</h1>
      <section className="fullpage">
        <section className={`section`}>
          <MainBanner />
        </section>
        <section className={`section`}>
          <MainMenu />
        </section>
        <section className={`section`}>
          <MainShopingMall />
        </section>
        <section className={`section`}>
          <MainStore />
        </section>
        <section className={`section`}>
          <MainEvent />
        </section>
        {/* 임시 */}
        <section className={`section`}>
          <Footer />
        </section>
      </section>
    </div>
  );
}

// class Main extends Component {
//   render() {
//     return (
//       <FullPage controls controlsProps={{ className: "fullpageControl" }}>
//         <Helmet>
//           <title>카페지조-메인페이지</title>
//         </Helmet>
//         <h1 className="sr-only">메인페이지</h1>
//         <Slide>
//           <MainBanner />
//         </Slide>
//         <Slide>
//           <MainMenu />
//         </Slide>
//         <Slide>
//           <MainShopingMall />
//         </Slide>
//         <Slide>
//           <MainStore />
//         </Slide>
//         <Slide>
//           <MainEvent />
//         </Slide>
//       </FullPage>
//     );
//   }
// }

export default Main;
