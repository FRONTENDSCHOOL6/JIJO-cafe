import pb from "@/api/pocketbase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import DataForm from "@/components/Notice/DataForm"
import JiJoHelmet from "@/utils/JiJoHelmet"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function FaqCreate() {
  const Navigate = useNavigate()
  const [data, setData] = useState(null)
  const [fileName, setFileName] = useState("파일이름")
  // const [loading, setLoading] = useState(false) // 로딩 상태 변수 추가

  //리액트 뮤테이션
  const queryClient = useQueryClient()
  const faqCreate = useMutation({
    // const record = await pb.collection("notices").create(data) // 기존 SDK방식  -> 리액트쿼리로 변경
    mutationFn: (data) =>
      pb
        .collection("faq")
        .create(data)
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["faq"],
      })
      Navigate("/bbs/faq")
    },
  })

  const handleFileChange = (event) => {
    //업로드시 input에 파일명 추가
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
    }
  }
  // if (loading) {
  //   return <JijoSpinner />
  // }

  const handleCreate = async (e) => {
    e.preventDefault()
    //폼데이터 정보를 data에 담고 mutate로 데이터 생성함수 실행
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    faqCreate.mutate(data)
  }

  const onDataChange = {
    faqTitle: "",
    faqDescription: "",
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - FAQ" />
      <MenuTitle title="JIJO NEWS" mainMenu="지조소식" subMenu="FAQ" mainLink="/bbs/Notice" subLink="/bbs/Faq">
        JIJO FAQ
      </MenuTitle>
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
