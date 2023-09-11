import LinkList from './LinkList'
// import logoTitle from '@/assets/images/logoTitle.png'
import styles from '@/layout/Header/Header.module.css'

function JijoCafeLogoTitle({ ...restProps }) {
  return (
    <>
      <LinkList pageLink="/" {...restProps}>
        <img src="/logo_black.svg" alt="지조카페" className={`${styles.img} desktop:w-[120px] tablet:w-[100px] mobile:w-[90px]`} />
      </LinkList>
    </>
  )
}

export default JijoCafeLogoTitle
