import pb from "@/api/pocketbase";
import {usePocektBaseDataList, usePocketBaseFilteredData} from "@/hooks/usePocektBaseData";
import { useState, useEffect } from "react";
import CheckBox from "./CheckBox/CheckBox";


function Categories({data}) {
  //pb.autoCancellation(false);
  //const {data} = usePocektBaseDataList('beverage');
  //console.log(data);
  //const categories = data.map((item) => item.category[0]);
  const [isChecked, setIsChecked] = useState(false); 
  const [handleCategory, setHandleCategory] = useState('전체보기');

  // 체크박스 상태가 변경될 때마다 useEffect가 실행됩니다.
  useEffect(() => {
    // isChecked가 true인 경우에만 데이터를 가져옵니다.
    if (isChecked) {
      fetchData();
    } else {
      // isChecked가 false이면 데이터를 초기화합니다.
      setData(null);
    }
  }, [isChecked]);
  
  const [categories, setCategories] = useState([
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'coffee',
    text: '커피',
  },
  {
    name: 'ade&juice',
    text: '에이드&주스',
  },
  {
    name: 'smoothe&prape',
    text: '스무디&프라페',
  },
  {
    name: 'decaffein',
    text: '디카페인',
  },
  {
    name: 'beverage',
    text: '음료',
  },
  {
    name: 'new',
    text: '신상품',
  },
]);
  return (
    <div className="flex gap-[.625rem] mobile:flex-wrap">
      {categories.map((c) => (
        <CheckBox 
          key={c.text} 
          className="mobile:basis-1/4" 
          text={c.text} 
          category={c.text}
          checked={isChecked}
        />
      ))}
    </div>
  )
  
}

export default Categories