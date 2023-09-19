import { Link } from "react-router-dom"
import { useId } from "react"
import Input from "@/components/Input"
import Button from "@/components/Button"
import useAuthStore from "@/store/store"
import { useRef } from "react"

function SelectSearchFilter({ Collection, option, onChangeOption, onChangeText, handleReload }) {
  const id = useId()
  const user = useAuthStore((state) => state.user)
  const isAdmin = user && user.role === "admin"

  const searchInputRef = useRef(null)

  const handleSearchClick = () => {
    // 검색 버튼 클릭 시, 입력 필드의 값을 상태로 업데이트하고 handleReload 호출
    onChangeText(searchInputRef.current.value)
    handleReload()
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
        <option value={`${Collection}Title`}>제목</option>
        <option value={`${Collection}Description`}>내용</option>
        <option value={`${Collection}Writer`}>작성자</option>
      </select>
      <Input ref={searchInputRef} type="search" placeholder="검색어를 입력하세요" className="mr-[0.3125rem] border px-jj_15 w-fit"></Input>
      <Button onClick={handleSearchClick} color="primary" className="px-5 py-[0.625rem] mr-[0.3125rem] mobile:mt-[0.9375rem] mobile:w-full">
        검색
      </Button>

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
