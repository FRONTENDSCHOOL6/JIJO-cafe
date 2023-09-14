import CloseButton from "@/components/CloseButton";
import DropDownLinkList from "@/components/DropDownLinkList";
import Hamburger from "@/components/Hamburger/Hamburger";
import JijoCafeLogoTitle from "@/components/JijoCafeLogoTitle";
import LinkList from "@/components/LinkList";
import LogoLinks from "@/components/LogoLinks";
import SignInModal from "@/components/SignInModal";
import useToggle from "@/hooks/useToggle";
import useAuthStore from "@/store/store";
import {kakaoLogout} from "@/utils/kakaoLogout";
import {AnimatePresence} from "framer-motion";
import {useRef} from "react";
import {toast} from "react-hot-toast";
import {useLocation} from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const prevPathName = useRef(null);
  //useChangePathName

  //useViewport

  const location = useLocation();

  /* 마우스 클릭에 따른 햄버거 탭과 닫기 탭 렌더링 여부를 관리하는 상태 */
  const [isToggleTabButton, setIsToggleTabButton] = useToggle(false);

  /* 마우스 접근/떠남에 따른 서브메뉴리스트 렌더링 */
  const [isDropdownVisiable, setIsDropdownVisialbe] = useToggle(false);

  /* 클릭시 로그인모달 렌더링 */
  const [isClickedSignin, setIsClickedSignin] = useToggle(false);

  /* 링크이동 시 해당 탭메뉴가 닫히는 기능 */

  /* 인증 정보에 따른 로그인 ➡️ 로그아웃으로 변경 */
  const isAuth = useAuthStore((state) => state.isAuth);

  /* 일반사용자 로그아웃 및 카카오 사용자 로그아웃 */
  const signOut = useAuthStore((state) => state.signOut);
  const handleSignOut = () => {
    toast.success("정상적으로 로그아웃 되었습니다.", {icon: "👋"});
    signOut();
    kakaoLogout();
  };

  /* 로그인 시 userName || name렌더링 */
  const user = useAuthStore((state) => state.user);

  return (
    <header
      onMouseEnter={setIsDropdownVisialbe}
      onMouseLeave={setIsDropdownVisialbe}>
      <h2 className="sr-only">JIJO-cafe Header</h2>
      <nav className={styles.nav}>
        <JijoCafeLogoTitle className={styles.cafeLogoTitle} />
        <ul className={`${styles.ul} ${isToggleTabButton && styles.showMenu}`}>
          <LinkList pageLink="/menu/drink">메뉴 소개</LinkList>
          <div className="subMenuWrap">
            {isDropdownVisiable && (
              <>
                <LinkList pageLink="/menu/drink">음료</LinkList>
                <LinkList pageLink="/menu/food">푸드</LinkList>
                <LinkList pageLink="/menu/product">상품</LinkList>
              </>
            )}
          </div>
          <LinkList pageLink="/findStore">매장</LinkList>
          <LinkList pageLink="/bbs/faq">지조소식</LinkList>
          <div>
            {isDropdownVisiable && (
              <>
                <LinkList pageLink="/bbs/notice">Notice</LinkList>
                <LinkList pageLink="/bbs/faq">FAQ</LinkList>
                <LinkList pageLink="/bbs/customer">고객센터</LinkList>
              </>
            )}
          </div>
          {isAuth ? (
            <li onClick={handleSignOut} className="cursor-pointer">
              로그아웃
            </li>
          ) : (
            <li onClick={setIsClickedSignin} className="cursor-pointer">
              로그인
            </li>
          )}
          {isClickedSignin && (
            <SignInModal
              isClickedSignin={isClickedSignin}
              setIsClickedSignin={setIsClickedSignin}
            />
          )}
          {isDropdownVisiable && (
            <LinkList pageLink="/signUp">회원가입</LinkList>
          )}

          {user && <li>{user.name || user.username}님</li>}
        </ul>
        {isToggleTabButton ? (
          <CloseButton
            fillColor="#fff"
            className="top-4 right-4 absolute z-10 cursor-pointer desktop:hidden"
            onClick={setIsToggleTabButton}
          />
        ) : (
          <Hamburger onClick={setIsToggleTabButton} />
        )}
        <LogoLinks />
      </nav>
      {/* <AnimatePresence>
        {isDropdownVisiable && <DropDownLinkList />}
      </AnimatePresence> */}
    </header>
  );
}

export default Header;
