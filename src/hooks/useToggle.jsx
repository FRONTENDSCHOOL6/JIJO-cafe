import {useState} from "react";

export default function useToggle(intialState = false) {
  const [status, setStatus] = useState(intialState);
  const toggle = () => {
    setStatus((prevState) => !prevState);
  };
  return [status, toggle];
}
