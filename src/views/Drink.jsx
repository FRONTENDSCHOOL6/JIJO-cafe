import { Helmet } from 'react-helmet-async';
import MenuTitle from "@/components/MenuTitle";
import MenuBubble from "@/components/MenuBubble";

function Drink() {
  return (
    <>
      <Helmet>
        <title>메뉴소개 - 음료</title>
      </Helmet>
      <MenuTitle></MenuTitle>
      <MenuBubble></MenuBubble>
      <div>Drink</div>
    </>
  );
}

export default Drink;
