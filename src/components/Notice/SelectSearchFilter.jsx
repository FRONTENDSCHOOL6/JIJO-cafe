import { Link } from "react-router-dom"
import { useId } from "react"
import Input from "@/components/Input"
import Button from "@/components/Button"
import useAuthStore from "@/store/store"

function SelectSearchFilter({ Collection, option, text, onChangeOption, onChangeText, handleReload }) {
  //   state, setState (option, text)상태를 전달받음
  const id = useId()
  const user = useAuthStore((state) => state.user) // useAuthStore를 통해 user 정보를 가져옵니다.
  const isAdmin = user && user.role === "admin" // isAdmin을 user.role이 "admin"일 때 true로 설정합니다.

  // 검색어 입력시 핸들러
  console.log()
  const handleInput = (e) => {
    onChangeText(e.target.value)
  }

  return (
    <form className="text-deepDarkGray">
      <label htmlFor={id} className="sr-only">
        검색창
      </label>
      <select
        value={option}
        onChange={(e) => {
          onChangeOption(e.target.value)
        }}
        id={id}
        name={Collection}
        className="border px-jj_15 mr-[0.3125rem] bg-[#f8f8f8] h-[2.8125rem] pl-4 text-black rounded focus:border-2 focus:outline-none focus:border-primary"
      >
        {/* 검색 필터 선택 */}
        <option value={`${Collection}Title`}>제목</option>
        <option value={`${Collection}Description`}>내용</option>
        <option value={`${Collection}Writer`}>작성자</option>
      </select>
      {/* 검색어 입력 */}
      <Input value={text} type="search" onChange={handleInput} placeholder="검색어를 입력하세요" className="mr-[0.3125rem] border px-jj_15 w-fit"></Input>
      {/* input type search value입력시 x 표시 나오고 클릭시 텍스트 삭제  */}
      {/* 검색 버튼 */}
      <Button onClick={handleReload} color="primary" className="px-5 py-[0.625rem] mr-[0.3125rem] mobile:mt-[0.9375rem] mobile:w-full">
        검색
      </Button>

      {/* 등록 버튼 (링크) */}
      {isAdmin && (
        <Link to={`/bbs/${Collection}/create`}>
          <Button color="primary" className="px-5  mobile:w-full mobile:my-[0.9375rem]">
            등록
          </Button>
        </Link>
      )}
    </form>
  )
}

export default SelectSearchFilter
