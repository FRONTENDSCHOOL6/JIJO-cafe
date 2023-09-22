// import pb from "@/api/pocketbase";
import JijoError from "../JijoError";
import TabContents from "./TabContents";
import JijoSpinner from "../JijoSpinner";
import { useState, useEffect } from "react";
import EventSearchForm from "./EventSearchForm";
import EventPagination from "./EventPagination";
// import { useQuery } from "@tanstack/react-query";
import usePaginationQuery from "@/hooks/usePaginationQuery";

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
  const getTabFilter = () => (select === "total" || "" || undefined || null ? "" : `category = "${select}"`);

  const { data, isLoading, error, isError, ...rest } = usePaginationQuery({
    perPage: 12,
    queryKey: "events",
    dependency: select,
    options: {
      sort: "-created",
      filter: getTabFilter(),
    },
  });

  useEffect(() => {
    setContentData(data);
  }, [data]);

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
            // type에 따라 클래스를 넣어줌
          >
            {item.title}
          </li>
        ))}
      </ul>
      <EventSearchForm />
      <TabContents data={contentData} />
      <EventPagination error={error} data={contentData} {...rest} />
    </>
  );
}

export default EventTab;
