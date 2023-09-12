import { motion } from "framer-motion";
import { easeIn } from "framer-motion"

function MenuBubble({children}) {
  const eased = easeIn(0.5);

  return (
    <motion.div 
      initial={{ x: 0, y: -181 }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative">
      <div className="bg-primary text-center p-jj_50 text-jj_34 leading-tight">
        {children}
      </div>
      <div className="absolute bg-primary w-[3.125rem] h-[3.125rem] -translate-x-1/2 -translate-y-1/2 rotate-45 left-1/2 -bottom-12"></div>
    </motion.div>
  )
}

export default MenuBubble;