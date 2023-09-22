import pb from "@/api/pocketbase";
import FindStoreSearchForm from "@/components/FindStoreSearchForm";
import KakaoMap from "@/components/KakaoMap";
import MenuTitle from "@/components/MenuTitle";
import JiJoHelmet from "@/utils/JiJoHelmet";
import {useEffect} from "react";
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

  useEffect(() => {
    async function handleFunction() {
      const auth = await pb
        .collection("users")
        .authWithOAuth2({provider: "github"});
      return console.log(auth);
    }
    handleFunction();
  }, []);

  return (
    <>
      <JiJoHelmet pageTitle="매장 - 매장찾기" />
      <MenuTitle
        title="STORE"
        mainLink="/findStore"
        subLink="/findStore"
        mainMenu="매장"
        subMenu="매장찾기">
        JIJO STORE
      </MenuTitle>
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
