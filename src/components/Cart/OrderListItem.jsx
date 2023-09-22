import CheckBox from '@/components/CheckBox/CheckBox';
import CloseButton from '@/components/CloseButton';
import useCartStore from '@/store/cartStore';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { Link } from 'react-router-dom';

function OrderListItem({ product, selectedProdcut }) {
  const remove = useCartStore((state) => state.remove);
  const setCartItemCount = useCartStore((state) => state.setCartItemCount);

  return (
    <li
      key={product.id}
      className="border-b border-gray-200 flex items-center py-4"
    >
      <CheckBox className="mr-[1.375rem]" />
      <Link to="/menu/drink" className="flex basis-2/3 items-center shrink-0">
        <figure className="shrink-0">
          <img src={getPbImageURL(product, 'image')} className="h-24" />
        </figure>
        <p className="productTitle basis-[32rem] shrink-0 font-semibold ml-6">
          {product.title}
        </p>
      </Link>
      <div className="countBtn basis-[5.5rem] font-semibold border border-gray-300 px-2 rounded-sm flex justify-between items-center">
        <button
          type="button"
          onClick={() => setCartItemCount(product.id, -1)}
          className="text-gray-400 text-[1.5rem]"
        >
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
