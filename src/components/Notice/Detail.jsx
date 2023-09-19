import { Link } from "react-router-dom"
import { getPbImageURL } from "@/utils/getPbImageURL"
import Button from "@/components/Button"
import yyyymmddDate from "@/utils/yyyymmddDate"

function Detail({ data, handleDelete, field }) {
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
          {data[`${field}Image`] && <img src={getPbImageURL(data, `${field}Image`)} className="w-auto" alt={data[`${field}Title`]} />}
          {data[`${field}Description`]}
        </div>
        <div className="my-[1.875rem] py-4 border-y font-light flex gap-[3.4375rem]">
          <p>다음글</p>
          <p>{data?.[`${field}Title`]}</p>
        </div>
        <div className="flex-row flex gap-2 justify-end">
          <Button color="primary" className="mr-auto px-[1.875rem]">
            <Link to={`/bbs/${field}`}>목록으로</Link>
          </Button>
          <Link to={`/bbs/${field}/update/${data.id}`}>
            <Button color="primary" className="px-[1.875rem]">
              수정
            </Button>
          </Link>
          <Button color="primary" className="px-[1.875rem]" onClick={handleDelete}>
            삭제
          </Button>
        </div>
      </section>
    )
  )
}

export default Detail
