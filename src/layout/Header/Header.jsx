import CloseButton from "@/components/CloseButton";
import DropDownLinkList from "@/components/DropDownLinkList";
import Hamburger from "@/components/Hamburger/Hamburger";
import JijoCafeLogoTitle from "@/components/JijoCafeLogoTitle";
import LinkList from "@/components/LinkList";
import LogoLinks from "@/components/LogoLinks";
import SignInModal from "@/components/SignInModal";
import useToggle from "@/hooks/useToggle";
import styles from "./Header.module.css";

function Header() {
  /* 마우스 클릭에 따른 햄버거 탭과 닫기 탭 렌더링 여부를 관리하는 상태 */
  const [isToggleTabButton, setIsToggleTabButton] = useToggle(false);

  /* 마우스 접근/떠남에 따른 서브메뉴리스트 렌더링 */
  const [isDropdownVisiable, setIsDropdownVisialbe] = useToggle(false);

  /* 클릭시 로그인모달 렌더링 */
  const [isClickedSignin, setIsClickedSignin] = useToggle(false);

  /* 링크이동 시 해당 탭메뉴가 닫히는 기능 */

  return (
    <header
      onMouseEnter={setIsDropdownVisialbe}
      onMouseLeave={setIsDropdownVisialbe}>
      <h2 className="sr-only">JIJO-cafe Header</h2>
      <nav className={styles.nav}>
        <JijoCafeLogoTitle className={styles.cafeLogoTitle} />
        <ul className={`${styles.ul} ${isToggleTabButton && styles.showMenu}`}>
          <LinkList pageLink="/menu/drink">메뉴 소개</LinkList>
          <LinkList pageLink="/findStore">매장</LinkList>
          <LinkList pageLink="/bbs/faq">지조소식</LinkList>
          <li onClick={setIsClickedSignin} className="cursor-pointer">
            로그인
          </li>
          {isClickedSignin && (
            <SignInModal
              isClickedSignin={isClickedSignin}
              setIsClickedSignin={setIsClickedSignin}
            />
          )}
          <LinkList pageLink="/cart">장바구니</LinkList>
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
      {isDropdownVisiable && <DropDownLinkList />}
    </header>
  );
}

export default Header;

// <nav className={styles.nav}>
//   <ul className="desktop:flex tablet:hidden mobile:hidden">
//     <JijoCafeLogoTitle />

//     <LinkList pageLink="/menu/drink">메뉴 소개</LinkList>
//     <LinkList pageLink="/findStore">매장</LinkList>
//     <LinkList pageLink="/bbs/faq">지조소식</LinkList>
//     <li onClick={setIsClickedSignin} className="cursor-pointer">
//       로그인
//     </li>
//     {isClickedSignin && (
//       <SignInModal
//         isClickedSignin={isClickedSignin}
//         setIsClickedSignin={setIsClickedSignin}
//       />
//     )}
//     <LinkList pageLink="/cart">장바구니</LinkList>
//   </ul>
//   <ul>
//     <li className="hidden tablet:flex mobile:flex" onClick={handleClick}>
//       {click ? <Hamburger /> : <CloseButton />}
//     </li>
//   </ul>
//   {isDropdownVisiable && <DropDownLinkList />}
// </nav>
