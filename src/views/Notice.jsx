import { useState, useCallback } from "react"
import MenuTitle from "@/components/MenuTitle"
import JiJoHelmet from "@/utils/JiJoHelmet"
import PageMainTitle from "@/components/PageMainTitle"
import SelectSearchFilter from "@/components/Notice/SelectSearchFilter"

import TableListPagination from "@/components/Notice/TableListPagination"
import usePaginationQuery from "@/hooks/usePaginationQuery"

function Notice() {
  const [searchOption, setSearchOption] = useState("noticeTitle") //select 태그
  const [searchText, setSearchText] = useState("") //input 검색어를 입력하세요 창
  // usepb훅 사용 -> 리액트쿼리 리팩토링
  // const { data, status } = usePocketBaseFilteredData("notices", 1, 20, `(${searchOption} ~ '${searchText}')`, reload)

  const { error, refetch, ...rest } = usePaginationQuery({
    perPage: 10,
    queryKey: "notices",
    dependency: searchText,
    options: {
      sort: "-created",
      filter: `(${searchOption} ~ '${searchText}')`,
    },
  })
  //페이지네이션 사용전 리액트 쿼리
  // const { data, isError, error, refetch } = useQuery({
  //   queryKey: ["notices", searchText],
  //   queryFn: async () => {
  //     const response = await pb.collection("notices").getList(1, 10, {
  //       sort: "-created",
  //       filter: `(${searchOption} ~ '${searchText}')`,
  //     })
  //     return response.items
  //   },
  //   // staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
  // })

  const handleClickRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  if (error) {
    return <div role="alert">{error.toString()}</div>
  }

  // 로딩 중일 때 하위 컴포넌트인 SelectSearchFilter 컴포넌트가 언마운트 되기 때문에 컴포넌트는 모든 상태를 잃어버림
  // if (isLoading) {
  //   return (
  //     <div>
  //       <JijoSpinner />
  //     </div>
  //   )
  // }

  return (
    <>
      <JiJoHelmet pageTitle="지조소식 - 공지사항" />
      <MenuTitle title="JIJO NEWS" mainMenu="지조소식" subMenu="공지사항" mainLink="/bbs/Notice" subLink="/bbs/Notice">
        JIJO NOTICE
      </MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="카페 지조 공지사항" pageSubTitleText="카페 지조 소식을 알려드립니다."></PageMainTitle>
        <SelectSearchFilter Collection="notice" handleReload={handleClickRefetch} option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></SelectSearchFilter>
        {/* 상태를 props로 SelectSearchFilter 전달 , handleReload 핸들러전달*/}
        <TableListPagination error={error} collection="notices" field="notice" {...rest}></TableListPagination>
      </section>
    </>
  )
}

export default Notice
