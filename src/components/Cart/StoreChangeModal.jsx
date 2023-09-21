import CloseButton from '@/components/CloseButton';

function StoreChangeModal({handleClose}) {

  return (
    <div className='fixed left-0 top-0 z-[10001] w-full h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
      <div className='w-[37.5rem] bg-white'>
        <p className='text-xl font-bold'>매장을 변경하시겠습니까?</p>
        <CloseButton className="cursor-pointer" onClick={handleClose}/>
      </div>
    </div>
  )
}

export default StoreChangeModal