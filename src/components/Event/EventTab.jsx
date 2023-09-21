import { useState } from "react";
import pb from "@/api/pocketbase";
import TabContent from "./TabContents";
import JijoSpinner from "../JijoSpinner";
import EventSearchForm from "./EventSearchForm";
import { useQuery } from "@tanstack/react-query";

function EventTab() {
  const [select, setSelect] = useState("total");
  const [contentData, setContentData] = useState([]);

  const items = [
    {
      type: "total",
      title: "전체",
    },
    {
      type: "newMenuEvents",
      title: "메뉴 이벤트",
    },
    {
      type: "affiliateEvents",
      title: "제휴 이벤트",
    },
    {
      type: "partnershipBenefits",
      title: "제휴 혜택",
    },
  ];

  // setSelect에 클릭한 type 값을 담는 함수
  const handleClick = (type) => {
    setSelect(type);
  };

  // filter 조건 처리
  const getFilter = () => (select === "total" || "" || undefined || null ? "" : `category = "${select}"`);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["events", select],
    queryFn: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const events = await pb.collection("events").getList(1, 20, {
          sort: "updated",
          filter: getFilter(),
        });
        // console.log("events.items->", events.items);
        setContentData(events);
        return { events };
      } catch (error) {
        throw error;
      }
    },
    refetchOnUpdate: true,
  });

  if (isLoading) {
    return (
      <div>
        <JijoSpinner />
      </div>
    );
  }

  if (isError) {
    return <div role="alert">{error.toString()}</div>;
  }
  // console.log("ContentData->", contentData);

  return (
    <>
      <ul className="flex justify-between font-light text-center text-deepDarkGray">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.type)}
            // 클릭시 setSelect에 type을 넣어줌
            className={`${select === item.type ? "select" : "default"} flex-1 py-4 cursor-pointer border-[#DBDDDF] box-content`}
            // type에 따라 클래스 넣기
          >
            {item.title}
          </li>
        ))}
      </ul>
      <EventSearchForm />

      <TabContent data={contentData} />
    </>
  );
}

export default EventTab;
