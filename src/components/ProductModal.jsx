function ProductModal() {
  return (
    <div className="hidden absolute top-0 left-0 w-full border bg-white shadow-sm p-[1.875rem]">
      <div className="modalInner relative">
        <button className="CloseBtn absolute -top-1 right-0">
          <img src="/src/assets/images/close.svg" alt="닫기 버튼"/>
        </button>
        <p className="title pb-5 mb-5 border-b">고흥 유자망고 스무디</p>
        <div className="text">
          <p>20oz</p>
          <p>1회 제공량 120.1kcal</p>
          <p>메가MGC커피의 여름시즌 인기 음료인 망고스무디를 상큼한 고흥유자와 블렌딩하여 새콤달콤 시원하게 즐길 수 있는 여름 한정 메뉴</p>
        </div>
      </div>
    </div>
  )
}

export default ProductModal