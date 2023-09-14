import { motion } from "framer-motion";
import { easeIn } from "framer-motion"
import OrderListItem from "./OrderListItem";

function OrderList({value, setValue}) {
  return (
    <motion.ul 
      className="orderList"
      initial={{ x: 0, y: `-100%` }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
    >
    <OrderListItem value={value} setValue={setValue}/>
  </motion.ul>
  )
}

export default OrderList