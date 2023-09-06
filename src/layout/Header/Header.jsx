import SignInModal from "@/components/SignInModal";
import useToggle from "@/hooks/useToggle";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import Hamburger from "@/components/Hamburger";
import logoTitle from "@/assets/images/logoTitle.png";
import blog from "@/assets/images/blog.svg";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";

function Header() {
  const [isToggle, setIsToggle] = useToggle(false);

  return (
    <header>
      <nav className={`${styles.nav}`}>
        <img src={logoTitle} alt="지조카페 로고" className={styles.img} />
        <ul className={`${styles.ul} ${isToggle ? styles.showMenu : ""} `}>
          <li>
            <Link to={"/menu"}>메뉴 소개</Link>
          </li>
          <li>
            <Link to={"/findStore"}>매장</Link>
          </li>
          <li>
            <Link to={"/menu"}>지조소식</Link>
          </li>
          <li onClick={setIsToggle}>{isToggle ? <SignInModal /> : "로그인"}</li>
          <li>
            <Link to={"/cart"}>장바구니</Link>
          </li>
        </ul>
        <Hamburger className={styles.hamburger} onClick={setIsToggle} />
        <div className={styles.logoWrap}>
          <img src={blog} className={styles.logo} alt="블로그 로고" />
          <img src={instagram} className={styles.logo} alt="블로그 로고" />
          <img src={facebook} className={styles.logo} alt="블로그 로고" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
