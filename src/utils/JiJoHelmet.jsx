import {Helmet} from "react-helmet-async";

function JiJoHelmet({pageTitle = "지조 카페"}) {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="지조 커피전문점, 나만 알고싶은 카페"
        />
        <meta property="og:image" content={"/logo_black.svg"} />
        <meta property="og:title" content="지조 카페" />
        <meta property="og:site_name" content="지조 카페" />
        <meta property="og:url" content="추가예정" />
        <meta name="twitter:creator" content="지조 카페" />
        <meta name="twitter:card" content="/logo_black.svg" />
        <meta name="twitter:title" content="지조 카페" />
        <meta
          name="twitter:description"
          content="지조 커피전문점, 나만 알고싶은 카페"
        />
      </Helmet>
    </>
  );
}

export default JiJoHelmet;
