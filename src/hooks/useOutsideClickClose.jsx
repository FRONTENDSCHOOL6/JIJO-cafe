import {useEffect} from "react";

const useOutsideClickClose = (ref, callback) => {
  useEffect(() => {
    const handleOutSideClick = ({target}) => {
      if (!ref.current || ref.current.contains(target)) return;
      callback();
    };
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, callback]);
};
export default useOutsideClickClose;
