import CloseButton from "@/components/CloseButton";
import DropDownLinkList from "@/components/DropDownLinkList";
import Hamburger from "@/components/Hamburger/Hamburger";
import JijoCafeLogoTitle from "@/components/JijoCafeLogoTitle";
import LinkList from "@/components/LinkList";
import LogoLinks from "@/components/LogoLinks";
import SignInModal from "@/components/SignInModal";
import useToggle from "@/hooks/useToggle";
import {useState} from "react";
import styles from "./Header.module.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Header() {
  /* 마우스 접근/떠남에 따른 서브메뉴리스트 렌더링 */
  const [isChangedStatus, setIsChangedStatus] = useToggle(false);
  const [isDropdownVisiable, setIsDropdownVisialbe] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdownVisialbe(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownVisialbe(false);
  };

  /* 클릭시 로그인모달 렌더링 */
  const [isClickedSignin, setIsClickedSignin] = useState(false);
  const handleClickSignIn = () => {
    setIsClickedSignin(!isClickedSignin);
  };

  /* 링크이동 시 해당 탭메뉴가 닫히는 기능 */

  return (
    <header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className="sr-only">JIJO-cafe Header</h2>
      <nav className={styles.nav}>
        <JijoCafeLogoTitle className={styles.cafeLogoTitle} />
        <ul className={`${styles.ul} ${isChangedStatus && styles.showMenu}`}>
          <LinkList pageLink="/menu/drink" children="메뉴소개" />
          <LinkList pageLink="/findStore" children="매장" />
          <LinkList pageLink="/bbs/faq" children="지조소식" />
          <li onClick={handleClickSignIn} className="cursor-pointer">
            로그인
          </li>
          {isClickedSignin && <SignInModal />}
          <LinkList pageLink="/cart" children="장바구니" />
        </ul>
        {isChangedStatus ? (
          <CloseButton
            fillColor="#fff"
            className="top-4 right-4 absolute z-10 cursor-pointer desktop:hidden"
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
