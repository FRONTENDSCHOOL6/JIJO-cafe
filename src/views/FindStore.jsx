import FindStoreSearchForm from "@/components/FindStoreSearchForm";
import KakaoMap from "@/components/KakaoMap";
import MenuTitle from "@/components/MenuTitle";
import useAuthStore from "@/store/store";
import debounce from "@/utils/debounce";
import {useEffect} from "react";
import {useState} from "react";
import {useRef} from "react";
import {Helmet} from "react-helmet-async";

function FindStore() {
  const isAuth = useAuthStore((state) => state.isAuth);

  const inputRef = useRef(null);

  useEffect(() => {
    const infoWindow = new kakao.maps.InfoWindow({zIndex: 1});
  }, []);

  /* 입력한 폼 기반으로 데이터 검색 기능 */
  const [searchData, setSearchData] = useState("");
  const handleSearchPlace = debounce((e) => {
    const {value} = e.target;
    setSearchData(value);
  });

  /* 제출한 검색어 관리 */
  const [keyword, setKeyword] = useState("");
  const handleSubmitKeyword = (e) => {
    e.preventDefault();
    setKeyword(searchData);
  };

  return (
    <>
      <Helmet>
        <title>매장 - 매장찾기</title>
      </Helmet>
      <MenuTitle title="STORE">JIJO STORE</MenuTitle>
      <div className="findStore__mainContent relative">
        <KakaoMap keyword={keyword} />
        <FindStoreSearchForm
          data={searchData}
          search={handleSearchPlace}
          submit={handleSubmitKeyword}
          inputRef={inputRef}
        />
      </div>
    </>
  );
}

export default FindStore;
