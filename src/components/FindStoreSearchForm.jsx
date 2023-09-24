import FindStoreSearchFormListWrapper from "@/layout/Wrapper/FindStoreSearchFormListWrapper";
import Button from "./Button";
import Input from "./Input";
import ReadingGlassesButton from "./ReadingGlassesButton";

function FindStoreSearchForm({
  searchedResult,
  handleInputChange,
  handleSearchSubmit,
  kakaoPlaceResult,
  kakaoMarkes,
}) {
  /* FormListWrap 메가MGC커피 -> 지조커피로 반환하는 함수 */
  const modifyAddressName = (addressName) => {
    return addressName.replace(/메가MGC커피/g, "지조커피");
  };

  /* 리스트아이템들 클릭 시 카카오 마커로 이동 */
  const handleListItemClick = (index) => {
    if (index < kakaoMarkes.length) {
      window.kakao.maps.event.trigger(kakaoMarkes[index], "click");
    }
  };

  return (
    <>
      <form
        className="flex flex-col absolute top-0 left-0 p-8 w-[20rem] mobile:w-[5rem]"
        onSubmit={(e) => e.preventDefault()}>
        <Button
          color="secondary"
          className="flex-grow"
          onClick={handleSearchSubmit}>
          지역검색
        </Button>
        <div className="searchWrap flex flex-col text-center bg-primary">
          <h2 className="font-semibold py-[1.25rem]">매장찾기</h2>
          <span className="font-thin">함께하는 카페지조</span>
          <div className="inputWrap relative">
            <Input
              autoFocus
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
        <FindStoreSearchFormListWrapper>
          {kakaoPlaceResult?.length === 0 ? (
            <p>검색결과가 없습니다</p>
          ) : (
            <ul className="flex flex-col space-y-2 text-sm">
              {kakaoPlaceResult?.map((place, index) => {
                return (
                  <li
                    onClick={() => handleListItemClick(index)}
                    key={place.id}
                    className="border-b pb-2 text-gray-500 cursor-pointer">
                    <p>{modifyAddressName(place.place_name)}</p>
                    <p>{place.address_name}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </FindStoreSearchFormListWrapper>
      </form>
    </>
  );
}

export default FindStoreSearchForm;
