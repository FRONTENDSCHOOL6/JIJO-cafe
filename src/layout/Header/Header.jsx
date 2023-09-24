import useViewport from "@/hooks/useViewport";
import DesktopHeader from "./DesktopHeader";
import TabletMobileHeader from "./TabletMobileHeader";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  // useViewport hook을 사용한 반응형 웹
  const { Desktop, Tablet, Mobile } = useViewport();

  /* 클릭시 로그인모달 렌더링 */
  const [isClickedSignin, setIsClickedSignin] = useState(false);
  const handleClickSignin = () => {
    setIsClickedSignin(!isClickedSignin);
  };

  // mainpage 헤더 스타일
  const location = useLocation();
  const isFixedHeaderPage = location.pathname === "/";
  // const headerStyle = ``;

  return (
    <div className={`${isFixedHeaderPage ? "fixed" : "sticky"} flex justify-between z-50 w-full top-0`}>
      <Desktop>
        <DesktopHeader siginInView={isClickedSignin} siginViewHandler={handleClickSignin} setIsClickedSignin={setIsClickedSignin} />
      </Desktop>
      <Tablet>
        <TabletMobileHeader />
      </Tablet>
      <Mobile>
        <TabletMobileHeader />
      </Mobile>
    </div>
  );
}

export default Header;
