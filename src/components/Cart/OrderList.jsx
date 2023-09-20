import useAuthStore from "@/store/store";
import OrderListEmptyItem from "./OrderListEmptyItem";
import OrderListItem from "./OrderListItem";
import useCartStore from "@/store/cartStore";

function OrderList() {
  /* 인증 정보에 따른 로그인 ➡️ 로그아웃으로 변경 */
  const isAuth = useAuthStore((state) => state.isAuth);
  const {add: handleAddToCart} = useCartStore();
  const { cart } = useCartStore();
  console.log(cart);
  //console.log(product);
  

  return (
    <ul className="orderList">
      {/* {isAuth ? (
        {cart.length ? cart.map((product, index) =>
          <OrderListItem/>
          ) : (<OrderListEmptyItem/>)}
        ) : (<OrderListEmptyItem/>)
      } */}

      
      {cart.length ? cart && cart.map((product) =>
        <OrderListItem product={product} />
        ) : (
        <OrderListEmptyItem/>
      )}
  </ul>
  )
}

export default OrderList