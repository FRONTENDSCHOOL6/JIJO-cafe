import pb from "@/api/pocketbase"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import { Helmet } from "react-helmet-async"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DataForm from "@/components/Notice/DataForm"

function NoticeCreate() {
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

  // const today = new Date()
  // console.log(today)

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <PageMainTitle pageTitleText="공지사항 등록" pageSubTitleText="카페 지조 관리자 페이지 입니다."></PageMainTitle>
        <DataForm handleSubmit={handleCreate} handleFileChange={handleFileChange} fileName={fileName}>
          등록하기
        </DataForm>
      </section>
    </>
  )
}

export default NoticeCreate
