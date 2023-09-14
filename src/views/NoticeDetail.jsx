import pb from "@/api/pocketbase"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import Detail from "@/components/Notice/Detail"
import { useState } from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"

function NoticeDetail() {
  const { noticeId } = useParams()
  const [data, setData] = useState(null)
  const [status, setStatus] = useState("pending")
  const [error, setError] = useState(null)

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

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <Detail data={data}></Detail>
    </>
  )
}

export default NoticeDetail
