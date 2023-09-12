

function ProductModal({item, ...restProps}) {
  return (
    <div className="absolute top-0 left-0 w-full border bg-white shadow-lg p-[1.875rem]">
      <div className="modalInner relative">
        <button className="CloseBtn absolute -top-1 right-0">
          <img src="/src/assets/images/close.svg" alt="닫기 버튼"/>
        </button>
        <p className="title text-xl pb-5 mb-5 border-b">{item.title}</p>
        <div className="text text-jj_14 text-[#1c1c1b]">
          <p className="mb-[.3125rem]">{item.weight}</p>
          <p>1회 제공량 {item.kcal}</p>
          <p className="mt-5">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductModal