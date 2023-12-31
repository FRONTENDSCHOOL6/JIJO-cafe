import githubIcon from "@/assets/images/github.svg";
import facebookIcon from "@/assets/images/facebook.svg";
import notionIcon from "@/assets/images/notion.svg";
import FooterModal from "@/components/FooterModal";
import {useState} from "react";
import {Link} from "react-router-dom";
import LazyImage from "@/utils/LazyImage";

function Footer() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <footer className="bg-secondary">
      <div className="terms bg-primary py-5">
        <ul className="flex max-w-7xl mx-auto gap-5 tablet:justify-center mobile:justify-center">
          <li>
            <button className="font-bold hover:underline" onClick={handleClick}>
              이용약관
            </button>
            {isClicked && (
              <FooterModal title="이용약관" handleClose={handleClose} />
            )}
          </li>
          <li>
            <button className="font-bold hover:underline" onClick={handleClick}>
              개인정보취급방침
            </button>
            {isClicked && (
              <FooterModal title="개인정보취급방침" handleClose={handleClose} />
            )}
          </li>
        </ul>
      </div>
      <div className="footerInner max-w-7xl mx-auto flex justify-between py-jj_60 tablet:justify-center">
        <div className="footerLeft w-1/2 tablet:w-full mobile:w-full">
          <div className="footerLogoArea flex items-center tablet:justify-center mobile:justify-center">
            <figure className="footerLogo">
              <img
                width="80px"
                className="mr-4"
                src="/logo_white.svg"
                alt="카페지조"
              />
            </figure>
            <ul className="snsIcon flex gap-2 mt-2">
              <li>
                <Link to="https://github.com/FRONTENDSCHOOL6/JIJO-cafe">
                  <LazyImage src={githubIcon} alt="카페지조 깃허브" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <LazyImage src={facebookIcon} alt="카페지조 페이스북" />
                </Link>
              </li>
              <li>
                <Link to="https://mammoth-sassafras-ff5.notion.site/15-bae6c4f5253342a1bf7a7a5e3a23b976?pvs=4">
                  <LazyImage src={notionIcon} alt="카페지조 노션" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerInfo mt-5">
            <ul className="flex text-white font-thin flex-wrap gap-2 text-jj_14 tablet:w-full tablet:justify-center mobile:justify-center mobile:w-2/3 mobile:mx-auto">
              <li className="whitespace-nowrap">
                <strong>주식회사 앤하우스</strong>
              </li>
              <li className="whitespace-nowrap opacity-70">대표자 김대영</li>
              <li className="whitespace-nowrap opacity-70">
                창업상담 1588-0656
              </li>
              <li className="whitespace-nowrap opacity-70">
                고객센터 1588-8298
              </li>
              <li className="whitespace-nowrap opacity-70">FAX 02-325-5199</li>
              <li className="whitespace-nowrap opacity-70">
                사업자등록번호 105-87-51367
              </li>
              <li className="whitespace-nowrap opacity-70">
                서울특별시 강남구 강남대로 518 11층, 13층 (주)앤하우스
              </li>
              <li className="whitespace-nowrap opacity-70">
                개인정보보호 관리책임자 이호민
              </li>
            </ul>
          </div>
        </div>
        <div className="footerRight w-1/5 tablet:hidden mobile:hidden">
          <ul className="flex justify-between text-white font-thin">
            <li>
              <strong className="text-light text-jj_17">메뉴소개</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li>
                  <Link
                    to="/menu/drink"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    음료
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu/food"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    푸드
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu/product"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    상품
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-light text-jj_17">매장</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li>
                  <Link
                    to="/findStore"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    매장찾기
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-light text-jj_17">지조소식</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li>
                  <Link
                    to="/bbs/notice"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    공지사항
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bbs/event"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    이벤트
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bbs/faq"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bbs/customer"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    고객의 소리
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
