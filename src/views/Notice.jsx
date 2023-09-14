import pb from "@/api/pocketbase"
import { Helmet } from "react-helmet-async"
import MenuTitle from "@/components/MenuTitle"
import NoticeList from "@/components/Notice/NoticeList"
import JijoSpinner from "@/components/JijoSpinner"
import PageMainTitle from "@/components/PageMainTitle"
import NoticeSearchFilter from "@/components/Notice/NoticeSearchFilter"
import { useState, useEffect } from "react"
import { usePocketBaseFilteredData } from "@/hooks/usePocektBaseData"

function Notice() {
  const [searchOption, setSearchOption] = useState("noticeTitle") //select 태그
  const [searchText, setSearchText] = useState("") //input 검색어를 입력하세요 창
  const [reload, setReload] = useState(true) //검색버튼 클릭시 [reload] 리렌더링
  // const [error, setError] = useState(null)

  pb.autoCancellation(false)
  const { data, status } = usePocketBaseFilteredData("notices", 1, 20, `(${searchOption} ~ '${searchText}')`, reload)

  if (status === "loading") {
    return <JijoSpinner />
  }

  // if (status === "error") {
  //   return (
  //     <div
  //       role="alert"
  //       className="flex flex-col h-[calc(100vh_-_70px)] w-auto justify-center items-center ">
  //       <p>{error.toString()}</p>
  //       <p>알 수 없는 오류가 발생했습니다.</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <PageMainTitle pageTitleText="카페 지조 공지사항" pageSubTitleText="카페 지조 소식을 알려드립니다."></PageMainTitle>

        <NoticeSearchFilter handleReload={() => setReload(!reload)} option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></NoticeSearchFilter>
        {/* 상태를 props로 NoticeSearchFilter에 전달 , handleReload 핸들러전달*/}
        <NoticeList data={data.items} />
      </section>
    </>
  )
}

export default Notice
