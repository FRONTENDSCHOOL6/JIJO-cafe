import pb from "@/api/pocketbase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import DataForm from "@/components/Notice/DataForm"
import JiJoHelmet from "@/utils/JiJoHelmet"

function FaqCreate() {
  const Navigate = useNavigate()
  const [data, setData] = useState(null)
  const [fileName, setFileName] = useState("파일이름")
  const [loading, setLoading] = useState(false) // 로딩 상태 변수 추가

  const handleFileChange = (event) => {
    //업로드시 input에 파일명 추가
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
    }
  }
  if (loading) {
    return <JijoSpinner />
  }

  // 등록하기 버튼 클릭시 pb에 등록 후 페이지 이동
  const handleCreate = async (e) => {
    e.preventDefault()
    setLoading(true) // API 호출 전에 로딩 상태를 true로 설정

    try {
      const formData = new FormData(e.currentTarget)
      console.log(formData)
      const data = Object.fromEntries(formData.entries())
      await pb.collection("faq").create(data)
      Navigate("/bbs/faq")
    } catch (error) {
      console.error("에러:", error)
    } finally {
      setLoading(false) // API 호출이 완료되면 로딩 상태를 false로 설정
    }
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
