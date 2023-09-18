import LinkList from "./LinkList";

function JijoCafeLogoTitle({...restProps}) {
  return (
    <>
      <LinkList pageLink="/" {...restProps}>
        <img
          src="/logo_black.svg"
          alt="지조카페"
          className={`desktop:w-[10rem] h-8 tablet:w-[6.25rem] mobile:w-[5.625rem]`}
        />
      </LinkList>
    </>
  );
}

export default JijoCafeLogoTitle;
