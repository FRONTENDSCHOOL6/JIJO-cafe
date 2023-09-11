import { useId } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import pb from '@/api/pocketbase'
import { getPbImageURL } from '@/utils/getPbImageURL';
import ProductModal from './ProductModal';
import { numberWithComma } from './../utils/numberWithComma';


function Products() {
  const [data, setData] = useState([]);


useEffect(() => {
  const getData = async () => {
    try {
    const beverageItem = await pb.collection('beverage').getFullList();
    setData(beverageItem)
    } catch (error) {
      console.error(error);
    }
  };

  getData();
}, []);

if(data){
  return (
    <div className='itemWrap'>
      <ul className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </ul>
    </div>
    )
  }
}

export default Products;

function ProductItem({item, ...restProps}) {
  const handleClick = (e) => {
    e.preventDefault;
    this.ProductModal.className = "block";
    console.log(this);
  }

  return (
    <li
      key={item.id}
      {...restProps}s
      className='relative cursor-pointer'
      onClick={handleClick}
    >  
      <a href="#">
        <div className='imgFrame relative w-80 h-80 overflow-hidden'>
          <img src={getPbImageURL(item, 'beverageImage')} className='w-full transition-all ease-in hover:scale-110' alt={item.beverageTitle}/>
          <a href="/cart"><img src="/src/assets/images/menu/cart.svg" className='absolute bottom-0 right-0' alt="" /></a>
        </div>
        <div className='text py-6'>
          <p className='title text-jj_22 pb-5 mb-[.3125rem] border-b'>{item.beverageTitle}</p>
          <span className='price text-[#1c1c1b] opacity-70 text-jj_14 leading-none'>{numberWithComma(item.beveragePrice)}</span>
          <p className='desc text-[#1c1c1b] opacity-70 text-jj_14 mt-5 overflow-hidden text-ellipsis line-clamp-2'>{item.beverageDescription}</p>
        </div>
      </a>
      <ProductModal/>
    </li>
  )
}