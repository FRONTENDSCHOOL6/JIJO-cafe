import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import { useId } from "react"
import { Helmet } from "react-helmet-async"
import S from "./CustomerCreate.module.css"
import Button from "@/components/Button"
import { useState } from "react"

function CustomerCreate() {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    // 모달을 닫기 위해 상태 변수를 업데이트
    setIsOpen(false)
  }

  return (
    <>
      <Helmet>
        <title>지조소식 - 고객의 소리</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO 고객의 소리</MenuTitle>
      <section className={S.section}>
        {/* <section> */}
        <PageMainTitle pageTitleText="고객의 소리" pageSubTitleText="문의가 많은 사항의 경우 FAQ를 통해 빠르게 확인하실 수 있습니다."></PageMainTitle>
        {/* <div> */}
        <div className={S.wrapper}>
          <form className="w-full ">
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                성명
              </label>
              <input type="text" placeholder="성함을 입력하세요" id={id} className={S.input} />
            </div>

            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                전화번호
              </label>
              <select className="border px-3 h-[2.8125rem]" name="areaCode">
                <option value="010">010</option>
                <option value="02">02</option>
              </select>
              <input type="text" className="border  px-3 h-[2.8125rem] " name="phoneNumber1" placeholder="앞자리" />
              <input type="text" className="border  px-3 h-[2.8125rem]" name="phoneNumber2" placeholder="뒷자리" />
            </div>

            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                이메일
              </label>
              <input type="text" id={id} className={S.input} />
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                방문여부
              </label>
              <label htmlFor={id} className={S.label}>
                매장주문
                <input type="checkbox" id={id} className={S.checkbox} />
              </label>
              <label htmlFor={id} className={S.label}>
                매장주문 외
                <input type="checkbox" id={id} className={S.checkbox} />
              </label>
            </div>

            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                매장선택
              </label>
              <input type="text" placeholder="매장을 선택하세요" readOnly id={id} className={S.input} />
              <Button color="primary">매장찾기</Button>
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                방문날짜
              </label>
              <input type="text" id={id} className={S.input} />
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                제목
              </label>
              <input type="text" placeholder="제목을 입력하세요" id={id} className={S.input} />
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                내용
              </label>
              <textarea id={id} cols="30" rows="10" className="border w-full"></textarea>
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                파일첨부
              </label>
              <input type="file" id={id} className={S.input} />
            </div>
            <Button color="primary" className="w-full mt-16" onClick={handleClick}>
              접수하기
            </Button>
          </form>
          {/* 모달 */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 w-1/2 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">모달 제목</h2>
                <p>모달 내용</p>
                <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 px-4 py-2 mt-4 rounded-lg">
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default CustomerCreate
