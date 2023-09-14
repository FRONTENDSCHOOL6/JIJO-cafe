import pb from "@/api/pocketbase"
// import React, { useRef } from "react"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import { Helmet } from "react-helmet-async"
import Input from "@/components/Input"
import { useId } from "react"
import Button from "@/components/Button"
import { useState } from "react"

function NoticeCreate() {
  const id = useId()
  const [fileName, setFileName] = useState("파일이름")
  pb.autoCancellation(false) // 오토캔슬 false
  // const { noticeId } = useParams()

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
    }
  }

  if (status === "loading") {
    return <JijoSpinner />
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // const noticeWriter = formData.get("noticeWriter")
    const data = Object.fromEntries(formData.entries())
    console.log(data)

    // const record = usePocketBaseDataCreate("notices", data)
    const record = await pb.collection("notices").create(data)
    console.log(record)
  }

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <PageMainTitle pageTitleText="공지사항 등록" pageSubTitleText="카페 지조 관리자 페이지 입니다."></PageMainTitle>
        <form onSubmit={handleCreate} className="border flex gap-5 flex-col w-[53.75rem] mx-auto px-[5.625rem] py-[3.125rem]">
          <div className="flex justify-between items-center mt-[3.75rem]">
            <Input label="관리자" name="noticeWriter" placeholder="카페 지조" labelClassName="w-[7.8125rem]" className="bg-white mr-[0.3125rem] border px-jj_15 w-full"></Input>
          </div>
          <div className="flex justify-between items-center">
            <Input label="제목" name="noticeTitle" placeholder="제목을 입력하세요" labelClassName="w-[7.8125rem]" className="bg-white mr-[0.3125rem] border px-jj_15 w-full"></Input>
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor={id} className="w-[7.8125rem]">
              내용
            </label>
            <textarea id={id} name="noticeDescription" className="border rounded w-full" rows="5" cols="33"></textarea>
          </div>
          <div>
            <div className="flex  items-center ">
              <span className="w-[7.8125rem]">파일첨부</span>
              <div>
                <div>
                  <input className="hidden" type="file" id="file" onChange={handleFileChange} />
                  <input className="upload-name h-10 px-4 border border-gray-300  text-gray-500" value={fileName} readOnly />
                  <label htmlFor="file" className="cursor-pointer bg-primary px-4 py-2 h-10">
                    업로드
                  </label>
                </div>
                <p>jpg, jpeg, png파일만 첨부가능합니다</p>
              </div>
            </div>
          </div>
          <Button type="submit" color="primary" className="mt-[3.75rem]">
            등록하기
          </Button>
        </form>
      </section>
    </>
  )
}

export default NoticeCreate
