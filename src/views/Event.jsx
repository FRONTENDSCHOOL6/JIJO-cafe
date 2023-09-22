import JiJoHelmet from "./../utils/JiJoHelmet";
import MenuTitle from "./../components/MenuTitle";
import EventTab from "./../components/Event/EventTab";
import PageMainTitle from "../components/PageMainTitle";

function Event() {
  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - 이벤트" />
      <h1 className="sr-only">이벤트 페이지</h1>
      <MenuTitle title="JIJO NEWS" mainMenu="지조소식" subMenu="이벤트" mainLink="/bbs/faq" subLink="/bbs/event">
        JIJO EVENT
      </MenuTitle>
      <div className="max-w-[80rem] mt-20 mb-24 m-auto tablet:px-14 mobile:px-5">
        <PageMainTitle pageTitleText="CAFE JIJO 이벤트" pageSubTitleText="다양한 이벤트를 확인하고 참여해보세요!" />
        <EventTab />
      </div>
    </>
  );
}

export default Event;
