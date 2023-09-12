import { useState } from 'react'
import { useEffect } from 'react'
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
        // console.log(noticeItems)
        setData(noticeItems)
        // console.log(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }
    fetchData()
  }, [noticeId])

  return <div>NoticeDetail</div>
}

export default NoticeDetail
