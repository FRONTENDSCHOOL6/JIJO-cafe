import {getEvents} from "@/api/pockets";
import usePagination from "@/hooks/usePagination";
import {getPbImageURL} from "@/utils/getPbImageURL";
import LazyImage from "@/utils/LazyImage";
import {useQueryGetEvents} from "@/api/pockets/useQueryPocketBase";
import JijoSpinner from "../JijoSpinner";
import EventPagiNation from "./EventPageNation";
import {useQuery} from "@tanstack/react-query";
import pb from "@/api/pocketbase";

export function TabContent() {
  const getEventsCollectionItems = async () => {
    return await pb.collection("events").getList(1, 20);
  };

  const {isLoading, error, data} = useQuery({
    queryKey: ["events"],
    queryFn: getEventsCollectionItems,
    staleTime: 1 * 1000 * 60 * 60,
  });

  if (isLoading) {
    <JijoSpinner />;
  }

  if (error) {
    return (
      <div
        role="alert"
        className="flex justify-center items-center p-8 min-h-[420px]">
        {error.toString()}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-between mb-10 gap-y-5 gap-x-2">
        {data?.items?.map((item) => {
          console.log(item);
          const imageSource = getPbImageURL(item, "image");
          return (
            <div
              key={item.id}
              className="font-light max-w-[19.0625rem] bg-white h-fit rounded-2xl text-deepDarkGray border cursor-pointer overflow-hidden">
              <LazyImage
                src={imageSource}
                alt={item.title}
                className="object-cover rounded-t-2xl hover:scale-[1.1] hover:translate-[50%] mobile:w-[346px] transition-all tablet:w-[195px]"
              />
              <div className="w-full p-6 h-[100px] rounded-b-2xl  mobile:w-[346px] tablet:w-[195px]">
                <h4 className="overflow-hidden text-jj_20 text-ellipsis break-keep whitespace-nowrap ">
                  {item.title}
                </h4>
                <span className="text-jj_14">2023-09-15</span>
              </div>
            </div>
          );
        })}
      </div>
      <EventPagiNation data={data} />
    </>
  );
}
