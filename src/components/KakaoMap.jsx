import useCurrnetLocation from "@/hooks/useCurrnetLocation";
import {useRef} from "react";
import {useEffect} from "react";

const {kakao} = window;

function KakaoMap({setKakaoPlaceResult, searchedResult}) {
  const {location} = useCurrnetLocation();

  const {latitude: currentLat, longitude: currentLon} = location;

  /* 카카오 맵 불러오기 */
  const mapRef = useRef(null);
  useEffect(() => {
    const mapContainer = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(currentLat, currentLon),
      level: 5,
    };

    const map = new kakao.maps.Map(mapContainer, options);

    /* 장소 검색 객체 생성 & 키워드로 마커 생성  */
    const places = new kakao.maps.services.Places(map);

    const placesSearchCallBack = (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setKakaoPlaceResult(data);
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    };

    /* 검색 키워드 */
    const KEYWORD = `${searchedResult} 메가커피`;
    places.keywordSearch(KEYWORD, placesSearchCallBack);

    /* 마커와 마커 내부 인포윈도우를 생성하는 함수 */
    let infowindow = null;
    const displayMarker = (place) => {
      const markerImage = "/JijoMarker.png";
      const markerImageSize = new kakao.maps.Size(35, 40);

      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: new kakao.maps.MarkerImage(markerImage, markerImageSize),
      });

      kakao.maps.event.addListener(marker, "click", () => {
        const modifedAddressName = place.place_name.replace(
          /메가MGC커피/g,
          "지조커피"
        );

        const content = `
                <div class="infoWindow">
                  <h4>${modifedAddressName}</h4>
                  <p className="infoWindow__address">${
                    place.road_address_name
                  }</p>
                  <a href="tel:${
                    place.phone
                  }" className="infoWindow__phone">번호: ${
                    place.phone || "N/A"
                  }</a >
                  <button>자세히 보기</button>
                </div>`;

        if (infowindow) {
          infowindow.close();
          infowindow = null;
        } else {
          infowindow = new kakao.maps.InfoWindow({
            content,
          });
          infowindow.open(map, marker);
        }
      });
    };
  }, [location, searchedResult]);

  return (
    <>
      <div className="my-8 w-full h-[31.25rem] z-0" ref={mapRef}></div>
    </>
  );
}

export default KakaoMap;
