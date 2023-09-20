import pb from "@/api/pocketbase";
import Button from "@/components/Button";
import MainpageTitle from "@/components/Main/MainpageTitle";
import { usePocketBaseFilteredData } from "@/hooks/usePocektBaseData";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { Link } from "react-router-dom";

function MainEvent() {
  pb.autoCancellation(false);
  const { data } = usePocketBaseFilteredData("events", 1, 3, 'created >= "2023-09-01 00:00:00"');

  return (
    <section className="grid grid-cols-1 place-content-center place-items-center h-screen p-[10%] overflow-hidden">
      <h2 className="sr-only">메인페이지 이벤트</h2>
      <div className="text-center">
        <MainpageTitle highLight="primaryHighlight" subHeading="카페지조 소식" mainHeading="JIJO EVENT"></MainpageTitle>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-[1280px] mx-[2rem] mobile:grid-cols-1">
        {data &&
          data.items?.map((item) => {
            return (
              <figure key={item.id} className="font-light bg-white border rounded-2xl text-deepDarkGray mobile:flex">
                <img
                  src={getPbImageURL(item, "thumbnail")}
                  alt={item.title}
                  className="block object-cover w-full h-auto rounded-t-2xl mobile:w-32 mobile:h-full mobile:rounded-s-2xl mobile:rounded-r-none"
                />
                <div className="flex flex-col w-full p-4 overflow-hidden justify-evenly">
                  <h4 className="overflow-hidden text-jj_20 text-ellipsis break-keep line-clamp-2 whitespace-nowrap">{item.title}</h4>
                  <figcaption className="overflow-hidden text-ellipsis break-keep line-clamp-2 h-[2.89em]">{item.description}</figcaption>
                  <span className=" text-jj_14">2023-09-15</span>
                </div>
              </figure>
            );
          })}
      </div>
      <p className="mt-10 mb-4 font-light text-center mobile:text-jj_13">전체 매장 및 각 매장에서 다양한 이벤트가 진행중 입니다.</p>
      <Link to="/bbs/event" className="text-center">
        <Button type="button" color="primary" className="text-jj_20 font-normal h-[3.4375rem] px-[1.875rem]">
          이벤트 더보기
        </Button>
      </Link>
    </section>
  );
  Link;
}

export default MainEvent;
