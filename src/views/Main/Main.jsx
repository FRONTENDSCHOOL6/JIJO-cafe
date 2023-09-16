// import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
// import PostItem from "../PostItem";
import MainBanner from "./MainBanner";
import MainMenu from "./MainMenu";
import MainShopingMall from "./MainShopingMall";
import MainEvent from "./MainEvent";
import MainStore from "./MainStore";
// import "@/styles/Main.module.css";

const DIVIDER_HEIGHT = 5;

function Main() {
  return (
    <div>
      <Helmet>
        <title>메인페이지</title>
      </Helmet>
      <h1 className="sr-only">메인페이지</h1>
      <MainBanner />
      <MainMenu />
      <MainShopingMall />
      <MainStore />
      <MainEvent />
    </div>
  );
}

export default Main;
