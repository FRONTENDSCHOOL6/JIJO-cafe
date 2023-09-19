import FindStoreSearchForm from "@/components/FindStoreSearchForm";
import KakaoMap from "@/components/KakaoMap";
import MenuTitle from "@/components/MenuTitle";
import JiJoHelmet from "@/utils/JiJoHelmet";
import debounce from "@/utils/debounce";
import {useRef} from "react";
import {useCallback} from "react";
import {useEffect} from "react";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import toast from "react-hot-toast";

function FindStore() {
  /* 검색폼의 Input 컴포넌트가 변경되는 상태 */
  const [changeInput, setChangeInput] = useState("");
  const handleInputChange = debounce(
    useCallback((e) => {
      const {target} = e;
      setChangeInput(target.value);
      inputRef.current.style.border = "";
    })
  );

  /* 검색폼의 Input 결과를  Button 클릭으로 제출한 후의 상태 */
  const [searchedResult, setSearchedResult] = useState([]);
  const handleSearchSubmit = useCallback((e) => {
    setSearchedResult(changeInput);
  });

  /* Input값을 입력하지않고 Search 했을때 Error Message */
  const inputRef = useRef(null);
  useEffect(() => {
    if (!searchedResult) {
      inputRef.current.focus();
      inputRef.current.style.border = "2px solid rgb(239,113,113)";
      toast.error("검색어를 입력해주세요", {
        duration: 1000,
        icon: "🔍",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  }, [searchedResult, inputRef]);

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
          inputRef={inputRef}
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
