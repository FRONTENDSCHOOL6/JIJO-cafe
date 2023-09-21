import pb from "@/api/pocketbase"
import { useQuery } from "@tanstack/react-query"
import { useState, useCallback } from "react"
import MenuTitle from "@/components/MenuTitle"
import TableList from "@/components/Notice/TableList"
import JiJoHelmet from "@/utils/JiJoHelmet"

import PageMainTitle from "@/components/PageMainTitle"
import SelectSearchFilter from "@/components/Notice/SelectSearchFilter"

function Notice() {
  const [searchOption, setSearchOption] = useState("noticeTitle") //select 태그
  const [searchText, setSearchText] = useState("") //input 검색어를 입력하세요 창
  // const { data, status } = usePocketBaseFilteredData("notices", 1, 20, `(${searchOption} ~ '${searchText}')`, reload)  //기존 훅 사용코드

  const { data, isError, error, refetch } = useQuery({
    queryKey: ["notice", searchText],
    queryFn: async () => {
      // pb에서 데이터 불러오기
      const response = await pb.collection("notices").getList(1, 10, {
        sort: "-created",
        filter: `(${searchOption} ~ '${searchText}')`,
      })
      return response.items
    },
    staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
  })

  const handleClickRefetch = useCallback(() => {
    console.log(searchText)
    refetch()
  }, [searchText, refetch])

  // 로딩 중일 때 하위 컴포넌트인 SelectSearchFilter 컴포넌트가 언마운트 되기 때문에 컴포넌트는 모든 상태를 잃어버리게 됩니다
  // if (isLoading) {
  //   return (
  //     <div>
  //       <JijoSpinner />
  //     </div>
  //   )
  // }

  if (isError) {
    return <div role="alert">{error.toString()}</div>
  }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - 공지사항" />
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="카페 지조 공지사항" pageSubTitleText="카페 지조 소식을 알려드립니다."></PageMainTitle>
        <SelectSearchFilter Collection="notice" handleReload={handleClickRefetch} option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></SelectSearchFilter>
        {/* 상태를 props로 SelectSearchFilter 전달 , handleReload 핸들러전달*/}
        <TableList collection="notices" field="notice" data={data} />
      </section>
    </>
  )
}

export default Notice
