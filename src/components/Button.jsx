function Button({ type, children, className }) {
  return (
    <button type={type} className={`${className} font-mb-2 h-[2.8125rem] rounded-sm`}>
      {children}
    </button>
  )
}

export default Button

// 사용시
//<Button type="submit" color="text-black" width="w-[100px]" bg="bg-white" border="border-black border">
