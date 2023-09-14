import { Link } from "react-router-dom"
import { getPbImageURL } from "@/utils/getPbImageURL"
import Button from "@/components/Button"
import yyyymmddDate from "@/utils/yyyymmddDate"

function Detail({ data }) {
  // console.log(data)

  return (
    data && (
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <div className=" border-y pt-[2rem] flex flex-col">
          <h3 className="text-jj_24 font-[350] "> {data.noticeTitle}</h3>
          <div className="ml-auto font-light pb-2 flex gap-4 text-[#313131]">
            <p>작성자 : {data.noticeWriter}</p>
            <time>작성일 : {yyyymmddDate(data.noticeDate)}</time>
            <span>조회수 : {data.noticeViews}</span>
          </div>
        </div>
        <div className="my-[1.875rem] font-light text-jj_18">
          {data.noticeImage && <img src={getPbImageURL(data, "noticeImage")} className="w-auto" alt={data.noticeTitle} />}
          {data.noticeDescription}
        </div>
        <div className="my-[1.875rem] py-4 border-y font-light flex gap-[3.4375rem]">
          <p>다음글</p>
          <p>카페 지조 영양성분표</p>
        </div>
        <div className="flex-row flex gap-2 justify-end">
          <Button color="primary" className="mr-auto px-[1.875rem]">
            <Link to="/bbs/notice">목록으로</Link>
          </Button>
          <Button color="primary" className="px-[1.875rem]">
            수정
          </Button>
          <Button color="primary" className="px-[1.875rem]">
            삭제
          </Button>
        </div>
      </section>
    )
  )
}

export default Detail
