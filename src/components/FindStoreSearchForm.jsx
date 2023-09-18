import {useEffect} from "react";
import Button from "./Button";
import Input from "./Input";
import {useRef} from "react";
import {useState} from "react";
import debounce from "@/utils/debounce";
const {kakao} = window;

function FindStoreSearchForm({data, search, submit, inputRef}) {
  return (
    <>
      <form
        onSubmit={submit}
        className=" flex flex-col absolute top-0 left-0 p-8">
        <div className="btnWrap flex">
          <Button color="primary" className="flex-grow">
            매장찾기
          </Button>
          <Button color="secondary" className="flex-grow">
            지역검색
          </Button>
        </div>
        <div className="searchWrap flex flex-col text-center bg-primary">
          <h2>매장찾기</h2>
          <span>함께하는 카페지조</span>
          <Input
            defaultValue={data}
            onChange={search}
            ref={inputRef}
            placeholder="지점명 또는 주소를 입력해주세요"
            className="w-fit m-[1.25rem]"
          />
        </div>
        <div className="bg-white h-fit pb-[15rem]">검색어가 없습니다</div>
      </form>
    </>
  );
}

export default FindStoreSearchForm;
