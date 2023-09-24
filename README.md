<div align=center>
    <h3>☕ Cafe JIJO ☕</h3>
    <p>15지조👊</p>
</div>
</br></br>

> [카페지조 웹페이지](https://cafe-jijo.vercel.app/)
> React를 이용하여 카페 지조 반응형 페이지 구현  
> 프로젝트 기간 : 2023.09.04-2023.09.24 (총23일)  
> [프로젝트 기획 PPT](https://www.canva.com/design/DAFtcjzh-Dc/vdhGlOb7nzCd_khXSBXKuQ/view?utm_content=DAFtcjzh-Dc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)  
> [프로젝트 최종 PPT](https://www.canva.com/design/DAFvVyZir9c/HZimAw3Fqs_ycjW9qIgi8Q/view?utm_content=DAFvVyZir9c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)  
> [피그마 디자인 시안](https://www.figma.com/file/SvFd9BFqFRghwdLQxonPbR/JIJO-Coffee☕?type=design&node-id=0%3A1&mode=dev) (반응형 모바일, 테블릿, 데스크탑 )
>
> 기술스텍  
>  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/tailwind-1572B6?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181817?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-0000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/Zustand-F1124?style=for-the-badge&logo=Zustand&logoColor=white"> <img src="https://img.shields.io/badge/pocketbase-B8DBE4?style=for-the-badge&logo=pocketbase&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/framer-0055FF?style=for-the-badge&logo=framer&logoColor=white"> <img src="https://img.shields.io/badge/javascript-9855FF?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

</br></br>

## 역할분담

> 고수완 : 로그인 / 회원가입 페이지 / 매장 찾기 페이지  
> 송영은 : 스크럼 마스터 / 공지사항 / FAQ / 고객의소리 / 페이지네이션
> 장다은 : 메인페이지 / 이벤트 페이지  
> 윤선영 : 메뉴소개 페이지 / 장바구니 페이지

</br></br>

## 주요 기능

- MEGA COFFEE 웹&앱 UI를 베이스로 새로운 기능을 추가하였습니다.
- 로그인/ 회원가입 기능을 구현하였습니다.
- 장바구니 담기 기능, 장바구니 수량 카운트 기능을 구현하였습니다.
- 카카오맵 API를 사용하여 매장찾기 페이지 내 지도 API를 구현하였습니다.
- 지조소식 하위 페이지의 게시판 CRUD 기능 구현 및 관리자 권한 기능을 구현하였습니다.
- Tailwind CSS 기술을 사용해 스타일링 하였습니다.
- framer mtion을 사용하여 에니메이션 효과를 적용하였습니다.
- pockethost를 사용하여 데이터를 설계하고 렌더링하였습니다.
- Zustand를 사용하여 상태관리를 하였습니다.
- React Query를 사용하여 데이터 캐싱 작업을 하였습니다.

</br></br>

## 화면 플로우

![화면 플로우](/src/assets/images/readme/15-jijo_flow-chart.jpg)

</br></br>

---

## 기능구현 코드리뷰

#### 공통 기능

- 포켓베이스 SDK를 통한 데이터 렌더링
- 해당 패치로직을 Tanstack Query를 사용한 캐싱

</br>

#### ⭐️ 고수완 : 로그인, 회원가입, 매장찾기

[로그인]

- 로그인 페이지가 아닌 모달로 설계
- 이메일/비밀번호 유효성 검사
- 로그인 시 실제 PocektHost 서버에 있는 User만 로그인
- 카카오톡 로그인 기능

[회원가입]

- 버튼 클릭 시 제출한 폼 PocektBase의 user 내 생성
- 이메일/비밀번호 유효성 검사
- 체크박스 상태 관리

[매장찾기]

- 최초 렌더링 시 현 위치 기준으로 카카오맵 렌더링
- 해당 위치를 기반으로 한 마커 렌더링
- 제주,부산,광화문
  - 마카클릭 시 해당 위치에 대한 인포 윈도우 렌더링
  - Form 내에서 검색을 통해 해당 지역에 연관된 마커 렌더링

</br></br>

#### ⭐️ 송영은 : 공지사항/ FAQ / 고객의소리

</br>

[공지사항][FAQ]

- 모바일 반응형 작업
- 검색어 입력시 필터링된 제목만 렌더링
- 검색어 입력시 필터기능
- 조회수 증가
- 이전글/다음글 구현
- 관리자 권한 로그인시 게시글 등록 , 수정, 삭제
- 리액트 쿼리로 데이터 캐싱
- 페이지네이션 구현
- 뮤테이션 코드로 리팩토링
- Patch -> SDK -> 커스텀훅 -> useQuery -> 페이지네이션

[고객의소리]

- 모바일 반응형 작업
- 작성후 접수하기 클릭시 모달창 띄움

</br></br>

#### ⭐️ 장다은 : 메인 / 이벤트

</br>

[메인]

- 풀페이지 구성
- 사용자의 스크롤을 감지한 스크롤 이벤트
- Siwper 라이브러리를 사용한 캐러셀 이미지

[이벤트]

- PB SDK를 사용한 데이터 렌더링
- 탭메뉴 기능 구현

</br></br>

#### ⭐️ 윤선영 : 메뉴소개 / 장바구니

</br>

[메뉴소개]

- 상품 클릭시 다이알로그창 띄우기
- 체크박스를 통한 데이터 필터링
- Zustand를 통한 장바구니 아이템 상태관리

[장바구니]

- 전역적으로 관리되는 CartItem들의 상태에 따라 추가 / 제거
- 비로그인 상태에서 주문하기 버튼 글릭시 로그인 모달을 띄워줌
  </br></br></br></br>

## 구현기능

#### 메인 캐러셀

![메인 캐러셀](/src/assets/images/readme/Main_carousel.gif)
</br></br>

#### 메인 풀페이지

![메인 풀페이지](/src/assets/images/readme/Main_Fullpage.gif)
</br></br>

#### 메뉴소개 페이지 필터 기능, 상품 데이터 렌더링

![메뉴소개 페이지](/src/assets/images/readme/Menu.gif)
</br></br>

#### 매장찾기 페이지 지도 API

![매장찾기 페이지](/src/assets/images/readme/FindStore.gif)
</br></br>

#### 회원가입

![회원가입](/src/assets/images/readme/SignUp.gif)
</br></br>

#### 로그인

![로그인](/src/assets/images/readme/SignIn.gif)
</br></br>

#### 카카오톡 로그인

![카카오톡 로그인](/src/assets/images/readme/KakaotalkSignin.gif)
</br></br>

#### 로그아웃

![로그아웃](/src/assets/images/readme/Logout.gif)
</br></br>

#### 장바구니 담기 기능, 장바구니 페이지 수량 추가, 삭제 기능

![장바구니](/src/assets/images/readme/Cart.gif)
</br></br>

#### 공지사항 페이지 게시판

![공지사항](/src/assets/images/readme/FAQ.gif)
</br></br>

#### 관리자 권한 로그인시 게시글 등록, 수정, 삭제 기능

![관리자 권한 로그인시 게시글 등록, 수정, 삭제 기능](/src/assets/images/readme/CRUD.gif)
</br></br>

#### 이벤트 페이지 데이터 렌더링 및 탭메뉴 기능

![이벤트](/src/assets/images/readme/Event.gif)
</br></br>

#### 페이지네이션 기능

![페이지네이션](/src/assets/images/readme/Pagination.gif)
</br></br>

## 모바일 반응형 구현

- 메인페이지
  ![메인페이지 모바일](/src/assets/images/readme/mobile_main.png)
  </br></br>

- 메뉴소개
  ![메뉴소개 페이지 모바일](/src/assets/images/readme/mobile_menu.png)
  </br></br>

- 공지사항
  ![공지사항 페이지 모바일](/src/assets/images/readme/mobile_FAQ.png)
  </br></br>

- 공지상세 페이지
  ![공지사항 상세페이지 모바일](/src/assets/images/readme/mobile_FAQDetail.png)
  </br></br>

- 고객의소리
  ![고객의소리 상세페이지 모바일](/src/assets/images/readme/mobile_customerDetail.png)
