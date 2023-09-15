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

  /* 마커에 특정위치 표시하기 */
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const searchKeyWord = "메가커피";

  useEffect(() => {
    if (!kakaoMap) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchKeyWord, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        kakaoMap.setBounds(bounds);
      }
    });
  }, [location]);

  /* 마커 생성하기 */
  const infoWindow = new kakao.maps.InfoWindow({zIndex: 1});
  useEffect(() => {
    if (!kakaoMap) return;
    markers.forEach((marker) => {
      const {position, content} = marker;
      const kakaoMarker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(position.lat, position.lng),
      });
      kakao.maps.event.addListener(kakaoMarker, "click", () => {
        infoWindow.setContent(
          `<div style="padding:5px;font-size:12px">${content}</div>`
        );
        infoWindow.open(kakaoMap, kakaoMarker);
      });
    });
  }, []);

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
