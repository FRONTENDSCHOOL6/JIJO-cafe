import Button from '@/components/Button'

function Notice() {
  return (
    <>
      <section className="lg:max-w-screen-xl mx-auto">
        <h2 className="text-jj_43 font-bold">카페 지조 공지사항</h2>
        <p>카페 지조 소식을 알려드립니다.</p>
        <Button className="tablet:w-full desktop: w-[200px] bg-primary">검색</Button>
        {/* <div class="bg-white my-6 border-t">
          <table class="min-w-max w-full table-auto ">
            <thead>
              <tr class=" text-jj_15 leading-normal">
                <th class="py-3 px-6 text-left">번호</th>
                <th class="py-3 px-6 text-left">제목</th>
                <th class="py-3 px-6 text-left">글쓴이</th>
                <th class="py-3 px-6 text-center">날짜</th>
                <th class="py-3 px-6 text-center">조회</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light border-t">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <span class="font-medium">1</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span>카페 지조 원두 관련 공지</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span>카페 지조</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span>2023-09-07</span>
                </td>
                <td class="py-3 px-6 text-center">
                  <span>0</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </section>
    </>
  )
}

export default Notice
