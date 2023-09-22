import pb from "@/api/pocketbase";
import Button from "@/components/Button";
import LazyImage from "@/utils/LazyImage";
import JijoError from "@/components/JijoError";
import yyyymmddDate from "@/utils/yyyymmddDate";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink } from "react-router-dom";
import JijoSpinner from "@/components/JijoSpinner";
import { getPbImageURL } from "@/utils/getPbImageURL";
import MainpageTitle from "@/components/Main/MainpageTitle";

function MainEvent() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["mainEvent"],
    queryFn: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const mainEvent = await pb.collection("events").getList(1, 3, {
          sort: "updated",
        });
        return { mainEvent };
      } catch (error) {
        throw error;
      }
    },
  });

  // console.log("mainEvent->", data);

  if (isLoading) {
    return (
      <div>
        <JijoSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert">
        <JijoError error={error} />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 place-content-center place-items-center h-screen p-[10%]  overflow-hidden mobile:p-[5%]">
      <h2 className="sr-only">메인페이지 이벤트</h2>
      <div className="text-center">
        <MainpageTitle highLight="primaryHighlight" subHeading="카페지조 소식" mainHeading="JIJO EVENT"></MainpageTitle>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-[1280px] mx-[2rem] mobile:grid-cols-1">
        {data &&
          data.mainEvent.items?.map((item) => {
            return (
              <Link to={`/bbs/event/detail/${item.id}`} key={item.id}>
                <figure className="overflow-hidden font-light bg-white border cursor-pointer rounded-2xl text-deepDarkGray mobile:flex">
                  <div className="overflow-hidden">
                    <LazyImage
                      src={getPbImageURL(item, "thumbnail")}
                      alt={item.title}
                      className="block object-cover w-full h-auto rounded-t-2xl hover:scale-[1.1] hover:translate-[50%] mobile:w-32 mobile:h-full mobile:rounded-s-2xl transition-transform mobile:rounded-r-none"
                    />
                  </div>
                  <div className="flex flex-col w-full p-4 overflow-hidden justify-evenly">
                    <h4 className="text-jj_20 textEllipsis mobile:text-jj_16">{item.title}</h4>
                    <figcaption className="textEllipsis h-[2.89em] mobile:text-jj_13">{item.description}</figcaption>
                    <span className="text-jj_14 mobile:text-jj_13">
                      <time dateTime={`${data.update}`}>{yyyymmddDate(item.update)}</time>
                    </span>
                  </div>
                </figure>
              </Link>
            );
          })}
      </div>
      <p className="mt-10 mb-4 font-light text-center mobile:text-jj_13">전체 매장 및 각 매장에서 다양한 이벤트가 진행중 입니다.</p>
      <NavLink to="/bbs/event" className="text-center">
        <Button type="button" color="primary" className="mobile:mobileButton text-jj_20 font-normal h-[3.4375rem] px-[1.875rem]">
          이벤트 더보기
        </Button>
      </NavLink>
    </section>
  );
}

export default MainEvent;
