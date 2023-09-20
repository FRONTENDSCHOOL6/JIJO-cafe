import pb from "@/api/pocketbase"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import Detail from "@/components/Notice/Detail"

import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import JiJoHelmet from "@/utils/JiJoHelmet"

function FaqDetail() {
  const { FaqId } = useParams()
  const Navigate = useNavigate()

  const { isLoading, data, isError, error } = useQuery({
    //리액트 쿼리 사용
    queryKey: ["faqDetail", FaqId],
    queryFn: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        // 현재 공지 가져오기
        const currentFaq = await pb.collection("faq").getOne(FaqId)

        // 공지 글 가져오기(created 내림차순 정럴 (최신순) / id, noticeTitle 포함 / 빠른 가져오기를 위해 skipTotal 설정)
        const faqList = await pb.collection("faq").getFullList({
          sort: "-created",
          fields: "id,faqTitle",
          skipTotal: true,
        })

        // 현재 공지 인덱스
        const currentFaqIndex = faqList.findIndex((n) => n.id === currentFaq.id)
        // 이전 공지 제목
        const previousFaqTitle = faqList[currentFaqIndex - 1]?.faqTitle
        // 다음 공지 제목
        const nextFaqTitle = faqList[currentFaqIndex + 1]?.faqTitle

        return { ...currentFaq, previousFaqTitle, nextFaqTitle }
      } catch (error) {
        throw error
      }
    },
    staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
  })

  if (isLoading) {
    return (
      <div>
        <JijoSpinner />
      </div>
    )
  }

  if (isError) {
    return <div role="alert">{error.toString()}</div>
  }

  const handleDelete = async () => {
    try {
      // 삭제 함수
      await pb.collection("faq").delete(FaqId) // PocketBase를 사용하여 삭제
      // 삭제가 성공적으로 이루어졌을 때 실행할 코드
      console.log("게시글이 삭제되었습니다.") // 삭제 완료 메시지 출력 또는 다른 작업 수행 가능

      // 삭제 후 특정 페이지로 리다이렉트
      Navigate("/bbs/faq") // 삭제 후 faq 목록 페이지로 이동
    } catch (error) {
      // 삭제 중에 오류가 발생했을 때 실행
      console.error("게시글 삭제 중 오류 발생:", error)
      // 오류 메시지 출력 또는 다른 오류 처리 작업 수행 가능
    }
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - FAQ" />
      <MenuTitle title="JIJO NEWS"> JIJO FAQ</MenuTitle>
      <Detail field="faq" Field="Faq" handleDelete={handleDelete} data={data}></Detail>
    </>
  )
}

export default FaqDetail
