import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

//장바구니 스토어 생성
const useCartStore = create(
  devtools(
    persist(
      (set /* setState */, get /* state */) => ({
        // 상태만 관리
        cart: [],

        //상품을 장바구니에 추가하는 함수
        add: (item) => {
          const { cart } = get();
          const updatedCart = updateCart(item, cart);
          set({ cart: updatedCart }, false, 'cart/add');
        },

        // 가이드 (비교)
        // plus: (item) =>
        //   set(
        //     (state) => ({ cart: updateCart(item, state.cart) }),
        //     false,
        //     'cart/plus'
        //   ),

        setCartItemCount: (itemId, amount /* 1 or -1 */) => {
          const { cart } = get();
          const nextCart = cart.map((item) => {
            if (item.id === itemId) {
              return { ...item, count: item.count + amount };
            } else {
              return item;
            }
          });

          set({ cart: nextCart }, false, 'cart/set-cart-item-count');
        },

        //특정 상품을 장바구니에서 삭제하는 함수
        remove: (selectedProdcut) => {
          const { cart } = get();
          const updatedCart = removeCart(selectedProdcut, cart);
          set({ cart: updatedCart }, false, 'cart/remove');
        },

        //모든 상품을 장바구니에서 삭제하는 함수
        removeAll: () => set({ cart: [] }, false, 'cart/remove-all'),
      }),
      {
        name: 'cart-store',
      }
    )
  )
);

//상품을 장바구니에 추가하는 함수
function updateCart(item, cart) {
  let nextCart = [...cart]; // 배열 복제
  const cartItem = { ...item, count: 1 }; //새로운 상품 아이템 생성
  const productOnCart = nextCart.map((product) => product.id).includes(item.id);

  if (!productOnCart) {
    // 장바구니에 상품이 없을 경우 추가
    // nextCart.push(cartItem);
    nextCart = [...nextCart, cartItem];
    return nextCart;
  } else {
    //이미 장바구니에 있는 상품일 경우 수량 증가
    return nextCart.map((product) => {
      if (product.id === item.id) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
  }
}

//특정 상품을 장바구니에서 삭제하는 함수
function removeCart(selectedProduct, cart) {
  return cart
    .map((product) => {
      if (product.id === selectedProduct)
        return { ...product, count: product.count - 1 }; //상품 수량 감소
      return product;
    })
    .filter((product) => {
      return product.count;
    });
}

export default useCartStore;
