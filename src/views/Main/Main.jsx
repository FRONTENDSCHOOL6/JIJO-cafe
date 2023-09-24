import { Helmet } from "react-helmet-async";
import MainBanner from "./MainBanner";
import MainMenu from "./MainMenu";
import MainShopingMall from "./MainShopingMall";
import MainEvent from "./MainEvent";
import MainStore from "./MainStore";
import Footer from "@/layout/Footer/Footer";

function Main() {
  return (
    <>
      <Helmet>
        <title>카페지조-메인페이지</title>
      </Helmet>
      <h1 className="sr-only">메인페이지</h1>
      <div className="fullpage">
        <section className="section">
          <MainBanner className="" />
        </section>
        <section className="section">
          <MainMenu className="h-screen grid grid-cols-2 overflow-hidden  place-content-center bg-white mobile:grid-cols-1 mobile:grid-rows-2 tablet:pt-[7%] mobile:py-[10%]" />
        </section>
        <section className="section">
          <MainShopingMall className="grid items-center h-screen grid-cols-2 overflow-hidden mobile:grid-cols-1 mobile:grid-rows-2 mobile:py-20 bg-primary" />
        </section>
        <section className="section">
          <MainStore className="relative grid justify-between h-screen grid-cols-2 overflow-hidden mobile:grid-cols-1 mobile:grid-rows-2" />
        </section>
        <section className="section">
          <MainEvent className="grid grid-cols-1 place-content-center place-items-center h-screen overflow-hidden mobile:pt-[10%] " />
        </section>
        <section className="section">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Main;
