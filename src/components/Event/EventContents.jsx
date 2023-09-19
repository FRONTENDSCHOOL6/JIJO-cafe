import { Link } from "react-router-dom";
import { getPbImageURL } from "@/utils/getPbImageURL";

function TabContent({ data }) {
  return (
    <>
      <div className="flex flex-wrap justify-between mb-10 gap-y-5 gap-x-2">
        {data &&
          data?.items?.map((item) => {
            return (
              <div
                key={item.id}
                className="font-light max-w-[19.0625rem] bg-white h-fit rounded-2xl text-deepDarkGray border cursor-pointer overflow-hidden"
                onClick={() => {}}
              >
                <img
                  src={getPbImageURL(item, "thumbnail")}
                  alt={item.title}
                  className="object-cover rounded-t-2xl hover:scale-[1.1] hover:translate-[50%] mobile:w-[346px] transition-all tablet:w-[195px]"
                />
                <div className="w-full p-6 h-[100px] rounded-b-2xl  mobile:w-[346px] tablet:w-[195px]">
                  <h4 className="overflow-hidden text-jj_20 text-ellipsis break-keep whitespace-nowrap ">{item.title}</h4>
                  <span className="text-jj_14">2023-09-15</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default TabContent;
