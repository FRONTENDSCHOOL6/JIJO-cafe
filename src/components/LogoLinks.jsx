import styles from "@/layout/Header/Header.module.css";
import gitHub from "@/assets/images/gitHub.png";
import notion from "@/assets/images/notion.png";
import facebook from "@/assets/images/facebook.png";

function LogoLinks() {
  return (
    <>
      <div>
        <div className={styles.logoWrap}>
          <a
            className={styles.logoLink}
            target="_blank"
            href="https://github.com/FRONTENDSCHOOL6/JIJO-cafe">
            <img
              src={gitHub}
              alt="프로젝트 깃허브 로고"
              className={styles.logo}
            />
          </a>
          <a
            className={styles.logoLink}
            href="https://mammoth-sassafras-ff5.notion.site/15-bae6c4f5253342a1bf7a7a5e3a23b976?pvs=4"
            target="_blank">
            <img src={notion} className={styles.logo} alt="노션 이미지" />
          </a>
          <a
            className={styles.logoLink}
            href="https://www.facebook.com/mega.mgc.coffee.official"
            target="_blank">
            <img src={facebook} className={styles.logo} alt="페이스북 로고" />
          </a>
        </div>
      </div>
    </>
  );
}

export default LogoLinks;
