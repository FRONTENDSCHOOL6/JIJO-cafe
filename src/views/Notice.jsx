import pb from '@/api/pocketbase'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import MenuTitle from '@/components/MenuTitle'
import NoticeList from '@/components/Notice/NoticeList'
import JijoSpinner from '@/components/JijoSpinner'
import PageMainTitle from '@/components/PageMainTitle'
import NoticeSearchFilter from '@/components/Notice/NoticeSearchFilter'

function Notice() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('pending')
  const [error, setError] = useState(null)
  const [searchOption, setSearchOption] = useState('noticeTitle') //select 태그
  const [searchText, setSearchText] = useState('') //input 창
  const [reload, setReload] = useState(true) //검색버튼 클릭시 pb 다시 작동하도록
  // error 상태 사용?

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading')
      try {
        let noticeItems
        if (!searchText) {
          pb.autoCancellation(false) // 오토캔슬 false
          const response = await pb.collection('notices').getList(1, 10)
          noticeItems = response.items
          console.log(noticeItems)
        } else {
          const response = await pb.collection('notices').getList(1, 10, {
            filter: `(${searchOption} ~ '${searchText}')`,
          })
          noticeItems = response.items
          console.log(noticeItems)
        }
        setData(noticeItems)
        setStatus('success')
      } catch (error) {
        console.log(error.constructor)
        if (error) {
          setStatus('error')
          setError(error)
        }
      }
    }
    if (reload) {
      fetchData()
      setReload(false) //  fetchdata가 실행되면 flase로 바꿔줘서 리랜더를 막아주기 , 버튼 눌렀을때맏 다시 검색을 하게 되는중
    }
  }, [reload])

  if (status === 'loading') {
    return <JijoSpinner />
  }
  // 데이터 가져오는 중(로딩)일 때 표시할 화면

  if (status === 'error') {
    return (
      <div role="alert" className="flex flex-col h-[calc(100vh_-_70px)] w-auto justify-center items-center ">
        <p>{error.toString()}</p>
        <p>알 수 없는 오류가 발생했습니다.</p>
      </div>
    )
  }
  // 데이터 가져오기 실패한 경우 표시할 화면

  const handleReload = () => {
    setReload(true)
  }

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <PageMainTitle pageTitleText="카페 지조 공지사항" pageSubTitleText="카페 지조 소식을 알려드립니다."></PageMainTitle>

        <NoticeSearchFilter handleReload={handleReload} option={searchOption} onChangeOption={setSearchOption} text={searchText} onChangeText={setSearchText}></NoticeSearchFilter>
        {/* 상태를 props로 NoticeSearchFilter에 전달 */}
        <NoticeList data={data} />
      </section>
    </>
  )
}

export default Notice
