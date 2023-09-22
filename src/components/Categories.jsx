import { useState, useEffect } from "react"
import pb from "@/api/pocketbase"
import CheckBox from "./CheckBox/CheckBox"
import { usePocektBaseDataList } from "@/hooks/usePocektBaseData"

function Categories({ collection, category, handleCategory }) {
  // const [categories, setCategories] = useState([
  //   {
  //     name: 'all',
  //     text: '전체보기',
  //   },
  //   {
  //     name: 'coffee',
  //     text: '커피',
  //   },
  //   {
  //     name: 'ade&juice',
  //     text: '에이드&주스',
  //   },
  //   {
  //     name: 'smoothe&prape',
  //     text: '스무디&프라페',
  //   },
  //   {
  //     name: 'decaffein',
  //     text: '디카페인',
  //   },
  //   {
  //     name: 'beverage',
  //     text: '음료',
  //   },
  //   {
  //     name: 'new',
  //     text: '신상품',
  //   },
  // ]);

  //const collection = 'beverage';
  // const {data, status} = usePocektBaseDataList('foods', (fields: 'category'));
  // console.log(data);

  const { data, status } = usePocektBaseDataList(collection, "category")
  const categoryArr = data
    .reduce((acc, item) => {
      return acc.find((x) => x.category.toString() === item.category.toString()) ? acc : [...acc, item]
    }, [])
    .map((item) => item.category)

  const categories = ["전체보기"].concat(...categoryArr)

  return (
    <div className="flex gap-[.625rem] mobile:flex-wrap">
      {categories.map((categoryName) => (
        <CheckBox
          key={categoryName}
          className="mobile:basis-1/4"
          text={categoryName}
          categoryname={categoryName}
          //checked={c.text.replace('&','') === category}
          checked={categoryName === category}
          onChange={() => {
            handleCategory(categoryName)
          }}
        />
      ))}
    </div>
  )
}

export default Categories
