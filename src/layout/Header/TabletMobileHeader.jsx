import CloseButton from "@/components/CloseButton";
import Hamburger from "@/components/Hamburger/Hamburger";
import JijoCafeLogoTitle from "@/components/JijoCafeLogoTitle";
import LinkList from "@/components/LinkList";
import useToggle from "@/hooks/useToggle";
import S from "./TabletMobileHeader.module.css";
import useAuthStore from "@/store/store";
import SignInModal from "@/components/SignInModal";
import {useState} from "react";
import {useEffect} from "react";

function TabletMobileHeader() {
  /* 마우스 클릭에 따른 햄버거 탭과 닫기 탭 렌더링 여부를 관리하는 상태 */
  const [isToggleTabButton, setIsToggleTabButton] = useToggle(false);

  /* 링크이동 시 해당 탭메뉴가 닫히는 기능 */
  const [isClickedCloseTabMenu, setIsClickedCloseTabMenu] = useState(false);
  const handleLinkClick = () => {
    setIsClickedCloseTabMenu(false);
  };

  /* 인증 정보에 따른 로그인 ➡️ 로그아웃으로 변경 */
  const isAuth = useAuthStore((state) => state.isAuth);

  /* 클릭시 로그인모달 렌더링 */
  const [isClickedSignin, setIsClickedSignin] = useState(false);

  const handleClickSignin = () => {
    setIsClickedSignin(!isClickedSignin);
  };

  return (
    <>
      <header className={S.header}>
        <JijoCafeLogoTitle />
        {isToggleTabButton ? (
          <CloseButton
            fillColor="#fff"
            className={S.closeButton}
            onClick={setIsToggleTabButton}
          />
        ) : (
          <Hamburger onClick={setIsToggleTabButton} />
        )}
        {isToggleTabButton && (
          <>
            <ul onClick={handleLinkClick} className={S.ul}>
              <div className={S.linkWrap}>
                <LinkList pageLink="/menu/drink" className={S.titleLink}>
                  메뉴 소개
                </LinkList>
                <div className={S.subLinkWrap}>
                  <LinkList pageLink="/menu/drink">음료</LinkList>
                  <LinkList pageLink="/menu/food">푸드</LinkList>
                  <LinkList pageLink="/menu/product">상품</LinkList>
                </div>
              </div>

              <div className={S.linkWrap}>
                <LinkList pageLink="/findStore" className={S.titleLink}>
                  매장
                </LinkList>
                <div className={S.subLinkWrap}>
                  <LinkList pageLink="/findStore">매장 찾기</LinkList>
                </div>
              </div>

              <div className={S.linkWrap}>
                <LinkList pageLink="/bbs/faq" className={S.titleLink}>
                  지조소식
                </LinkList>
                <div className={S.subLinkWrap}>
                  <LinkList pageLink="/bbs/notice">Notice</LinkList>
                  <LinkList pageLink="/bbs/faq">FAQ</LinkList>
                  <LinkList pageLink="/bbs/customer">고객센터</LinkList>
                </div>
              </div>

              <div className={S.linkWrap}>
                <LinkList pageLink="/cart" className={S.titleLink}>
                  장바구니
                </LinkList>
                <div className={S.subLinkWrap}>
                  <LinkList pageLink="/cart">장바구니</LinkList>
                </div>
              </div>

              <div className={S.linkWrap}>
                {isAuth ? (
                  <div className={S.titleLink}>
                    <li onClick={handleSignOut} className="cursor-pointer">
                      로그아웃
                    </li>
                  </div>
                ) : (
                  <div className={S.titleLink}>
                    <li onClick={handleClickSignin} className="cursor-pointer">
                      로그인
                    </li>
                  </div>
                )}
                <div className={S.subLinkWrap}>
                  {isAuth ? (
                    <li onClick={handleSignOut} className="cursor-pointer">
                      로그아웃
                    </li>
                  ) : (
                    <li onClick={handleClickSignin} className="cursor-pointer">
                      로그인
                    </li>
                  )}
                  {isClickedSignin && <SignInModal />}
                </div>
              </div>
            </ul>
          </>
        )}
      </header>
    </>
  );
}

export default TabletMobileHeader;
