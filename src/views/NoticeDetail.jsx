import pb from '@/api/pocketbase'
import Button from '@/components/Button'
import MenuTitle from '@/components/MenuTitle'
import yyyymmddDate from '@/utils/yyyymmddDate'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function NoticeDetail() {
  const { noticeId } = useParams()
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('pending')

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading')
      try {
        const noticeItems = await pb.collection('notices').getOne(noticeId) //단일 데이터 가져올때 getOne
        console.log(noticeItems)
        console.log(noticeId)
        setData(noticeItems)
        console.log(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.error(error)
      }
    }
    fetchData()
  }, [noticeId])

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <div className=" border-y pt-[2rem] flex flex-col">
          <h3 className="text-jj_24 font-[350] ">카페 지조 원두 관련 공지</h3>
          <div className="ml-auto font-light text-[#313131]">
            작성자 작성일 조회수
            {/* <p>{item.noticeWriter}</p>
          <time>{yyyymmddDate(item.noticeDate)}</time>
          <span>{item.noticeViews}</span> */}
          </div>
        </div>
        <p className="my-[1.875rem] font-light text-jj_18">내용 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique laboriosam dicta facere nisi corrupti, odit qui debitis commodi quos natus quod rem ad provident rerum harum est quisquam. Architecto.</p>
        <div className="my-[1.875rem] py-4 border-y font-light flex gap-[3.4375rem]">
          <p>다음글</p>
          <p>카페 지조 영양성분표</p>
        </div>
        <div className="flex-row flex gap-2 justify-end">
          <Button color="primary" className="mr-auto px-[1.875rem]">
            목록으로
          </Button>
          <Button color="primary" className="px-[1.875rem]">
            수정
          </Button>
          <Button color="primary" className="px-[1.875rem]">
            삭제
          </Button>
        </div>
      </section>
    </>
  )
}

export default NoticeDetail
