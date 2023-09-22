import closeIcon from '@/assets/images/close.svg';

function ProductDialog({item, ...restProps}) {
  return (
    <div className="absolute top-0 left-0 z-1 w-full border bg-white shadow-lg p-[1.875rem]">
      <div className="modalInner relative">
        <div className="flex justify-between items-start pb-5 mb-5 border-b">
          <p className="title text-xl">{item.title}</p>
          <button className="CloseBtn -top-1 right-0">
            <img src={closeIcon} alt="닫기 버튼"/>
          </button>
        </div>
        <div className="text text-jj_14 text-[#1c1c1b]">
          <p className="mb-[.3125rem]">{item.weight}</p>
          <p>1회 제공량 {item.kcal}</p>
          <p className="mt-5">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDialog