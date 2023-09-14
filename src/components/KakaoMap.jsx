import useCurrnetLocation from "@/hooks/useCurrnetLocation";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";

const {kakao} = window;

function KakaoMap() {
  const {location} = useCurrnetLocation();

  const {latitude: currentLat, longitude: currentLon} = location;

  /* 카카오 맵 불러오기 */
  const mapContainer = useRef(null);
  const [kakaoMap, setKaKaoMap] = useState(null);
  useEffect(() => {
    if (mapContainer.current) {
      const options = {
        center: new kakao.maps.LatLng(currentLat, currentLon),
        level: 3,
      };
      const mapInstance = new kakao.maps.Map(mapContainer.current, options);
      setKaKaoMap(mapInstance);
    }
  }, [location]);

  return (
    <>
      <div
        className="my-8"
        ref={mapContainer}
        style={{
          width: "100%",
          height: "31.25rem",
        }}></div>
    </>
  );
}

export default KakaoMap;
