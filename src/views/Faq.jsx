import { useState, useCallback } from "react"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import SelectSearchFilter from "@/components/Notice/SelectSearchFilter"
import JiJoHelmet from "@/utils/JiJoHelmet"
import usePagination from "@/hooks/usePagination"
import TableListPagination from "@/components/Notice/TableListPagination"

function Faq() {
  const [searchOption, setSearchOption] = useState("faqTitle") //select 태그
  const [searchText, setSearchText] = useState("") //input 검색어를 입력하세요 창
  // 리팩토링전 usepb훅 사용 -> 리액트쿼리 리팩토링
  // const { data, status } = usePocketBaseFilteredData("notices", 1, 20, `(${searchOption} ~ '${searchText}')`, reload)
  const { error, refetch, ...rest } = usePagination({
    perPage: 10,
    queryKey: "faq",
    dependency: searchText,
    options: {
      sort: "-created",
      filter: `(${searchOption} ~ '${searchText}')`,
    },
  })
  //페이지네이션 사용전 리액트 쿼리
  // const { data, isError, error, refetch } = useQuery({
  //   queryKey: ["faq", searchText],
  //   queryFn: async () => {
  //     const response = await pb.collection("faq").getList(1, 10, {
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
      <JiJoHelmet pageTitle="지조소식 - FAQ" />
      <MenuTitle title="JIJO NEWS"> JIJO FAQ</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="자주하는 질문" pageSubTitleText="궁금하신 내용을 검색해 주세요."></PageMainTitle>
        <SelectSearchFilter Collection="faq" handleReload={handleClickRefetch} option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></SelectSearchFilter>
        <TableListPagination searchText={searchText} searchOption={searchOption} error={error} collection="faq" field="faq" {...rest}></TableListPagination>
      </section>
    </>
  )
}

export default Faq
