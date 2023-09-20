import pb from "@/api/pocketbase";
import {usePocektBaseDataList, usePocketBaseFilteredData} from "@/hooks/usePocektBaseData";
import { useState, useEffect } from "react";
import CheckBox from "./CheckBox/CheckBox";


function Categories({isChecked, category, handleCategory}) {
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
          categoryname={c.text}
          checked={c.text.replace('&','') === category}
          onChange={() => {
            handleCategory(c.text.replace('&',''));
          }}
        />
      ))}
    </div>
  )
  
}

export default Categories