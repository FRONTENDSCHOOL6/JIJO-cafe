import pb from "@/api/pocketbase"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import Detail from "@/components/Notice/Detail"
import { useState } from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

function NoticeDetail() {
  const { noticeId } = useParams()
  const [data, setData] = useState(null)
  const [status, setStatus] = useState("pending")
  const [error, setError] = useState(null)
  const Navigate = useNavigate()

  pb.autoCancellation(false) // 오토캔슬 false

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
  // 데이터 가져오는 중(로딩)일 때 표시할 화면

  if (status === "error") {
    return (
      <div role="alert" className="flex flex-col h-[calc(100vh_-_70px)] w-auto justify-center items-center ">
        <p>{error.toString()}</p>
        <p>알 수 없는 오류가 발생했습니다.</p>
      </div>
    )
  }

  const handleDelete = async () => {
    try {
      // 공지사항 삭제 함수
      await pb.collection("notices").delete(noticeId) // PocketBase를 사용하여 공지사항을 삭제
      // 삭제가 성공적으로 이루어졌을 때 실행할 코드
      console.log("게시글이 삭제되었습니다.") // 삭제 완료 메시지 출력 또는 다른 작업 수행 가능

      // 삭제 후 특정 페이지로 리다이렉트
      Navigate("/bbs/notice") // 삭제 후 공지사항 목록 페이지로 이동
    } catch (error) {
      // 삭제 중에 오류가 발생했을 때 실행
      console.error("게시글 삭제 중 오류 발생:", error)
      // 오류 메시지 출력 또는 다른 오류 처리 작업 수행 가능
    }
  }

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <Detail handleDelete={handleDelete} data={data}></Detail>
    </>
  )
}

export default NoticeDetail
