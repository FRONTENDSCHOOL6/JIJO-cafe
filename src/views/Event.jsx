import EventTab from "./../components/Event/EventTab";
import PageMainTitle from "../components/PageMainTitle";
import MenuTitle from "@/components/MenuTitle";
import JiJoHelmet from "@/utils/JiJoHelmet";

function Event() {
  return (
    <div>
      <JiJoHelmet pageTitle="지조소식 - 이벤트" />
      <h1 className="sr-only">이벤트 페이지</h1>
      <MenuTitle mainMenu="지조소식" subMenu="이벤트">
        JIJO EVENT
      </MenuTitle>
      <PageMainTitle
        pageTitleText="CAFE JIJO 이벤트"
        pageSubTitleText="다양한 이벤트를 확인하고 참여해보세요!"
      />
      <div className="max-w-[1280px] m-auto tablet:px-20 mobile:px-6">
        <EventTab />
      </div>
    </div>
  );
}

export default Event;
