function MenuBubble({children}) {
  return (
    <div className="relative">
      <div className="bg-primary text-center p-jj_50 text-jj_34 leading-tight">
        {children}
      </div>
      <div className="absolute bg-primary w-[3.125rem] h-[3.125rem] -translate-x-1/2 -translate-y-1/2 rotate-45 left-1/2 -bottom-12"></div>
    </div>
  )
}

export default MenuBubble;