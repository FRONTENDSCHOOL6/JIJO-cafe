import {useEffect, useState} from "react";

function useCurrnetLocation() {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // 성공(success) 콜백 함수
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      // 오류(error) 콜백 함수
      (error) => {
        setError(error);
      }
    );
  }, []);

  return {location, error};
}

export default useCurrnetLocation;
