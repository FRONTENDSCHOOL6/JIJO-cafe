import pb from "@/api/pocketbase"
import { Helmet } from "react-helmet-async"
import MenuTitle from "@/components/MenuTitle"
import JijoSpinner from "@/components/JijoSpinner"
import PageMainTitle from "@/components/PageMainTitle"
import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { useCallback } from "react"
import TableList from "@/components/Notice/TableList"
import SelectSearchFilter from "@/components/Notice/SelectSearchFilter"

async function fetchNotices(searchOption, searchText) {
  const response = await pb.collection("notices").getList(1, 10, {
    sort: "-created",
    filter: `(${searchOption} ~ '${searchText}')`,
  })
  return response.items
}

function Notice() {
  const [searchOption, setSearchOption] = useState("noticeTitle") //select 태그
  const [searchText, setSearchText] = useState("") //input 검색어를 입력하세요 창
  const [reload, setReload] = useState(true) //검색버튼 클릭시 [reload] 리렌더링

  pb.autoCancellation(false)
  // const { data, status } = usePocketBaseFilteredData("notices", 1, 20, `(${searchOption} ~ '${searchText}')`, reload)  //기존 훅 사용코드

  const { isLoading, data, isError, error, refetch } = useQuery({
    //리액트 쿼리 사용
    queryKey: ["notice"],
    queryFn: () => fetchNotices(searchOption, searchText),
    staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
  })

  useEffect(() => {
    refetch() // 삭제시 데이터를 다시 로드하는 함수를 호출 컴포넌트가 처음 마운트될 때 한 번 실행
  }, [])

  const handleClickRefetch = useCallback(() => {
    refetch()
  }, [refetch])

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

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="카페 지조 공지사항" pageSubTitleText="카페 지조 소식을 알려드립니다."></PageMainTitle>

        <SelectSearchFilter Collection="notice" handleReload={handleClickRefetch} option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></SelectSearchFilter>
        {/* 상태를 props로 SelectSearchFilter 전달 , handleReload 핸들러전달*/}
        <TableList Collection="notices" field="notice" data={data} />
      </section>
    </>
  )
}

export default Notice
