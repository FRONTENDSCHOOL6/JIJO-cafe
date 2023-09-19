import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import { useId } from "react"
import { Helmet } from "react-helmet-async"
import S from "./CustomerCreate.module.css"
import Button from "@/components/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CustomerCreate() {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)
  const Navigate = useNavigate()
  const handleClick = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    // 모달을 닫기 위해 상태 변수를 업데이트
    setIsOpen(false)
    Navigate("/")
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
                성명<span className="text-red-600"> *</span>
              </label>
              <input type="text" placeholder="성함을 입력하세요" required id={id} className={S.input} />
            </div>

            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                전화번호<span className="text-red-600"> *</span>
              </label>
              <div className="flex items-center w-full">
                <select className="border px-3 h-[2.8125rem] mobile:text-jj_13" name="areaCode">
                  <option value="010">010</option>
                  <option value="02">02</option>
                </select>
                <input type="text" className={`${S.input} m-2`} name="phoneNumber1" placeholder="앞자리" />
                <input type="text" className={S.input} name="phoneNumber2" placeholder="뒷자리" />
              </div>
            </div>

            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                이메일
              </label>
              <input type="text" placeholder="이메일을 업력하세요" id={id} className={S.input} />
            </div>
            <div className="flex mobile:block mb-5 items-center">
              <label htmlFor={id} className={S.label}>
                방문여부
              </label>
              <div className="flex">
                <label htmlFor={id} className={`${S.label} px-3 w-fit border-none font-normal`}>
                  매장주문
                  <input type="checkbox" id={id} className={S.checkbox} />
                </label>
                <label htmlFor={id} className={`${S.label} mobile:px-3 border-none font-normal`}>
                  매장주문 외
                  <input type="checkbox" id={id} className={S.checkbox} />
                </label>
              </div>
            </div>

            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                매장선택
              </label>
              <div className="flex w-full">
                <input type="text" placeholder="매장을 선택하세요" readOnly id={id} className={S.input} />
                <Button color="primary" className="w-20 flex-shrink-0 ml-2 mobile:text-jj_13">
                  매장찾기
                </Button>
              </div>
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                방문날짜
              </label>
              <input type="date" id={id} className={S.input} />
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                제목<span className="text-red-600"> *</span>
              </label>
              <input type="text" placeholder="제목을 입력하세요" id={id} className={S.input} />
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                내용 <span className="text-red-600"> *</span>
              </label>
              <textarea id={id} cols="30" rows="10" className="border w-full"></textarea>
            </div>
            <div className={S.inputWrapper}>
              <label htmlFor={id} className={S.label}>
                파일첨부
              </label>
              <input type="file" id={id} className={S.input} />
            </div>
            <Button color="primary" className="w-full mt-16 mobile:text-jj_13" onClick={handleClick}>
              접수하기
            </Button>
          </form>
          {/* 모달 */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-zinc-200 ">
              <div className="bg-white p-7 w-1/2 rounded-lg shadow-lg flex items-center flex-col">
                <p className="text-xl mb-4">정상적으로 접수 되었습니다. </p>
                <Button color="primary" className=" px-4" onClick={closeModal}>
                  닫기
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default CustomerCreate
