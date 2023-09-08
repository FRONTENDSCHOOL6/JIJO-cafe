import SignInModal from "@/components/SignInModal";
import useToggle from "@/hooks/useToggle";
import styles from "./Header.module.css";
import Hamburger from "@/components/Hamburger/Hamburger";
import LinkList from "@/components/LinkList";
import JijoCafeLogoTitle from "@/components/JijoCafeLogoTitle";
import LogoLinks from "@/components/LogoLinks";
import CloseButton from "@/components/CloseButton";
import {useState} from "react";
import DropDownLinkList from "@/components/DropDownLinkList";

function Header() {
  const [isChangedStatus, setIsChangedStatus] = useToggle(false);

  const [isDropdownVisiable, setIsDropdownVisialbe] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdownVisialbe(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownVisialbe(false);
  };

  return (
    <header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className="sr-only">JIJO-cafe Header</h2>
      <nav className={styles.nav}>
        <JijoCafeLogoTitle className={styles.cafeLogoTitle} />
        <ul className={`${styles.ul} ${isChangedStatus && styles.showMenu}`}>
          <LinkList pageLink="/menu/drink" children="메뉴소개" />
          <LinkList pageLink="/findStore" children="매장" />
          <LinkList pageLink="/bbs/faq" children="지조소식" />
          <li>로그인</li>
          <LinkList pageLink="/cart" children="장바구니" />
        </ul>
        {isChangedStatus ? (
          <CloseButton
            fillColor="#fff"
            className="top-4 right-4 absolute z-10 cursor-pointer"
            onClick={setIsChangedStatus}
          />
        ) : (
          <Hamburger onClick={setIsChangedStatus} />
        )}

        <LogoLinks />
      </nav>
      {isDropdownVisiable && <DropDownLinkList />}
    </header>
  );
}

export default Header;
