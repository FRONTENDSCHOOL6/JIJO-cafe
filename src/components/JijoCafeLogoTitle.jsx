import LinkList from "./LinkList";
import logoTitle from "@/assets/images/logoTitle.png";
import styles from "@/layout/Header/Header.module.css";

function JijoCafeLogoTitle({...restProps}) {
  return (
    <>
      <LinkList pageLink="/" {...restProps}>
        <img src={logoTitle} alt="지조카페 로고" className={styles.img} />
      </LinkList>
    </>
  );
}

export default JijoCafeLogoTitle;
