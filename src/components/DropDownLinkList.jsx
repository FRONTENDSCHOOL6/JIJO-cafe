import React from "react";
import LinkList from "./LinkList";
import {motion} from "framer-motion";

function DropDownLinkList() {
  const linkItems = [
    {pageLink: "/menu/drink", children: "음료"},
    {pageLink: "/menu/food", children: "푸드"},
    {pageLink: "/menu/product", children: "상품"},
    {pageLink: "/findStore", children: "매장찾기"},
    {pageLink: "/bbs/notice", children: "Notice"},
    {pageLink: "/bbs/faq", children: "FAQ"},
    {pageLink: "/bbs/customer", children: "고객센터"},
    {pageLink: "/signUp", children: "회원가입"},
    {pageLink: "/bbs/event", children: "이벤트"},
    {pageLink: "/cart", children: "장바구니"},
  ];

  const dropDownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.7,
        delayChildren: 0.5,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <motion.ul
        variants={dropDownVariants}
        initial="closed"
        animate="open"
        className="flex py-12 items-center justify-center gap-6  mobile:hidden">
        {linkItems.map((item, index) => (
          <LinkList
            className="flex flex-col"
            pageLink={item.pageLink}
            key={index}
            children={item.children}
          />
        ))}
      </motion.ul>
    </>
  );
}

export default DropDownLinkList;
