import CheckBox from "./CheckBox/CheckBox";
import {usePocektBaseDataList} from "@/hooks/usePocektBaseData";

function Categories({collection, category, handleCategory}) {
  
  const {data, status} = usePocektBaseDataList(collection, "category");
  const categoryArr = data
    .reduce((acc, item) => {
      return acc.find((x) => x.category.toString() === item.category.toString())
        ? acc
        : [...acc, item];
    }, [])
    .map((item) => item.category);

  const categories = ["전체보기"].concat(...categoryArr);

  return (
    <div className="flex gap-[.625rem] mobile:flex-wrap">
      {categories.map((categoryName) => (
        <CheckBox
          key={categoryName}
          className="mobile:basis-[30%]"
          text={categoryName}
          categoryname={categoryName}
          //checked={c.text.replace('&','') === category}
          checked={categoryName === category}
          onChange={() => {
            handleCategory(categoryName);
          }}
        />
      ))}
    </div>
  );
}

export default Categories;
