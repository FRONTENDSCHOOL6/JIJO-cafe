import useAuthStore from "@/store/store";
import OrderListEmptyItem from "./OrderListEmptyItem";
import OrderListItem from "./OrderListItem";
import useCartStore from "@/store/cartStore";

function OrderList() {
  /* 인증 정보에 따른 로그인 ➡️ 로그아웃으로 변경 */
  const isAuth = useAuthStore((state) => state.isAuth);
  const {cart} = useCartStore();
  //console.log(product);

  return (
    <ul className="orderList">
      {/* 로그인이 되었을 때 상품리스트 렌더링 */}
      {/* {isAuth ? (
        // 담긴 상품이 존재할 때 상품리스트 렌더링
        cart.length ? (
          cart.map((product) => <OrderListItem key={product.id} product={product} />)
        ) : (
          <OrderListEmptyItem />
        )
      ) : (
        <OrderListEmptyItem />
      )} */}

      {cart.length ? (
          cart.map((product) => <OrderListItem key={product.id} product={product} />)
        ) : (
          <OrderListEmptyItem />
        )} 
    </ul>
  );
}

export default OrderList;
