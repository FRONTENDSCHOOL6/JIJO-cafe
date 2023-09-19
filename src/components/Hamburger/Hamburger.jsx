import styles from "@/components/Hamburger/Hamburger.module.css";

function Hamburger({...restProps}) {
  return (
    <>
      <div className={styles.hamburger} {...restProps}>
        <span></span>
      </div>
    </>
  );
}

export default Hamburger;
