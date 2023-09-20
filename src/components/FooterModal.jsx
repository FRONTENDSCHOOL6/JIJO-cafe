import Button from './Button'
import CloseButton from './CloseButton'

function FooterModal({title}) {
  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
      <div className='bg-white w-[45rem] p-4 relative flex flex-col items-center'>
        <div className='text'>
          <p className='pb-5 mb-5 border-b border-gray-300'>이용안내</p>
          <p>개인정보수집 범위 : 이름, 연락처</p>
          <p>개인정보수집 및 이용목적 : 온라인 문의 및 상담 자료와 결과 회신</p>
          <p>* 매장과 관련된 CS의 경우, 해결 과정 안내 혹은 결과 회신을 위해 매장 관리자(슈퍼바이저,매장점주), 본사 유관부서가 연락을 드릴 수 있습니다.</p>
          <p>개인정보수집 및 보유기간 : 개인정보 수집 및 이용에 대한 목적이 달성되면 지체없이 파기하며 최대 보유기간은 1년을 넘기지 아니한다.</p>
        </div>
        <Button color="white" className="py-1 px-4 w-24 mt-4">취소</Button>
        <CloseButton className="absolute top-4 right-4"/>
      </div>
    </div>
  )
}

export default FooterModal