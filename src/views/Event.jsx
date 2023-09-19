import pb from "@/api/pocketbase";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import EventTab from "./../components/Event/EventTab";
import PageMainTitle from "../components/PageMainTitle";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { usePocektBaseDataList } from "@/hooks/usePocektBaseData";

function Event() {
  pb.autoCancellation(false);
  const { data } = usePocektBaseDataList("events");

  return (
    <div>
      <Helmet>
        <title>지조소식 - 이벤트</title>
      </Helmet>
      <h1 className="sr-only">이벤트 페이지</h1>
      <div className="mb-24 bg-secondary p-jj_100">
        <div className="mx-auto text-center max-w-7xl">
          <p className="font-thin text-white text-jj_24 tablet:text-xl">JIJO NEWS</p>
          <h2 className="font-black text-primary font-Roboto text-jj_60 tablet:text-jj_50">JIJO EVENT</h2>
          <div className="breadCrumbs">
            <ul className="font-thin text-white">
              <li className="inline-block">
                <a href="/">
                  홈<span className="mx-2">&gt;</span>
                </a>
              </li>
              <li className="inline-block">
                <a href="">
                  지조소식<span className="mx-2">&gt;</span>
                </a>
              </li>
              <li className="inline-block">
                <a href="">이벤트</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageMainTitle pageTitleText="CAFE JIJO 이벤트" pageSubTitleText="다양한 이벤트를 확인하고 참여해보세요!" />
      <div className="max-w-[1280px] m-auto tablet:px-20 mobile:px-6">
        <EventTab />
      </div>
    </div>
  );
}

export default Event;
