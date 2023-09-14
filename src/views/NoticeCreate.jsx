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

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function NoticeCreate() {
  // const { noticeId } = useParams()
  const id = useId()
  const Navigate = useNavigate()
  const [fileName, setFileName] = useState("파일이름")

  const handleFileChange = (event) => {
    //업로드시 input에 파일명 추가
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
    }
  }

  if (status === "loading") {
    return <JijoSpinner />
  }

  pb.autoCancellation(false)

  const handleCreate = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)
    const data = Object.fromEntries(formData.entries())
    const record = await pb.collection("notices").create(data)
    Navigate("/bbs/notice")
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
          <div className="flex justify-between items-center mt-[3.75rem] ">
            <Input label="관리자" name="noticeWriter" placeholder="카페 지조" labelClassName="w-[7.8125rem] " className="bg-white block mr-[0.3125rem] border px-jj_15 w-full"></Input>
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
            <div className="flex items-center">
              <span className="w-[6.5rem]">파일첨부</span>
              <div>
                <div>
                  <input className="hidden" name="noticeImage" type="file" id="fileInput" onChange={handleFileChange} />
                  <input className="h-[2.8125rem] px-4 border border-gray-300  text-gray-500" value={fileName} readOnly />
                  <label htmlFor="fileInput" className="cursor-pointer font-medium ml-1 py-[0.8rem] px-10  rounded-sm bg-primary">
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
