import { Helmet } from 'react-helmet-async';
import MenuTitle from "@/components/MenuTitle";
import MenuBubble from "@/components/MenuBubble";

function Food() {
  return (
    <>
      <Helmet>
        <title>메뉴소개 - 푸드</title>
      </Helmet>
      <MenuTitle title="MEGA MENU">FOOD MENU</MenuTitle>
      <MenuBubble>
        <strong>음료와 잘 어울리는</strong><br />
        다양한 디저트
      </MenuBubble>
      <div>Drink</div>
    </>
  );
}

export default Food;
