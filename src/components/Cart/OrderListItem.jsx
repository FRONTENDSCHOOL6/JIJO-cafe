import CheckBox from "@/components/CheckBox/CheckBox";
import CloseButton from "@/components/CloseButton";
import useCartStore from "@/store/cartStore";
import LazyImage from "@/utils/LazyImage";
import {getPbImageURL} from "@/utils/getPbImageURL";
import {numberWithComma} from "@/utils/numberWithComma";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";

function OrderListItem({product}) {
  const remove = useCartStore((state) => state.remove);
  const setCartItemCount = useCartStore((state) => state.setCartItemCount);

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
      <CheckBox className="mr-[1.375rem] mobile:mr-1" />
      <Link
        to="/menu/drink"
        className="flex basis-2/3 mobile:basis-[55%] items-center shrink-0">
        <figure className="shrink-0">
          <LazyImage src={getPbImageURL(product, "image")} className="h-24" />
        </figure>
        <p className="productTitle basis-[32rem] mobile:basis-[50%] shrink-0 mobile:shrink font-semibold mobile:text-sm ml-6">
          {product.title}
        </p>
      </Link>
      <div className="countBtn basis-[5.5rem] font-semibold border border-gray-300 px-2 rounded-sm flex justify-between items-center">
        <button
          type="button"
          onClick={handleDecrementItemCount}
          className="text-gray-400 text-[1.3rem]">
          -
        </button>
        <span className="mobile:text-sm">{product.count}</span>
        <button
          type="button"
          className="text-[1.3rem]"
          onClick={() => setCartItemCount(product.id, 1)}>
          +
        </button>
      </div>
      <p className="productprice basis-[9.6875rem] font-semibold mobile:text-sm text-right mr-4">{`${numberWithComma(
        product.price * product.count
      )}원`}</p>
      <CloseButton
        fillColor="gray"
        className="w-5 mobile:w-10 cursor-pointer"
        onClick={() => remove(product.id)}
      />
    </li>
  );
}

export default OrderListItem;
