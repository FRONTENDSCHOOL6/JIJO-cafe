import pb from "@/api/pocketbase"
import DataForm from "@/components/Notice/DataForm"
import MenuTitle from "@/components/MenuTitle"
import JijoSpinner from "@/components/JijoSpinner"
import PageMainTitle from "@/components/PageMainTitle"
import JiJoHelmet from "@/utils/JiJoHelmet"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function NoticeUpdate() {
  const Navigate = useNavigate()
  const { noticeId } = useParams()
  const [data, setData] = useState(null)
  const [status, setStatus] = useState("pending")
  const [error, setError] = useState(null)
  const [fileName, setFileName] = useState("파일이름")

  //리액트 뮤테이션
  const queryClient = useQueryClient()
  const noticeUpdate = useMutation({
    // const record = await pb.collection("notices").create(data) // 기존 SDK방식  -> 리액트쿼리로 변경
    mutationFn: (data) =>
      pb
        .collection("notices")
        .update(noticeId, data)
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["noticeDetail"])
      queryClient.invalidateQueries(["notices"])
      Navigate(`/bbs/notice/detail/${noticeId}`)
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading")
      try {
        const noticeItems = await pb.collection("notices").getOne(noticeId) //단일 데이터 가져올때 getOne
        setData(noticeItems)
        setStatus("success")
      } catch (error) {
        setStatus("error")
        setError(error)
      }
    }
    fetchData()
  }, [noticeId])

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

    noticeUpdate.mutate(data)
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - 공지사항" />
      <MenuTitle title="JIJO NEWS" mainMenu="지조소식" subMenu="공지사항" mainLink="/bbs/Notice" subLink="/bbs/Notice">
        JIJO NOTICE
      </MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="공지사항 수정" pageSubTitleText="카페 지조 관리자 페이지 입니다."></PageMainTitle>
        <DataForm collection="notice" data={data} setData={setData} handleSubmit={handleUpdate} handleFileChange={handleFileChange} fileName={fileName} setFileName={setFileName}>
          수정하기
        </DataForm>
      </section>
    </>
  )
}

export default NoticeUpdate
