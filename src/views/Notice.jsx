import { Helmet } from 'react-helmet-async'

import MenuTitle from '@/components/MenuTitle'

import NoticeList from '@/components/Notice/NoticeList'
import { useState } from 'react'
import NoticeSearchFilter from '@/components/Notice/NoticeSearchFilter'

function Notice() {
  const [searchOption, setSearchOption] = useState('noticeTitle') //select 태그
  const [searchText, setSearchText] = useState('') //input 창

  // const [views, setViews] = useState(0);
  // error 상태 사용?

  const handleViewClick = () => {
    // 조회수+1 증가
    setViews(views + 1)
  }

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>

      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <div className="text-center ">
          <h2 className="text-jj_43 font-bold ">카페 지조 공지사항</h2>
          <p className="m-10"> 카페 지조 소식을 알려드립니다.</p>
        </div>
        <NoticeSearchFilter option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></NoticeSearchFilter>
        {/* 상태를 props로 NoticeSearchFilter에 전달 */}
        <NoticeList option={searchOption} text={searchText}></NoticeList>
      </section>
    </>
  )
}

export default Notice
