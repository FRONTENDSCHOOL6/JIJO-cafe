import {Helmet} from "react-helmet-async";
import useToggle from "@/hooks/useToggle";
import PageMainTitle from "@/components/PageMainTitle";
import { numberWithComma } from "@/utils/numberWithComma";
import CheckBox from "@/components/CheckBox/CheckBox";
import Button from "@/components/Button";
import { useState } from "react";
import OrderList from "@/components/Cart/OrderList";

function Cart() {
  const [toggleDropDown, setToggleDropDown] = useToggle(true);
  const [value, setValue] = useState(1);
  // const handleCount = (e) => {
  //   e.preventDefault();
  //   setValue((prev) => prev + 1) ;
  // }


  return (
    <>
      <Helmet>
        <title>장바구니</title>
      </Helmet>
      <PageMainTitle
        pageTitleText="JIJO CART"
      />
      <div className="cartWrap mx-auto max-w-7xl flex gap-5 pb-52">
        <div className="orderListArea w-3/4">
          <div className="selectArea font-semibold">
            <CheckBox text="전체선택(3/3) " defaultChecked="checked" />
            <button>| 선택삭제</button>
          </div>
          <div className="orderListWrap border-t bg-white border-secondary my-4 overflow-hidden">
            <div className="titleButtonArea flex justify-between py-4">
              <p className="title font-semibold">주문상품</p>
              <button onClick={setToggleDropDown} className="p-2"><img src="/src/assets/images/arrow_down.svg" alt="아래화살표 버튼" /></button>
            </div>
            {toggleDropDown && <OrderList value={value} setValue={setValue}/>}
            
          </div>
          <div className="selectArea font-semibold">
            <CheckBox text="전체선택(3/3) " defaultChecked="checked" />
            <button>| 선택삭제</button>
          </div>
        </div>

        <div className="orderInfoArea w-1/4 mt-[2.4375rem]">
          <div>
            <div className="orderInfoTop border border-gray-200 p-5">
              <p className="store font-semibold">
                <img className="inline-block" src="/src/assets/images/location.svg" alt="위치 아이콘" />
                <span className="pl-[.625rem]">강남점</span>
              </p>
              <Button
                className="w-full bg-white text-secondary border border-secondary hover:border-primary hover:text-white grow my-4"
                color="primary"
                onClick="">
                매장변경
              </Button>
            </div>
            <div className="orderInfoBottom border border-gray-200 bg-gray-100 p-5">
              <div className="flex justify-between mb-4">
                <span>상품금액</span>
                <span className="font-semibold">
                  <span>10,000</span>
                  원
                </span>
              </div>
              <div className="flex justify-between">
                <span>상품할인금액</span>
                <span className="font-semibold">
                  <span>5,000</span>
                  원
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-dashed border-gray-200 pt-6 mt-6">
                <span>결제예정금액</span>
                <span className="font-semibold flex items-center">
                  <span className="text-[1.75rem] font-bold">5,000</span>
                  원
                </span>
              </div>
            </div>
            <Button
              className="w-full bg-secondary text-white grow my-4"
              color="primary"
              onClick="">
              주문하기
            </Button>
            <div className="notice">
              <p className="text-xs text-[#898989] font-semibold">쿠폰/적립금은 주문서에서 사용 가능합니다.</p>
              <p className="text-xs text-[#898989] font-semibold">장바구니에 담은 상품은 최대 30일간 보관됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
