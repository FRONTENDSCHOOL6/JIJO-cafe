import {Helmet} from "react-helmet-async";
import PageMainTitle from "@/components/PageMainTitle";
import RadioButton from "@/components/RadioButton/RadioButton";
import CheckBox from "@/components/CheckBox/CheckBox";
import CloseButton from "@/components/CloseButton";
import { numberWithComma } from "@/utils/numberWithComma";
import Button from "@/components/Button";

function Cart() {
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
          <div className="orderList border-t border-b border-secondary my-4">
            <div className="titleButtonArea flex justify-between py-4">
              <p className="title font-semibold">주문상품</p>
              <button className="p-2"><img src="/src/assets/images/arrow_down.svg" alt="아래화살표 버튼" /></button>
            </div>
            <ul>
              <li className="border-b border-gray-200">
                <a href="" className="flex items-center py-4">
                  <CheckBox className="mr-[1.375rem]"/>
                  <figure className="shrink-0">
                    <img src="http://via.placeholder.com/73x95" alt="" />
                  </figure>
                  <p className="productTitle basis-[32rem] ml-6 font-semibold">에스프레소 피에노</p>
                  <div className="countBtn basis-[5.5rem] border border-gray-200 p-1 rounded-sm flex justify-between">

                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <p className="productprice basis-[9.6875rem] font-semibold text-right mr-4">{`${numberWithComma(4980)}원`}</p>
                  <CloseButton fillColor="gray"/>
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a href="" className="flex items-center py-4">
                  <CheckBox className="mr-[1.375rem]"/>
                  <figure className="shrink-0">
                    <img src="http://via.placeholder.com/73x95" alt="" />
                  </figure>
                  <p className="productTitle basis-[32rem] ml-6 font-semibold">수박화채 스무디</p>
                  <div className="countBtn basis-[5.5rem] border border-gray-200 p-1 rounded-sm flex justify-between">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <p className="productprice basis-[9.6875rem] font-semibold text-right mr-4">{`${numberWithComma(4980)}원`}</p>
                  <CloseButton fillColor="gray"/>
                </a>
              </li>
            </ul>
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
