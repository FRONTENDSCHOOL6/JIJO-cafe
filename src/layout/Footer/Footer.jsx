import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className="bg-secondary py-jj_60 px-5">
      <div className="footerInner max-w-7xl mx-auto flex justify-between">
        <div className="footerLeft w-1/2">
          <div className="footerLogoArea flex items-center">
            <figure className="footerLogo">
              <img src="/src/assets/images/logoTitle_white.png" alt="카페지조 로고" />
            </figure>
            <ul className="snsIcon flex gap-2 mt-2">
              <li>
                <a href="">
                  <img src="/src/assets/images/github.svg" alt="카페지조 깃허브" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/src/assets/images/facebook.svg" alt="카페지조 페이스북" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/src/assets/images/notion.svg" alt="카페지조 노션" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footerInfo mt-5">
            <ul className="flex text-white font-thin flex-wrap gap-2 text-jj_14">
              <li className="whitespace-nowrap"><strong>주식회사 앤하우스</strong></li>
              <li className="whitespace-nowrap opacity-70">대표자 김대영</li>
              <li className="whitespace-nowrap opacity-70">창업상담 1588-0656</li>
              <li className="whitespace-nowrap opacity-70">고객센터 1588-8298</li>
              <li className="whitespace-nowrap opacity-70">FAX 02-325-5199</li>
              <li className="whitespace-nowrap opacity-70">사업자등록번호 105-87-51367</li>
              <li className="whitespace-nowrap opacity-70">서울특별시 강남구 강남대로 518 11층, 13층 (주)앤하우스</li>
              <li className="whitespace-nowrap opacity-70">개인정보보호 관리책임자 이호민</li>
            </ul>
          </div>
        </div>
        <div className="footerRight w-2/5">
          <ul className="flex justify-between text-white font-thin">
            <li>
              <strong className="text-light text-jj_17">메뉴소개</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">음료</a></li>
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">푸드</a></li>
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">상품</a></li>
              </ul>
            </li>
            <li>
              <strong className="text-light text-jj_17">매장</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">매장찾기</a></li>
              </ul>
            </li>
            <li>
              <strong className="text-light text-jj_17">지조소식</strong>
              <ul className="flex flex-col gap-2 mt-3 text-jj_14">
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">공지사항</a></li>
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">이벤트</a></li>
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">FAQ</a></li>
                <li><a href="" className="opacity-70 hover:opacity-100 hover:underline">고객의 소리</a></li>
              </ul>
            </li>
            <li>
              <strong className="text-light text-jj_17"><a href="">로그인</a></strong>
            </li>
            <li>
              <strong className="text-light text-jj_17"><a href="">장바구니</a></strong>
            </li>
          </ul>
        </div>
      </div>
    </footer> 
  );
}
 
export default Footer;
