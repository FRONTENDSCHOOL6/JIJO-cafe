function JijoError(error) {
  return (
    <div role="alert" className="flex flex-col h-[calc(100vh_-_70px)] w-auto justify-center items-center ">
      <p>{error.toString()}</p>
      <p>알 수 없는 오류가 발생했습니다.</p>
    </div>
  )
}

export default JijoError
