import Spinner from '@/components/JijoSpinner';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useProductList from '@/hooks/useProductList';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0,
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { duration: 0.4 },
    },
  },
};

function Products() {
  useDocumentTitle('제품 목록');
  const { isLoading, data } = useProductList();

  if (isLoading) {
    return <Spinner size={160} />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>Product List - ReactBird</title>
        </Helmet>
        <div className="container mx-auto">
          <motion.ul
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={list}
            initial="hidden"
            animate="visible"
          >
            {data.items.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </motion.ul>
        </div>
      </>
    );
  }
}

export default Products;

function ProductItem({ item, ...restProps }) {
  return (
    <motion.li
      key={item.id}
      className="justify-self-center"
      variants={listItem}
      {...restProps}
    >
    </motion.li>
  );
}

// ProductItem.propTypes = {
//   item: shape({
//     id: string,
//     title: string,
//     color: string,
//     price: number,
//   }),
// };
