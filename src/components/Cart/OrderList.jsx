import { motion } from "framer-motion";
import { easeIn } from "framer-motion"
import CheckBox from "@/components/CheckBox/CheckBox";
import CloseButton from "@/components/CloseButton";
import { numberWithComma } from "@/utils/numberWithComma";

function OrderList({value, setValue, handleCount}) {
  return (
    <motion.ul 
      className="orderList"
      initial={{ x: 0, y: `-100%` }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
    >
    <li className="border-b border-gray-200 flex items-center py-4">
      <a href="/menu/drink" className="flex basis-2/3 items-center shrink-0">
        <CheckBox className="mr-[1.375rem]"/>
        <figure className="shrink-0">
          <img src="http://via.placeholder.com/73x95" alt="" />
        </figure>
        <p className="productTitle basis-[32rem] shrink-0 font-semibold ml-6">에스프레소 피에노</p>
      </a>
      <div className="countBtn basis-[5.5rem] font-semibold border border-gray-300 px-2 py-1 rounded-sm flex justify-between">
        <button className="text-gray-400" onClick={() => setValue(value - 1)}>-</button>
        <span>{value}</span>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
      <p className="productprice basis-[9.6875rem] font-semibold text-right mr-4">{`${numberWithComma(4980)}원`}</p>
      <CloseButton fillColor="gray" className="w-5" />
    </li>
  </motion.ul>
  )
}

export default OrderList