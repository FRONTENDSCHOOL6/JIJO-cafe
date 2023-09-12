import pb from "@/api/pocketbase";
import {useState} from "react";
import {useEffect} from "react";

export const usePocektBaseDataList = (collection) => {
  const [data, setData] = useState([]);
s
  useEffect(() => {
    const fetchData = async () => {
      const records = await pb.collection(collection).getFullList({
        sort: "-created",
      });
      setData(records);
    };
    fetchData();
  }, []);
  return data;
};

export const usePocketBaseDataUpdate = (recordId, data) => {
  useEffect(() => {
    const fetchData = async () => {
      const records = await pb.collection(data).update(recordId, data);
      return records;
    };
    fetchData();
  }, [data]);
};
