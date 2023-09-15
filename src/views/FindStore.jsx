import FindStoreSearchForm from "@/components/FindStoreSearchForm";
import KakaoMap from "@/components/KakaoMap";
import MenuTitle from "@/components/MenuTitle";
import useAuthStore from "@/store/store";
import {Helmet} from "react-helmet-async";

function FindStore() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <>
      <Helmet>
        <title>매장 - 매장찾기</title>
      </Helmet>
      <MenuTitle title="STORE">JIJO STORE</MenuTitle>
      <div className="findStore__mainContent relative">
        <KakaoMap />
        <FindStoreSearchForm />
      </div>
    </>
  );
}

export default FindStore;
