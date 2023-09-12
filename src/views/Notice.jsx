import pb from "@/api/pocketbase";
import {Helmet} from "react-helmet-async";
import {useState, useEffect} from "react";
import MenuTitle from "@/components/MenuTitle";
import NoticeList from "@/components/Notice/NoticeList";
import JijoSpinner from "@/components/JijoSpinner";
import PageMainTitle from "@/components/PageMainTitle";
import NoticeSearchFilter from "@/components/Notice/NoticeSearchFilter";
import {usePocketBaseFilteredData} from "@/hooks/usePocektBaseData";

function Notice() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("pending");
  const [searchOption, setSearchOption] = useState("noticeTitle"); //select 태그
  const [searchText, setSearchText] = useState(""); //input 창
  const [reload, setReload] = useState(true); //검색버튼 클릭시 pb 다시 작동하도록
  // error 상태 사용?

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        let noticeItems;
        if (!searchText) {
          const response = await pb.collection("notices").getList(1, 10);
          noticeItems = response.items;
          console.log(noticeItems);
        } else {
          const response = await pb.collection("notices").getList(1, 10, {
            filter: `(${searchOption} ~ '${searchText}')`,
          });
          noticeItems = response.items;
          console.log(noticeItems);
        }
        setData(noticeItems);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.error("error");
      }
    };
    if (reload) {
      fetchData();
      setReload(false); //  fetchdata가 실행되면 flase로 바꿔줘서 리랜더를 막아주기 , 버튼 눌렀을때맏 다시 검색을 하게 되는중
    }
  }, [reload]);

  if (status === "loading") {
    return <JijoSpinner />;
  }
  // 스피너를 로딩 중일 때만 렌더링

  const handleReload = () => {
    setReload(true);
  };

  return (
    <>
      <Helmet>
        <title>지조소식 - 공지사항</title>
      </Helmet>
      <MenuTitle title="JIJO NEWS"> JIJO NOTICE</MenuTitle>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <PageMainTitle
          pageTitleText="카페 지조 공지사항"
          pageSubTitleText="카페 지조 소식을 알려드립니다."></PageMainTitle>

        <NoticeSearchFilter
          handleReload={handleReload}
          option={searchOption}
          onChangeOption={setSearchOption}
          text={searchText}
          onChangeText={setSearchText}></NoticeSearchFilter>
        {/* 상태를 props로 NoticeSearchFilter에 전달 */}
        <NoticeList data={data} />
      </section>
    </>
  );
}

export default Notice;
