import FindStoreSearchForm from "@/components/FindStoreSearchForm";
import KakaoMap from "@/components/KakaoMap";
import MenuTitle from "@/components/MenuTitle";
import JiJoHelmet from "@/utils/JiJoHelmet";
import {useState} from "react";

function FindStore() {
  /* 검색폼의 Input 컴포넌트가 변경되는 상태 */
  const [changeInput, setChangeInput] = useState("");
  const handleInputChange = (e) => {
    const {target} = e;
    setChangeInput(target.value);
    // inputRef.current.style.border = "";
  };

  /* 검색폼의 Input 결과를  Button 클릭으로 제출한 후의 상태 */
  const [searchedResult, setSearchedResult] = useState("");
  const handleSearchSubmit = () => {
    setSearchedResult(changeInput);
  };

  /* KaKaoMap 데이터를 담아올 상태 */
  const [kakaoPlaceResult, setKakaoPlaceResult] = useState([]);

  return (
    <>
      <JiJoHelmet pageTitle="매장 - 매장찾기" />
      <MenuTitle title="STORE">JIJO STORE</MenuTitle>
      <div className="findStore__mainContent relative">
        <KakaoMap
          setKakaoPlaceResult={setKakaoPlaceResult}
          searchedResult={searchedResult}
        />
        <FindStoreSearchForm
          searchedResult={searchedResult}
          handleInputChange={handleInputChange}
          handleSearchSubmit={handleSearchSubmit}
          kakaoPlaceResult={kakaoPlaceResult}
        />
      </div>
    </>
  );
}

export default FindStore;
