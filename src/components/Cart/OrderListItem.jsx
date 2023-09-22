import CheckBox from "@/components/CheckBox/CheckBox";
import CloseButton from "@/components/CloseButton";
import useCartStore from "@/store/cartStore";
import {getPbImageURL} from "@/utils/getPbImageURL";
import {numberWithComma} from "@/utils/numberWithComma";
import {useState} from "react";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";

function OrderListItem({product, selectedProdcut}) {
  const remove = useCartStore((state) => state.remove);
  const setCartItemCount = useCartStore((state) => state.setCartItemCount);
  const cart = useCartStore((state) => state.cart);

  const handleDecrementItemCount = () => {
    if (product.count > 1) {
      setCartItemCount(product.id, -1);
    } else {
      toast.error("물품은 0개 이하로 내려갈 수 없습니다!");
    }
  };

  return (
    <li
      key={product.id}
      className="border-b border-gray-200 flex items-center py-4">
      <CheckBox className="mr-[1.375rem]" />
      <Link to="/menu/drink" className="flex basis-2/3 items-center shrink-0">
        <figure className="shrink-0">
          <img src={getPbImageURL(product, "image")} className="h-24" />
        </figure>
        <p className="productTitle basis-[32rem] shrink-0 font-semibold ml-6">
          {product.title}
        </p>
      </Link>
      <div className="countBtn basis-[5.5rem] font-semibold border border-gray-300 px-2 rounded-sm flex justify-between items-center">
        <button
          type="button"
          onClick={handleDecrementItemCount}
          className="text-gray-400 text-[1.5rem]">
          -
        </button>
        <span>{product.count}</span>
        <button type="button" className="text-[1.5rem]" onClick={() => setCartItemCount(product.id, 1)}>
          +
        </button>
      </div>
      <p className="productprice basis-[9.6875rem] font-semibold text-right mr-4">{`${numberWithComma(
        product.price * product.count
      )}원`}</p>
      <CloseButton
        fillColor="gray"
        className="w-5 cursor-pointer"
        onClick={() => remove(product.id)}
      />
    </li>
  );
}

export default OrderListItem;
