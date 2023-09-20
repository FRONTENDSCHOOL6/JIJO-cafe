import cartBlack from '@/assets/images/cart_black.svg';
import LinkList from '@/components/LinkList';
import useCartStore from '@/store/cartStore';

function CartLinkList() {
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <LinkList pageLink="/cart" className="relative">
        <img src={cartBlack} className="w-7 h-7" alt="" />
        <sup className="cartCount absolute w-5 h-5 -top-4 -right-3 rounded-full  bg-red-500 text-xs text-white flex justify-center items-center p-2">
          {cart.length}
        </sup>
      </LinkList>
    </>
  );
}

export default CartLinkList;
