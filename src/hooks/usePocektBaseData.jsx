import pb from "@/api/pocketbase";
import {useState} from "react";
import {useEffect} from "react";

/* 콜렉션의 FullList 제공 */
export const usePocektBaseDataList = (collection) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const records = await pb.collection(collection).getFullList({
          sort: "-created",
        });
        setData(records);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.error("error");
      }
    };
    fetchData();
  }, []);
  return {data, status};
};

/* 콜렉션의 특정 리스트 제공 */
export const usePocketBaseFilteredData = (
  collection,
  page,
  perPage,
  filterOption = "",
  dependency = ""
) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const filteredRecord = await pb
          .collection(collection)
          .getList(page, perPage, {
            filterOption,
          });
        setData(filteredRecord);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.error("error");
      }
    };
    fetchData();
  }, []);
  return {data, status};
};

/* 콜렉션의 업데이트 */
export const usePocketBaseDataUpdate = (collection, recordId) => {
  useEffect(() => {
    const fetchData = async () => {
      const records = await pb.collection(collection).update(recordId, data);
      return records;
    };
    fetchData();
  }, [data]);
};

/* 콜렉션의 생성 */
export const usePocketBaseDataCreate = (collection, data) => {
  useEffect(() => {
    const fetchData = async () => {
      const records = await pb.collection(collection).create(data);
      return records;
    };
    fetchData();
  }, [data]);
};

/* 콜렉션의 삭제 */
export const usePocketBaseDataDelete = (collection, recordId) => {
  useEffect(() => {
    const fetchData = async () => {
      const records = await pb.collection(collection).delete(recordId);
      return records;
    };
    fetchData();
  }, []);
};
