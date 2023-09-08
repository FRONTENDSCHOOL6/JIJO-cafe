import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="terms bg-primary py-5">
        <ul className="flex max-w-7xl mx-auto gap-5 tablet:justify-center mobile:justify-center">
          <li>
            <a className="font-bold hover:underline" href="#">
              이용약관
            </a>
          </li>
          <li>
            <a className="font-bold hover:underline" href="#">
              개인정보취급방침
            </a>
          </li>
        </ul>
      </div>
      <div className="footerInner max-w-7xl mx-auto flex justify-between py-jj_60 tablet:justify-center">
        <div className="footerLeft w-1/2 tablet:w-full mobile:w-full">
          <div className="footerLogoArea flex items-center tablet:justify-center mobile:justify-center">
            <figure className="footerLogo">
              <img
                src="/src/assets/images/logoTitle_white.svg"
                alt="카페지조 로고"
              />
            </figure>
            <ul className="snsIcon flex gap-2 mt-2">
              <li>
                <a href="https://github.com/FRONTENDSCHOOL6/JIJO-cafe">
                  <img
                    src="/src/assets/images/github.svg"
                    alt="카페지조 깃허브"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/src/assets/images/facebook.svg"
                    alt="카페지조 페이스북"
                  />
                </a>
              </li>
              <li>
                <a href="https://mammoth-sassafras-ff5.notion.site/15-bae6c4f5253342a1bf7a7a5e3a23b976?pvs=4">
                  <img
                    src="/src/assets/images/notion.svg"
                    alt="카페지조 노션"
                  />
                </a>
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
                  <a
                    href="/menu/drink"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    음료
                  </a>
                </li>
                <li>
                  <a
                    href="/menu/food"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    푸드
                  </a>
                </li>
                <li>
                  <a
                    href="/menu/product"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    상품
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-light text-jj_17">매장</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li>
                  <a
                    href="/findStore"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    매장찾기
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-light text-jj_17">지조소식</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li>
                  <a
                    href="/bbs/notice"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    공지사항
                  </a>
                </li>
                <li>
                  <a
                    href="/bbs/faq"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    이벤트
                  </a>
                </li>
                <li>
                  <a
                    href="/bbs/customer"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/bbs/event"
                    className="opacity-70 hover:opacity-100 hover:underline">
                    고객의 소리
                  </a>
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
