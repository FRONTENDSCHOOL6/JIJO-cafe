import Button from '@/components/Button'
import { Helmet } from 'react-helmet-async'

function Notice() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <Helmet>
          <title>지조소식 - 공지사항</title>
        </Helmet>
        <div className="text-center ">
          <h2 className="text-jj_43 font-bold ">카페 지조 공지사항</h2>
          <p className="m-10"> 카페 지조 소식을 알려드립니다.</p>
        </div>
        <form>
          <label htmlFor="">제목</label>
          <input type="text" />
          <label htmlFor="">검색어를 입력하세요</label>
          <input type="text" />

          <Button color="primary" padding="px-10" className="mobile:w-full">
            검색
          </Button>
        </form>

        <div className="bg-white my-6 border-t">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="text-jj_15 leading-normal">
                <th className="mobile:hidden py-3 px-6 items-center">번호</th>
                <th className="py-3 px-6 ">제목</th>
                <th className="mobile:hidden py-3 px-6 ">글쓴이</th>
                <th className="py-3 px-6 text-center">날짜</th>
                <th className="mobile:hidden py-3 px-6 ">조회</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light border-t">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 whitespace-nowrap">
                  <div className="text-center">
                    <span className="mobile:hidden font-medium">1</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div>
                    <span>카페 지조 원두 관련 공지</span>
                  </div>
                </td>
                <td className="py-3 px-6 ">
                  <div className=" mobile:hidden text-center">
                    <span>카페 지조</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <span>2023-09-07</span>
                </td>
                <td className=" mobile:hidden py-3 px-6 text-center">
                  <span>0</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Notice
