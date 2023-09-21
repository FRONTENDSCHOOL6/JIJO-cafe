import pb from "@/api/pocketbase"
import { useQuery } from "@tanstack/react-query"
import { useState, useEffect, useCallback } from "react"
import MenuTitle from "@/components/MenuTitle"
import PageMainTitle from "@/components/PageMainTitle"
import TableList from "@/components/Notice/TableList"
import SelectSearchFilter from "@/components/Notice/SelectSearchFilter"
import JiJoHelmet from "@/utils/JiJoHelmet"

function Faq() {
  const [searchOption, setSearchOption] = useState("faqTitle") //select 태그
  const [searchText, setSearchText] = useState("") //input 검색어를 입력하세요 창
  // const { data, status } = usePocketBaseFilteredData("notices", 1, 20, `(${searchOption} ~ '${searchText}')`, reload)  //usepb훅 사용 -> 리액트쿼리 리팩토링

  const { data, isError, error, refetch } = useQuery({
    queryKey: ["faq", searchText],
    queryFn: async () => {
      const response = await pb.collection("faq").getList(1, 10, {
        sort: "-created",
        filter: `(${searchOption} ~ '${searchText}')`,
      })
      return response.items
    },
    staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
  })

  useEffect(() => {
    refetch() // 삭제시 데이터를 다시 로드하는 함수를 호출
  }, [refetch])

  const handleClickRefetch = useCallback(() => {
    refetch()
  }, [refetch])

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
      <JiJoHelmet pageTitle="지조소식 - FAQ" />
      <MenuTitle title="JIJO NEWS"> JIJO FAQ</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <PageMainTitle pageTitleText="자주하는 질문" pageSubTitleText="궁금하신 내용을 검색해 주세요."></PageMainTitle>
        <SelectSearchFilter Collection="faq" handleReload={handleClickRefetch} option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></SelectSearchFilter>
        <TableList collection="faq" field="faq" data={data} />
      </section>
    </>
  )
}

export default Faq
