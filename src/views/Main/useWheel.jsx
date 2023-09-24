import { useEffect, useRef } from "react";

const useWheel = (callback) => {
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseWheel = (event) => {
    event.preventDefault();
    if (!timeoutRef.current) {
      callback(ref, event.deltaY, ref.current.scrollTop);
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
      }, 1500);
    }
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleMouseWheel);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleMouseWheel);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [ref, callback]);

  return ref;
};

export default useWheel;
