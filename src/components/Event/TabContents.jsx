import { Link } from "react-router-dom";
import LazyImage from "@/utils/LazyImage";
import yyyymmddDate from "@/utils/yyyymmddDate";
import { getPbImageURL } from "@/utils/getPbImageURL";

function TabContent({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mobile:grid-cols-2">
        {data &&
          data?.items?.map((item) => {
            return (
              <div key={item.id} className="w-full font-light bg-white border cursor-pointer h-fit rounded-2xl text-deepDarkGray ">
                <Link to={`/bbs/event/detail/${item.id}`}>
                  <div className="overflow-hidden rounded-t-2xl">
                    <LazyImage
                      src={getPbImageURL(item, "thumbnail")}
                      alt={item.title}
                      className="object-cover rounded-t-2xl hover:scale-[1.1] hover:translate-[50%] transition-all"
                    />
                  </div>
                  <div className="w-full p-6 rounded-b-2xl mobile:p-3 tablet:p-5">
                    <h4 className="overflow-hidden text-jj_20 text-ellipsis break-keep whitespace-nowrap tablet:text-jj_18 mobile:text-jj_16">{item.title}</h4>
                    <span className="text-jj_14 mobile:text-jj_13">
                      <time dateTime={`${data.update}`}>{yyyymmddDate(item.update)}</time>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default TabContent;
