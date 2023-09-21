import pb from "@/api/pocketbase"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import JijoSpinner from "@/components/JijoSpinner"
import MenuTitle from "@/components/MenuTitle"
import Detail from "@/components/Notice/Detail"
import JiJoHelmet from "@/utils/JiJoHelmet"

function NoticeDetail() {
  const { noticeId } = useParams()
  const Navigate = useNavigate()
  const queryClient = useQueryClient()
  const noticeDelete = useMutation({
    mutationFn: (id) =>
      pb
        .collection("notices")
        .delete(id)
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notice"],
      })
    },
  })

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["noticeDetail", noticeId],
    queryFn: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        // 현재 공지 가져오기
        const currentNotice = await pb.collection("notices").getOne(noticeId)

        // 공지 글 가져오기(created 내림차순 정럴 (최신순) / id, noticeTitle 포함 / 빠른 가져오기를 위해 skipTotal 설정)
        const noticeList = await pb.collection("notices").getFullList({
          sort: "-created",
          fields: "id,noticeTitle",
          skipTotal: true,
        })

        // 현재 공지 인덱스
        const currentNoticeIndex = noticeList.findIndex((n) => n.id === currentNotice.id)
        // 이전 공지 제목
        const previousNoticeTitle = noticeList[currentNoticeIndex + 1]?.noticeTitle
        // 이전 공지 ID 페이지 이동시 필요
        const previousNoticeId = noticeList[currentNoticeIndex + 1]?.id
        // 다음 공지 제목
        const nextNoticeTitle = noticeList[currentNoticeIndex - 1]?.noticeTitle
        // 다음 공지 ID 페이지 이동시 필요
        const nextNoticeId = noticeList[currentNoticeIndex - 1]?.id

        return { ...currentNotice, previousNoticeTitle, nextNoticeTitle, nextNoticeId, previousNoticeId }
      } catch (error) {
        throw error
      }
    },
    // staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
    staleTime: 0,
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

  const handleDelete = async (e) => {
    e.preventDefault()

    try {
      //mutateAsync 함수는 비동기 함수를 호출하고 해당 함수의 완료를 기다린다.
      await noticeDelete.mutateAsync(noticeId) // 공지사항 삭제 함수
      console.log("게시글이 삭제되었습니다.") // 삭제 성공시
      Navigate("/bbs/notice") // 삭제 후 공지사항 목록 페이지로 이동
    } catch (error) {
      console.error("게시글 삭제 중 오류 발생:", error)
    }
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - 공지사항" />
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <Detail field="notice" Field="Notice" handleDelete={handleDelete} data={data}></Detail>
    </>
  )
}

export default NoticeDetail
