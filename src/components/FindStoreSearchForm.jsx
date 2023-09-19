import {useEffect} from "react";
import Button from "./Button";
import Input from "./Input";
import ReadingGlassesButton from "./ReadingGlassesButton";
const {kakao} = window;

function FindStoreSearchForm({
  inputRef,
  searchedResult,
  handleInputChange,
  handleSearchSubmit,
  kakaoPlaceResult,
}) {
  /* FormListWrap 메가MGC커피 -> 지조커피로 반환하는 함수 */
  const modifyAddressName = (addressName) => {
    return addressName.replace(/메가MGC커피/g, "지조커피");
  };

  return (
    <>
      <form
        className="flex flex-col absolute top-0 left-0 p-8 w-[20rem]"
        onSubmit={(e) => e.preventDefault()}>
        <div className="btnWrap flex">
          <Button
            color="secondary"
            className="flex-grow"
            onClick={handleSearchSubmit}>
            지역검색
          </Button>
        </div>
        <div className="searchWrap flex flex-col text-center bg-primary">
          <h2 className="font-semibold py-[1.25rem]">매장찾기</h2>
          <span className="font-thin">함께하는 카페지조</span>
          <div className="inputWrap relative">
            <Input
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit();
                }
              }}
              defaultValue={searchedResult}
              onChange={handleInputChange}
              placeholder="지역명을 입력해주세요"
              className="w-min m-[1.25rem] placeholder:text-[12px] placeholder:text-gray-400"
            />
            <ReadingGlassesButton
              onClick={handleSearchSubmit}
              className="absolute top-1/2 transform -translate-y-1/2 right-10"
            />
          </div>
        </div>
        <div className="searchFormListWrap bg-white pb-[15rem] text-center pt-4 h-[20rem] overflow-scroll">
          {kakaoPlaceResult?.length === 0 ? (
            <p>검색결과가 없습니다</p>
          ) : (
            <ul className="flex flex-col space-y-2 text-sm">
              {kakaoPlaceResult?.map((place) => {
                return (
                  <li
                    key={place.id}
                    className="border-b pb-2 text-gray-500 cursor-pointer">
                    <p>{modifyAddressName(place.place_name)}</p>
                    <p>{place.address_name}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </form>
    </>
  );
}

export default FindStoreSearchForm;
