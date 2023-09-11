import LinkList from "./LinkList";
import logoTitle from "@/assets/images/logoTitle.png";

function JijoCafeLogoTitle({...restProps}) {
  return (
    <>
      <LinkList pageLink="/" {...restProps}>
        <img src={logoTitle} alt="지조카페 로고" />
      </LinkList>
    </>
  );
}

export default JijoCafeLogoTitle;
