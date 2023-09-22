import { Link } from "react-router-dom"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import Button from "@/components/Button"
import JiJoHelmet from "@/utils/JiJoHelmet"

function Customer() {
  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - 고객의 소리" />
      <MenuTitle title="JIJO NEWS" mainMenu="지조소식" subMenu="고객의 소리" mainLink="/bbs/Notice" subLink="/bbs/Customer">
        JIJO 고객의 소리
      </MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="고객의 소리" pageSubTitleText="문의가 많은 사항의 경우 FAQ를 통해 빠르게 확인하실 수 있습니다."></PageMainTitle>
        <div className="flex flex-col items-center gap-20">
          <Link to="/bbs/faq">
            <Button color="primary" className="px-[1.875rem]">
              FAQ 바로가기
            </Button>
          </Link>
          <div className="border gap-5 items-center flex-col flex px-[0.9375rem] py-[1.875rem]">
            <p className="text-jj_22 border-b w-full text-center pb-5 ">CS 관련 문의</p>
            <p className="font-light text-center">
              고객님의 편의와 질 높은 서비스를 위해 노력하겠습니다. <br></br>(매장/서비스/APP 불편사항 접수)
            </p>
            <Link to="/bbs/customer/create" className="w-full">
              <Button color="white" className="w-full">
                접수하기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Customer
