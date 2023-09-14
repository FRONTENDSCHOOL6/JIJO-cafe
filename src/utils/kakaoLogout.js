const KAKAO_CLENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_LOGOUT_REDIRECT_URL = "http://localhost:3000";

export const kakaoLogout = async () => {
  try {
    location.replace(
      `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_CLENT_ID}&logout_redirect_uri=${KAKAO_LOGOUT_REDIRECT_URL}`
    );
  } catch (error) {
    throw new Error(error.messages);
  }
};
