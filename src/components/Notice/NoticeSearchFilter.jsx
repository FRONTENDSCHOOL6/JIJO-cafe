import Button from '@/components/Button'
import Input from '@/components/Input'
import { useId } from 'react'

function NoticeSearchFilter({ option, text, onChangeOption, onChangeText }) {
  //  Notice state, setState (option, text)상태를 전달받음
  const id = useId()

  const handleInput = (e) => {
    onChangeText(e.target.value)
  }

  const handleSearchButton = () => {}

  return (
    <form>
      <label htmlFor={id} className="sr-only">
        검색창
      </label>
      <select
        value={option}
        onChange={(e) => {
          onChangeOption(e.target.value)
        }}
        id={id}
        name="notice"
        className="border px-jj_15 mr-[0.3125rem] rounded-sm h-[2.8125rem]"
      >
        <option value="noticeTitle">제목</option>
        <option value="noticeDescription">내용</option>
        <option value="noticeWriter">작성자</option>
      </select>
      <Input value={text} type="search" onChange={handleInput} placeholder="검색어를 입력하세요" className="bg-white mr-[0.3125rem] border px-jj_15 w-fit"></Input>
      {/* input type search value입력시 x 표시 나오고 클릭시 텍스트 삭제  */}
      <Button onClick={handleSearchButton} color="primary" className="px-5 py-[0.625rem] mr-[0.3125rem] mobile:mt-[0.9375rem] mobile:w-full">
        검색
      </Button>

      <Button color="primary" className="px-5  mobile:w-full mobile:my-[0.9375rem]">
        등록
      </Button>
    </form>
  )
}

export default NoticeSearchFilter
