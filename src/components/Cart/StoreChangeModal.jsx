import { useState } from 'react'
import CloseButton from '@/components/CloseButton'
import useToggle from '@/hooks/useToggle';

function StoreChangeModal() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.4)] flex justify-center items-center'>
      <p className='text-xl font-bold'>매장을 변경하시겠습니까?</p>
      <CloseButton onClick={handleClick}/>
    </div>
  )
}

export default StoreChangeModal