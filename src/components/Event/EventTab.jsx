import JijoError from "../JijoError";
import TabContents from "./TabContents";
import JijoSpinner from "../JijoSpinner";
import {useState, useEffect} from "react";
import EventSearchForm from "./EventSearchForm";
import EventPagination from "./EventPagination";
import usePaginationQuery from "@/hooks/usePaginationQuery";

function EventTab() {
  const [select, setSelect] = useState("total");
  const [contentData, setContentData] = useState([]);

  /* 사용자의 입력값을 감지하고 있는 상태 */
  const [searchText, setSearchText] = useState("");
  const handleInputSearch = (e) => {
    const {target} = e;
    setSearchText(target.value);
  };

  /* 사용자의 입력값을 최종적으로 담은 상태 */
  const [searchResult, setSearchResult] = useState("");
  const handleSearchResult = (e) => {
    e.preventDefault();
    setSearchResult(searchText);
  };

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
  function getFilter() {
    return select === "total" ? "" : `category = "${[select]}"`;
  }

  const {data, isLoading, error, isError, ...rest} = usePaginationQuery({
    perPage: 12,
    queryKey: "events",
    dependency: select,
    options: {
      sort: "-created",
      filter: getFilter(),
    },
  });

  // console.log(data);
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

  return (
    <>
      <ul className="flex justify-between font-light text-center text-deepDarkGray">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.type)}
            // 클릭시 setSelect에 type을 넣어줌
            className={`${
              select === item.type ? "select" : "default"
            } flex-1 py-4 cursor-pointer border-[#DBDDDF] box-content`}
            // type에 따라 클래스를 넣어줌
          >
            {item.title}
          </li>
        ))}
      </ul>
      <EventSearchForm
        searchText={searchText}
        handleInputSearch={handleInputSearch}
        handleSearchResult={handleSearchResult}
      />
      <TabContents data={contentData} searchResult={searchResult} />
      <EventPagination error={error} data={contentData} {...rest} />
    </>
  );
}

export default EventTab;
