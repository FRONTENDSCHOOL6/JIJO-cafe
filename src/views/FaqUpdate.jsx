import pb from "@/api/pocketbase"
import DataForm from "@/components/Notice/DataForm"
import MenuTitle from "@/components/MenuTitle"
import JiJoHelmet from "@/utils/JiJoHelmet"
import JijoSpinner from "@/components/JijoSpinner"
import PageMainTitle from "@/components/PageMainTitle"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function FaqUpdate() {
  const { FaqId } = useParams()
  const Navigate = useNavigate()
  const [data, setData] = useState(null)
  const [status, setStatus] = useState("pending")
  const [error, setError] = useState(null)
  const [fileName, setFileName] = useState("파일이름")

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading")
      try {
        const faqItems = await pb.collection("faq").getOne(FaqId) //단일 데이터 가져올때 getOne
        setData(faqItems)
        setStatus("success")
      } catch (error) {
        setStatus("error")
        setError(error)
      }
    }
    fetchData()
  }, [FaqId])

  if (status === "loading") {
    return <JijoSpinner />
  }

  if (status === "error") {
    return (
      <div role="alert" className="flex flex-col h-[calc(100vh_-_70px)] w-auto justify-center items-center ">
        <p>{error.toString()}</p>
        <p>알 수 없는 오류가 발생했습니다.</p>
      </div>
    )
  }

  const handleFileChange = (event) => {
    //업로드시 input에 파일명 추가
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    await pb.collection("faq").update(FaqId, data)
    Navigate(`/bbs/faq/detail/${FaqId}`)
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - FAQ" />
      <MenuTitle title="JIJO NEWS" mainMenu="지조소식" subMenu="FAQ" mainLink="/bbs/Notice" subLink="/bbs/Faq">
        JIJO FAQ
      </MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="FAQ 수정" pageSubTitleText="카페 지조 관리자 페이지 입니다."></PageMainTitle>
        <DataForm collection="faq" data={data} setData={setData} handleSubmit={handleUpdate} handleFileChange={handleFileChange} fileName={fileName} setFileName={setFileName}>
          수정하기
        </DataForm>
      </section>
    </>
  )
}

export default FaqUpdate
