import { Helmet } from 'react-helmet-async';
import MenuTitle from "@/components/MenuTitle";
import MenuBubble from "@/components/MenuBubble";

function Product() {
  return (
    <>
      <Helmet>
        <title>메뉴소개 - 상품</title>
      </Helmet>
      <MenuTitle title="MEGA MENU">PRODUCT MENU</MenuTitle>
      <MenuBubble>
        <strong>MEGA DAILY GOODS</strong>
      </MenuBubble>
      <div>Product</div>
    </>
  );
}

export default Product;
