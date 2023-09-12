function MenuBubble({children}) {
  return (
    <>
      <div className="bg-primary text-center p-jj_50 text-jj_34 leading-tight">
        {children}
      </div>
      <div className="relative bg-primary w-[3.125rem] h-[3.125rem] -translate-x-1/2 -translate-y-[3.125rem] rotate-45 left-1/2 -bottom-6"></div>
    </>
  )
}

export default MenuBubble;