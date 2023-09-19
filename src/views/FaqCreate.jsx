import pb from "@/api/pocketbase"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import { Helmet } from "react-helmet-async"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DataForm from "@/components/Notice/DataForm"
import JiJoHelmet from "@/utils/JiJoHelmet"

function FaqCreate() {
  const Navigate = useNavigate()
  const [data, setData] = useState(null)
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

  // 등록하기 버튼 클릭시 pb에 등록후 페이지이동
  const handleCreate = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)
    const data = Object.fromEntries(formData.entries())
    const record = await pb.collection("faq").create(data)
    Navigate("/bbs/faq")
  }
  const onDataChange = {
    faqTitle: "",
    faqDescription: "",
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - FAQ" />
      <MenuTitle title="JIJO NEWS"> JIJO FAQ</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="FAQ 등록" pageSubTitleText="카페 지조 관리자 페이지 입니다."></PageMainTitle>
        <DataForm collection="faq" data={data} setData={setData} onDataChange={onDataChange} handleSubmit={handleCreate} handleFileChange={handleFileChange} fileName={fileName}>
          등록하기
        </DataForm>
      </section>
    </>
  )
}

export default FaqCreate
