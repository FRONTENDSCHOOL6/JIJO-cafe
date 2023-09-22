import useOutsideClickClose from "@/hooks/useOutsideClickClose";
import CloseButton from '@/components/CloseButton';
import Button from '@/components/Button';
import { useRef, useState } from "react";

function StoreChangeModal({setIsClicked, handleClose}) {
  /* 모달창 외부 클릭 시 로그인모달 닫기 */
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
    setIsClicked(false);
  };
  useOutsideClickClose(modalRef, handleModalClose);

  return (
    !isModalOpen && (
    <div className='fixed left-0 top-0 z-[10001] w-full h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
      <div ref={modalRef} className='w-[31.25rem] bg-white p-6'>
        <p className='text-xl font-bold mb-4'>매장을 변경하시겠습니까?</p>
        <p>매장을 변경하실 경우 이전에 담은 메뉴가 삭제됩니다.</p>
        <div className="mt-5 flex justify-center gap-4">
          <Button className="cursor-pointer" onClick={handleClose} className="border border-secondary w-[7.5rem] hover:bg-secondary hover:text-white">취소</Button>
          <Button className="cursor-pointer" className="bg-primary hover:bg-[#C7B08E] w-[7.5rem]">매장변경</Button>
        </div>
      </div>
    </div>
    )
  )
}

export default StoreChangeModal