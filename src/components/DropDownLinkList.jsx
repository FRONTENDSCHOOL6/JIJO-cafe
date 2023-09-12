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
    initial: {
      opacity: 0,
      height: 0,
      padding: 0,
    },
    open: {
      opacity: 1,
      y: 0,
      height: 100,
      padding: "3rem 0",
      transition: {
        type: "tween",
        duration: 0.5,
        delayChildren: 0.4,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      height: 0,
      padding: 0,
      transition: {
        type: "tween",
        duration: 0.2,
        delayChildren: 0.4,
        delay: 0.7,
      },
    },
  };

  return (
    <>
      <motion.ul
        variants={dropDownVariants}
        initial="closed"
        animate="open"
        className="flex py-12 items-center justify-center gap-6 tablet:hidden">
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
