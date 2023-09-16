import useCurrnetLocation from "@/hooks/useCurrnetLocation";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";

const {kakao} = window;

function KakaoMap() {
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
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    };

    const KEYWORD = "메가커피";

    places.keywordSearch(KEYWORD, placesSearchCallBack, {
      useMapBounds: true,
    });

    const displayMarker = (place) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    };
  }, [location]);

  return (
    <>
      <div className="my-8 w-full h-[31.25rem] z-0" ref={mapRef}></div>
    </>
  );
}

export default KakaoMap;
