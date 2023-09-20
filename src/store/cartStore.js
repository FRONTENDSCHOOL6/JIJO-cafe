import {product} from "ramda";
import {create} from "zustand";

//장바구니 스토어 생성

const initialCount = 0;

const useCartStore = create((set, get) => ({
  cart: [],

  //장바구니에 있는 총 상품수를 계산하는 함수
  count: () => {
    const {cart} = get();
    const totalCount = cart
      .map((product) => product.count)
      .reduce((prev, cur) => prev + cur, 0);
    set((state) => ({
      ...state,
      totalItemCount: totalCount,
    }));

    return get().totalItemCount;
  },

  //상품을 장바구니에 추가하는 함수
  add: (item) => {
    const {cart} = get();
    const updatedCart = updateCart(item, cart);
    set({cart: updateCart});
  },

  //특정 상품을 장바구니에서 삭제하는 함수
  remove: (selectedProdcut) => {
    const {cart} = get();
    const updatedCart = removeCart(selectedProdcut, cart);
    set({cart: updatedCart});
  },

  //모든 상품을 장바구니에서 삭제하는 함수
  removeAll: () => set({cart: []}),

  //장바구니 버튼 클릭시 장바구니 수량 증가
  cartCount: initialCount,
  cartCountUp: () => {
    set((state) => ({
      cartCount: state.cartCount + 1,
    }));
  },

  //숫자 증가
  countUp: () =>
    set((state) => ({
      value: state.value + 1,
    })),

  //숫자감소
  countDown: () =>
    set((state) => ({
      value: state.value - 1,
    })),
}));

//상품을 장바구니에 추가하는 함수
function updateCart(item, cart) {
  const cartItem = {...item, count: 1}; //새로운 상품 아이템 생성
  const productOnCart =
    cart && cart.map((product) => product.id).includes(item.id);

  if (!productOnCart) cart.push(cartItem); // 장바구니에 상품이 없을 경우 추가
  else {
    //이미 장바구니에 있는 상품일 경우 수량 증가
    return (
      cart &&
      cart.map((product) => {
        if (product.id === item.id)
          return {...product, count: product.count + 1};
        return product;
      })
    );
  }
  return cart;
}

//특정 상품을 장바구니에서 삭제하는 함수
function removeCart(selectedProduct, cart) {
  return (
    cart &&
    cart
      .map((product) => {
        if (product.id === selectedProduct)
          return {...product, count: product.count - 1}; //상품 수량 감소
        return product;
      })
      .filter((product) => {
        return product.count;
      })
  );
}

// const useCartStore = create(cartStore);

export default useCartStore;
