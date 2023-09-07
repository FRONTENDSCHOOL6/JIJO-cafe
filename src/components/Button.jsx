function Button({ width, color = 'text-white', type = 'button', bg, border, children, ...restProps }) {
  // color 값을 'bg-' 클래스로 변환
  // const bg = `bg-${color}`

  return (
    <button type={type} className={`${bg} ${width} ${color} ${border} mb-2 font-bold h-[2.8125rem] rounded-md `} {...restProps}>
      {children}
    </button>
  )
}

export default Button

// 사용시
//<Button type="submit" color="text-black" width="w-[100px]" bg="bg-white" border="border-black border">
