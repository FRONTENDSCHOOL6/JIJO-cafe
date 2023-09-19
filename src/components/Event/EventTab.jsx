import pb from "@/api/pocketbase";
import TabContent from "./EventContents";
import { useState, useEffect } from "react";
import EventSearchForm from "./EventSearchForm";

function EventTab() {
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

  pb.autoCancellation(false);
  const [select, setSelect] = useState("total");
  const [contentData, setContentData] = useState(null);

  // setSelect에 클릭한 type 값을 담는 함수
  const handleClick = (type) => {
    setSelect(type);
  };

  // filter 조건 처리 함수
  function getFilter() {
    return select === "total" || undefined || null ? "" : `category = "${select}"`;
  }

  useEffect(() => {
    const handleData = async () => {
      const resultList = await pb.collection("events").getList(
        1,
        20,
        {
          filter: getFilter(),
        },
        "events"
      );
      setContentData(resultList);
    };

    if (select) {
      handleData();
    }
    return () => {
      // 컴포넌트가 언마운트될 때 contentData 상태 변수를 정리
      setContentData(null);
    };
  }, [select]); // select 상태 변수가 변경될 때만 useEffect() 훅이 실행되도록 함

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
