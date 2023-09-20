import pb from "@/api/pocketbase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import DataForm from "@/components/Notice/DataForm"
import JiJoHelmet from "@/utils/JiJoHelmet"

function NoticeCreate() {
  const Navigate = useNavigate()
  const [data, setData] = useState(null)
  const [fileName, setFileName] = useState("파일이름")

  //리액트 뮤테이션
  const queryClient = useQueryClient()
  const noticeCreate = useMutation({
    // const record = await pb.collection("notices").create(data) // 기존 SDK방식  -> 리액트쿼리로 변경
    mutationFn: (data) =>
      pb
        .collection("notices")
        .create(data)
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notice"],
      })
      Navigate("/bbs/notice")
    },
  })

  const handleFileChange = (event) => {
    //업로드시 input에 파일명 추가
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
    }
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    //폼데이터 정보를 data에 담고 mutate로 데이터 생성함수 실행
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    noticeCreate.mutate(data)
  }

  const onDataChange = {
    noticeTitle: "",
    noticeDescription: "",
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - 공지사항" />
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="공지사항 등록" pageSubTitleText="카페 지조 관리자 페이지 입니다."></PageMainTitle>
        {/* isLoading 값에 따라 스피너 또는 등록 버튼을 표시 */}
        {noticeCreate.isLoading ? (
          <div>
            <JijoSpinner />
          </div>
        ) : (
          <DataForm collection="notice" data={data} setData={setData} onDataChange={onDataChange} handleSubmit={handleCreate} handleFileChange={handleFileChange} fileName={fileName}>
            등록하기
          </DataForm>
        )}
      </section>
    </>
  )
}

export default NoticeCreate
