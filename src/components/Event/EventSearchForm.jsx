function EventSearchForm() {
  return (
    <form>
      <div className="flex gap-2 my-10">
        <select
          name="eventsSearchCategory"
          id="eventSearchCategory"
          className="border px-jj_15 bg-[#f8f8f8] h-[2.8125rem] text-black rounded focus:border-2 focus:outline-none focus:border-primary cursor-pointer"
        >
          <option value="events_title">제목</option>
          <option value="events_content">내용</option>
          <option value="events_name">작성자</option>
        </select>
        <label htmlFor="eventSearch" className="sr-only">
          검색창
        </label>
        <input
          type="search"
          name="eventSearch"
          id="eventSearch"
          placeholder="검색어를 입력하세요"
          className=" border px-jj_15 w-fit bg-[#f8f8f8] h-[2.8125rem] text-black rounded placeholder:text-[#828282] focus:border-2 focus:outline-none focus:border-primary"
        />
        <button type="submit" value="검색" className="bg-primary hover:bg-[#C7B08E] px-5 py-[0.625rem] mobile:w-full font-medium h-[2.8125rem] rounded-sm">
          검색
        </button>
      </div>
    </form>
  );
}

export default EventSearchForm;
