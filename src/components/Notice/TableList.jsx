import pb from "@/api/pocketbase"
import { Link } from "react-router-dom"
import yyyymmddDate from "@/utils/yyyymmddDate"

function TableList({ collection, data, field }) {
  // 조회수 증가
  const handleUpViews = async (item) => {
    await pb.collection(`${collection}`).update(item.id, { [`${field}Views`]: item[`${field}Views`] + 1 })
  }

  return (
    <>
      <table className="min-w-max w-full table-auto bg-white my-6 border-t text-deepDarkGray">
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
          {data &&
            data.map((item, index) => {
              return (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 whitespace-nowrap text-center mobile:hidden">
                    <span className=" font-medium">{data.length - index}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <Link to={`/bbs/${field}/detail/${item.id}`}>
                      <p
                        className="text-deepDarkGray"
                        onClick={() => {
                          handleUpViews(item)
                        }}
                      >
                        {item[field + "Title"]}
                      </p>
                    </Link>
                  </td>
                  <td className="py-3 px-6 mobile:hidden text-center">
                    <p className="text-deepDarkGray"> {item[field + "Writer"]}</p>
                  </td>
                  <td className="py-3 px-6 text-center text-deepDarkGray">
                    <time>{yyyymmddDate(item.created)}</time>
                  </td>
                  <td className=" mobile:hidden py-3 px-6 text-center text-deepDarkGray">
                    <span>{item[field + "Views"]}</span>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}

export default TableList
