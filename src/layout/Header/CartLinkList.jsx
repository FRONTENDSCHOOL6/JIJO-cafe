import LinkList from "@/components/LinkList";

function CartLinkList() {
  return (
    <>
      <LinkList pageLink="/cart" className="relative">
        장바구니
        <sup className="count absolute w-4 h-4 -top-3.5 -right-2 rounded-full  bg-red-500 text-white flex justify-center items-center p-2">
          1
        </sup>
      </LinkList>
    </>
  );
}

export default CartLinkList;
