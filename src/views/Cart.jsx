import location from "@/assets/images/location.svg";
import arrowDwon from "@/assets/images/arrow_down.svg";
import Button from "@/components/Button";
import OrderList from "@/components/Cart/OrderList";
import StoreChangeModal from "@/components/Cart/StoreChangeModal";
import CheckBox from "@/components/CheckBox/CheckBox";
import PageMainTitle from "@/components/PageMainTitle";
import useToggle from "@/hooks/useToggle";
import useAuthStore from "@/store/store";
import useCartStore from "@/store/cartStore";
import JiJoHelmet from "@/utils/JiJoHelmet";
import {numberWithComma} from "@/utils/numberWithComma";
import {useState} from "react";
import toast from "react-hot-toast";
import SignInModal from "@/components/SignInModal";
import LazyImage from "@/utils/LazyImage";

function Cart() {
  const [toggleDropDown, setToggleDropDown] = useToggle(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedSignin, setIsClickedSignin] = useState(false);
  const handleClickSignin = () => {
    if (!isAuth) {
      setIsClickedSignin(!isClickedSignin);
    }
  };
  const isAuth = useAuthStore((state) => state.isAuth);
  const cart = useCartStore((state) => state.cart);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleClose = () => {
    setIsClicked(false);
  };

  /* Cart 배열내 Item들의 가격 총합 */
  const totalPrice = cart
    .map((item) => {
      return Number(item.count * item.price);
    })
    .reduce((acc, cur) => acc + cur, 0);

  /* 전체갯수 */
  const totalCount = cart
    .map((item) => {
      return Number(item.count);
    })
    .reduce((acc, cur) => acc + cur, 0);

  /* 장바구니 내 담겨있는 상품 전체 삭제 */
  const removeAll = useCartStore((state) => state.removeAll);
  const handleClickRemove = () => {
    removeAll();
    toast.success("장바구니에 담긴 상품이 모두 삭제되었습니다.", {
      duration: 3000,
      position: "top-center",
    });
  };

  /* 체크박스 아이템 상태관리 */
  const [checkboxData, setCheckboxData] = useState([]);
  /* 각 체크박스 클릭 시 체크 */
  const handleCheckBoxClick = (name) => {
    setCheckboxData((prevData) =>
      prevData.map((checkbox) =>
        checkbox.name === name
          ? {...checkbox, checked: !checkbox.checked}
          : checkbox
      )
    );
  };
  /* 전체 선택 체크박스 클릭 시 호출되는 핸들러 함수 */
  const handleAllCheckBoxClick = (selectAll) => {
    const updatedCheckboxData = checkboxData.map((checkbox) => ({
      ...checkbox,
      checked: selectAll,
    }));
    setCheckboxData(updatedCheckboxData);
  };

  return (
    <>
      <JiJoHelmet pageTitle="장바구니" />
      <PageMainTitle pageTitleText="JIJO CART" />
      <div className="cartWrap mx-auto max-w-7xl flex gap-5 pb-52 mobile:flex-col mobile:px-4 mobile:pb-40">
        <div className="orderListArea w-3/4 mobile:w-full">
          <div className="selectArea font-semibold">
            <CheckBox
              text={`전체선택(${totalCount}/${totalCount}) `}
              defaultChecked="checked"
              isChecked={checkboxData.every((checkbox) => checkbox.checked)}
              onChange={() =>
                handleAllCheckBoxClick(
                  !checkboxData.every((checkbox) => checkbox.checked)
                )
              }
            />
            <button onClick={handleClickRemove}>| 전체삭제</button>
          </div>
          <div className="orderListWrap border-t bg-white border-secondary my-4 overflow-hidden">
            <div className="titleButtonArea flex justify-between py-4">
              <p className="title font-semibold">주문상품</p>
              <button onClick={setToggleDropDown} className="p-2">
                <LazyImage src={arrowDwon} alt="아래화살표 버튼" />
              </button>
            </div>
            {toggleDropDown && (
              <OrderList
                checkboxData={checkboxData}
                handleCheckBoxClick={handleCheckBoxClick}
              />
            )}
          </div>
          <div className="selectArea font-semibold">
            <CheckBox
              text={`전체선택(${totalCount}/${totalCount}) `}
              defaultChecked={checkboxStatus}
              onChange={handleAllCheck}
            />
            <button>| 전체삭제</button>
          </div>
        </div>

        <div className="orderInfoArea w-1/4 mt-[2.4375rem] mobile:w-full">
          <div>
            <div className="orderInfoTop border border-gray-200 p-5">
              <p className="store font-semibold">
                <LazyImage
                  className="inline-block"
                  src={location}
                  alt="위치 아이콘"
                />
                <span className="pl-[.625rem]">강남점</span>
              </p>
              <Button
                className="w-full bg-white text-secondary border border-secondary hover:border-primary hover:text-white grow my-4"
                color="primary"
                onClick={handleClick}>
                매장변경
              </Button>
              {isClicked && <StoreChangeModal handleClose={handleClose} />}
            </div>
            <div className="orderInfoBottom border border-gray-200 bg-gray-100 p-5">
              <div className="flex flex-col justify-center">
                <span>결제예정금액</span>
                <span className="font-semibold flex items-center">
                  <span className="text-[1.75rem] font-bold">
                    {numberWithComma(totalPrice)}
                  </span>
                  원
                </span>
              </div>
            </div>

            <Button
              className="w-full bg-secondary text-white grow my-4"
              color="primary"
              onClick={handleClickSignin}>
              주문하기
            </Button>
            {isClickedSignin && (
              <SignInModal setIsClickedSignin={setIsClickedSignin} />
            )}

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
