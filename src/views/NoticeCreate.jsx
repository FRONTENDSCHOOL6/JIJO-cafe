import pb from "@/api/pocketbase"
// import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
// import { useState } from "react"
import { Helmet } from "react-helmet-async"
// import { useParams } from "react-router-dom"

function NoticeCreate() {
  // const { noticeId } = useParams()

  pb.autoCancellation(false) // 오토캔슬 false

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> 공지사항 등록</MenuTitle>
    </>
  )
}

export default NoticeCreate
