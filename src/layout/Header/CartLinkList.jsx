import cartBlack from "@/assets/images/cart_black.svg";
import LinkList from "@/components/LinkList";
import useCartStore from "@/store/cartStore";
import LazyImage from "@/utils/LazyImage";

function CartLinkList() {
  /* 인증 정보에 따른 로그인 ➡️ 로그아웃으로 변경 */
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  return (
    <>
      <LinkList pageLink="/cart" className="relative">
        <LazyImage src={cartBlack} className="w-7 h-7" alt="cart_black_icon" />
        <sup className="cartCount absolute w-5 h-5 -top-4 -right-3 rounded-full  bg-red-500 text-xs text-white flex justify-center items-center p-2">
          {cart.map((item) => item.count)}
        </sup>
      </LinkList>
    </>
  );
}

export default CartLinkList;
