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

async function fetchFaq(searchOption, searchText) {
  const response = await pb.collection("faq").getList(1, 10, {
    sort: "-created",
    filter: `(${searchOption} ~ '${searchText}')`,
  })
  return response.items
  console.log(response)
}

function Faq() {
  const [searchOption, setSearchOption] = useState("faqTitle") //select 태그
  const [searchText, setSearchText] = useState("") //input 검색어를 입력하세요 창
  const [reload, setReload] = useState(true) //검색버튼 클릭시 [reload] 리렌더링

  pb.autoCancellation(false)
  // const { data, status } = usePocketBaseFilteredData("notices", 1, 20, `(${searchOption} ~ '${searchText}')`, reload)  //usepb훅 사용 -> 리액트쿼리 리팩토링

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["faq"],
    queryFn: () => fetchFaq(searchOption, searchText),
    staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
  })
  useEffect(() => {
    refetch() // 삭제시 데이터를 다시 로드하는 함수를 호출
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
        <title>지조소식 - FAQ</title>
      </Helmet>
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
