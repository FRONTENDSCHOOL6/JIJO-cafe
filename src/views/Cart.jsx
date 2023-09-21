import Button from "@/components/Button";
import OrderList from "@/components/Cart/OrderList";
import StoreChangeModal from "@/components/Cart/StoreChangeModal";
import CheckBox from "@/components/CheckBox/CheckBox";
import PageMainTitle from "@/components/PageMainTitle";
import useToggle from "@/hooks/useToggle";
import useCartStore from "@/store/cartStore";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Cart() {
  const [toggleDropDown, setToggleDropDown] = useToggle(true);
  const [isClicked, setIsClicked] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const removeAll = useCartStore((state) => state.removeAll);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleClose = () => {
    setIsClicked(false);
  };
  const totalPrice = cart.map((item) => {
    
  });
  console.log(totalPrice);

  
  
  

  return (
    <>
      <Helmet>
        <title>장바구니</title>
      </Helmet>
      <PageMainTitle pageTitleText="JIJO CART" />
      <div className="cartWrap mx-auto max-w-7xl flex gap-5 pb-52 mobile:flex-col">
        <div className="orderListArea w-3/4 mobile:w-full">
          <div className="selectArea font-semibold">
            <CheckBox text="전체선택(3/3) " defaultChecked="checked" />
            <button>| 전체삭제</button>
          </div>
          <div className="orderListWrap border-t bg-white border-secondary my-4 overflow-hidden">
            <div className="titleButtonArea flex justify-between py-4">
              <p className="title font-semibold">주문상품</p>
              <button onClick={setToggleDropDown} className="p-2">
                <img
                  src="/src/assets/images/arrow_down.svg"
                  alt="아래화살표 버튼"
                />
              </button>
            </div>
            {toggleDropDown && <OrderList />}
          </div>
          <div className="selectArea font-semibold">
            <CheckBox text="전체선택(3/3) " defaultChecked="checked" />
            <button>| 전체삭제</button>
          </div>
        </div>

        <div className="orderInfoArea w-1/4 mt-[2.4375rem] mobile:w-full">
          <div>
            <div className="orderInfoTop border border-gray-200 p-5">
              <p className="store font-semibold">
                <img
                  className="inline-block"
                  src="/src/assets/images/location.svg"
                  alt="위치 아이콘"
                />
                <span className="pl-[.625rem]">강남점</span>
              </p>
              <Button
                className="w-full bg-white text-secondary border border-secondary hover:border-primary hover:text-white grow my-4"
                color="primary"
                onClick={handleClick}
              >
                매장변경
              </Button>
              {isClicked && <StoreChangeModal handleClose={handleClose}/>}
            </div>
            <div className="orderInfoBottom border border-gray-200 bg-gray-100 p-5">
              <div className="flex flex-col items-center border-t  border-gray-200 pt-6 mt-6">
                <span>결제예정금액</span>
                <span className="font-semibold flex items-center">
                  <span className="text-[1.75rem] font-bold">{totalPrice}</span>원
                </span>
              </div>
            </div>
            <Button
              className="w-full bg-secondary text-white grow my-4"
              color="primary">
              주문하기
            </Button>
            <div className="notice">
              <p className="text-xs text-[#898989] font-semibold">
                쿠폰/적립금은 주문서에서 사용 가능합니다.
              </p>
              <p className="text-xs text-[#898989] font-semibold">
                장바구니에 담은 상품은 최대 30일간 보관됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;