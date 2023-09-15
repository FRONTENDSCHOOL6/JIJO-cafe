import useViewport from "@/hooks/useViewport";
import DesktopHeader from "./DesktopHeader";
import TabletMobileHeader from "./TabletMobileHeader";

function Header() {
  // useViewport hook을 사용한 반응형 웹
  const {Desktop, Tablet, Mobile} = useViewport();

  return (
    <>
      <Desktop>
        <DesktopHeader />
      </Desktop>
      <Tablet>
        <TabletMobileHeader />
      </Tablet>
      <Mobile>
        <TabletMobileHeader />
      </Mobile>
    </>
  );
}

export default Header;
