import useToggle from '@/hooks/useToggle'

function CheckBox({value="true", text, name, id}) {
  const [on, toggle] = useToggle(true);

  return (
    <label className='relative'>
      <input 
        type="checkbox"
        value={value}
        name={name}
        id={id}
        className="opacity-0 m-0 inline-block align-middle w-[1.375rem] border-0 outline-none"
      />
      <span className='checkmark block w-[1.375rem] h-[1.375rem] rounded-[.1875rem] absolute left-0 top-1/2 -translate-y-1/2 border border-secondary'></span>
      <span className='pl-[.3125rem] text-secondary font-light'>{text}</span>
    </label>
  )
}

export default CheckBox