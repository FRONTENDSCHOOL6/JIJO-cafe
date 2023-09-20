import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { useState } from 'react';
import useCartStore from '@/store/cartStore';
import ProductModal from './ProductModal';
import LazyImage from '@/utils/LazyImage';

function Products({ data }) {
  return (
    <div className="itemWrap">
      <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mobile:grid-cols-2">
        {data?.items?.map((item) => (
          <ProductItem key={item.id} item={item} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default Products;

function ProductItem({ collection, item, id, name, price, ...restProps }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleAddToCart = useCartStore((state) => state.add);

  return (
    <li
      key={item.id}
      className="relative cursor-pointer"
      {...restProps}
    >
      <div>
        <div 
          className="imgFrame relative w-80 h-80 overflow-hidden"
          onClick={handleClick}
          >
          <LazyImage
            src={getPbImageURL(item, "image")}
            className="w-full transition-all ease-in hover:scale-110"
            alt={item.title}
          />
          {isClicked && <ProductModal key={item.id} item={item} />}
        </div>
        <div className="text py-6">
          <p className="title text-jj_22 pb-5 mb-[.3125rem] border-b overflow-hidden text-ellipsis whitespace-nowrap">
            {item.title}
          </p>
          <span className="price text-[#1c1c1b] opacity-70 text-jj_14 leading-none">
            {numberWithComma(item.price)}
          </span>
          <p className="desc text-[#1c1c1b] opacity-70 text-jj_14 mobile:text-sm mt-5 overflow-hidden text-ellipsis line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          handleAddToCart(item);
        }}
        className="absolute bottom-[11.25rem] right-0"
      >
        <img
          src="/src/assets/images/menu/cart.svg"
          alt=""
        />
      </button>
    </li>
  );
}
