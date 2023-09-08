import Button from "@/components/Button";
import {Helmet} from "react-helmet-async";
import Input from "@/components/Input";
import {useId} from "react";
import {useEffect} from "react";
import {useState} from "react";
import pb from "@/api/pocketbase";

function Notice() {
  const id = useId();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const noticeItems = await pb.collection("notices").getFullList();
        // console.log(noticeItems)
        setData(noticeItems);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        // console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-5 py-jj_60">
        <Helmet>
          <title>지조소식 - 공지사항</title>
        </Helmet>
        <div className="text-center ">
          <h2 className="text-jj_43 font-bold ">카페 지조 공지사항</h2>
          <p className="m-10"> 카페 지조 소식을 알려드립니다.</p>
        </div>
        <form>
          <label htmlFor={id} className="sr-only">
            검색창
          </label>
          <select
            id={id}
            name="notice"
            className="border px-jj_15 mr-[0.3125rem] rounded-sm h-[2.8125rem]">
            <option value="noticeTitle">제목</option>
            <option value="noticeDescription">내용</option>
            <option value="noticeWriter">작성자</option>
          </select>
          <Input
            placeholder="검색어를 입력하세요"
            className="bg-white mr-[0.3125rem] border px-jj_15 w-fit"></Input>
          <Button
            color="primary"
            className="px-5 py-[0.625rem] mr-[0.3125rem] mobile:mt-[0.9375rem] mobile:w-full">
            검색
          </Button>
          <Button
            color="primary"
            className="px-5  mobile:w-full mobile:my-[0.9375rem]">
            등록
          </Button>
        </form>

        <table className="min-w-max w-full table-auto bg-white my-6 border-t">
          <thead>
            <tr className="text-jj_15 leading-normal">
              <th className="mobile:hidden py-3 px-6 items-center">번호</th>
              <th className="py-3 px-6 ">제목</th>
              <th className="mobile:hidden py-3 px-6 ">글쓴이</th>
              <th className="py-3 px-6 text-center">날짜</th>
              <th className="mobile:hidden py-3 px-6 ">조회</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light border-t">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 whitespace-nowrap">
                <div className="text-center">
                  <span className="mobile:hidden font-medium">1</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div>
                  <span>카페 지조 원두 관련 공지</span>
                </div>
              </td>
              <td className="py-3 px-6 ">
                <div className=" mobile:hidden text-center">
                  <span>카페 지조</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <span>2023-09-07</span>
              </td>
              <td className=" mobile:hidden py-3 px-6 text-center">
                <span>0</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Notice;
