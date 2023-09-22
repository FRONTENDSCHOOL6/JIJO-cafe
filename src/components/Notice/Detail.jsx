import { Link } from "react-router-dom"
import { getPbImageURL } from "@/utils/getPbImageURL"
import Button from "@/components/Button"
import yyyymmddDate from "@/utils/yyyymmddDate"
import LazyImage from "@/utils/LazyImage"
import useAuthStore from "@/store/store"

function Detail({ data, handleDelete, field, Field }) {
  const user = useAuthStore((state) => state.user) // useAuthStore를 통해 user 정보를 가져오기
  const isAdmin = user && user.permission === "administrator" // isAdmin을 user.role이 "admin"일 때 true로 설정

  return (
    data && (
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60 text-deepDarkGray">
        <div className=" border-y pt-[2rem] flex flex-col">
          <h3 className="text-jj_24 font-[350] "> {data?.[`${field}Title`]}</h3>
          <div className="ml-auto font-light pb-2 flex gap-4 text-[#313131]">
            <p>작성자 : {data?.[`${field}Writer`]}</p>
            <time>작성일 : {yyyymmddDate(data?.[`${field}Date`])}</time>
            <span>조회수 : {data?.[`${field}Views`]}</span>
          </div>
        </div>
        <div className="my-[1.875rem] font-light text-jj_18">
          {data[`${field}Image`] && <LazyImage src={getPbImageURL(data, `${field}Image`)} className="w-auto" alt={data[`${field}Title`]} />}
          {data[`${field}Description`]}
        </div>

        <div className="mt-[1.875rem] py-4 border-y font-light flex gap-[3.4375rem]">
          <p>다음글</p>
          <Link to={`/bbs/${field}/detail/${data[`next${Field}Id`]}`}>
            <p>{data[`next${Field}Title`] || "다음 글이 없습니다."}</p>
          </Link>
        </div>
        <div className="mb-[1.875rem] py-4 border-b font-light flex gap-[3.4375rem]">
          <p>이전글</p>
          <Link to={`/bbs/${field}/detail/${data[`previous${Field}Id`]}`}>
            <p>{data[`previous${Field}Title`] || "이전 글이 없습니다."}</p>
          </Link>
        </div>
        <div className="flex-row flex gap-2 justify-end">
          <Link to={`/bbs/${field}`} className="mr-auto ">
            <Button color="primary" className="px-[1.875rem]">
              목록으로
            </Button>
          </Link>

          {isAdmin && (
            <>
              <Link to={`/bbs/${field}/update/${data.id}`}>
                <Button color="primary" className="px-6">
                  수정
                </Button>
              </Link>
              <Button color="primary" className="px-6" onClick={handleDelete}>
                삭제
              </Button>
            </>
          )}
        </div>
      </section>
    )
  )
}

export default Detail
