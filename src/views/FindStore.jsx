import FindStoreSearchForm from "@/components/FindStoreSearchForm";
import KakaoMap from "@/components/KakaoMap";
import MenuTitle from "@/components/MenuTitle";

function FindStore() {
  return (
    <>
      <MenuTitle title="STORE">JIJO STORE</MenuTitle>
      <div className="findStore__mainContent relative">
        <KakaoMap />
        <FindStoreSearchForm />
      </div>
    </>
  );
}

export default FindStore;
