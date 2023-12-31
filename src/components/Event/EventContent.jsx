import {Link} from "react-router-dom";
import Button from "@/components/Button";
import LazyImage from "@/utils/LazyImage";
import yyyymmddDate from "@/utils/yyyymmddDate";
import {getPbImageURL} from "@/utils/getPbImageURL";
import {useNavigate} from "react-router-dom";

function EventContent({data}) {
  const navigate = useNavigate();

  const handleNavigateEventPage = () => {
    navigate("/bbs/event");
  };

  return (
    data && (
      <section className="py-20 tablet:p-16 m-auto max-w-[80rem] mobile:p-5">
        <div className="w-full mb-3 border-t-2">
          <div className="flex flex-col text-deepDarkGray ">
            <h2 className="py-6 text-[1.75rem] mobile:text-jj_20 mobile:py-3">
              {data.title}
            </h2>
            <dl className="flex justify-end gap-1 pb-2 font-light text-gray-400 border-b mobile:text-jj_13 mobile:justify-start">
              <dt>구분</dt>
              <dd>일반</dd>
              <dt className="pl-3">작성자</dt>
              <dd>{data.writer}</dd>
              <dt className="pl-3">작성일</dt>
              <dd>
                <time dateTime={`${data.update}`}>
                  {yyyymmddDate(data.update)}
                </time>
              </dd>
              <dt className="pl-3">조회수</dt>
              <dd>{data.views}</dd>
            </dl>
          </div>
          <figure className="flex flex-col items-center px-24 pt-16 pb-24 mobile:px-0 tablet:px-10">
            <figcaption className="max-w-xl pb-10">
              {data.description}
            </figcaption>
            <LazyImage
              src={getPbImageURL(data, "image")}
              alt={data.title}
              className="object-contain w-full"></LazyImage>
          </figure>
        </div>
        <div className="pb-10 border-t">
          <div className="py-4 border-b font-light flex gap-[3.4375rem]">
            <p>다음글</p>
            <Link to={`/bbs/event/detail/${data.nextEventId}`}>
              <p>{data.nextEventTitle || "다음 글이 없습니다."}</p>
            </Link>
          </div>
          <div className="mb-[1.875rem] py-4 border-b font-light flex gap-[3.4375rem]">
            <p>이전글</p>
            <Link to={`/bbs/event/detail/${data.previousEventId}`}>
              <p>{data.previousEventTitle || "이전 글이 없습니다."}</p>
            </Link>
          </div>
          <Button
            onClick={handleNavigateEventPage}
            color="primary"
            className="flex items-center p-7 text-jj_20">
            목록으로
          </Button>
        </div>
      </section>
    )
  );
}

export default EventContent;
