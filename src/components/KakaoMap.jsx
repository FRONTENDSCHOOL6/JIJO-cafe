import {useEffect} from "react";

const {kakao} = window;

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.506502, 127.053617),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: "500px",
          height: "500px",
        }}>
        KakaoMap
      </div>
    </>
  );
}

export default KakaoMap;
