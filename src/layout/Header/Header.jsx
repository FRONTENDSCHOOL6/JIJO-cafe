import SignInModal from "@/components/SignInModal";
import useToggle from "@/hooks/useToggle";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import Hamburger from "@/components/Hamburger";
import logoTitle from "@/assets/images/logoTitle.png";
import blog from "@/assets/images/blog.svg";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";
import LinkList from "@/components/LinkList";

function Header() {
  const [isChangedStatus, setIsChangedStatus] = useToggle(false);

  return (
    <header>
      <h2 className="sr-only">JIJO-cafe Header</h2>
      <nav className={`${styles.nav}`}>
        <LinkList pageLink="/">
          <img src={logoTitle} alt="지조카페 로고" className={styles.img} />
        </LinkList>
        <ul className={`${styles.ul} ${isChangedStatus ? styles.showMenu : ""}`}>
          <LinkList pageLink="/menu" children="메뉴 소개" />
          <LinkList pageLink="/findStore" children="매장" />
          <LinkList pageLink="/bbs" children="지조소식" />
          <li onClick={setIsChangedStatus}>{isChangedStatus ? <SignInModal /> : "로그인"}</li>
          <LinkList pageLink="/cart" children="장바구니" />
        </ul>
        <Hamburger className={styles.hamburger} onClick={setIsChangedStatus} />
        <div className={styles.logoWrap}>
          <img src={blog} className={styles.logo} alt="블로그 로고" />
          <img src={instagram} className={styles.logo} alt="인스타그램 로고" />
          <img src={facebook} className={styles.logo} alt="페이스북 로고" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
