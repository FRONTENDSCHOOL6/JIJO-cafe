import {useState} from "react";
import {useEffect} from "react";
import {useRef} from "react";

function LazyImage({src, alt, className, width = "100%", height = "auto"}) {
  const [isLoading, setLoading] = useState(false);

  const imgRef = useRef(null);
  const observer = useRef();

  const intersectionObserver = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setLoading(true);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    imgRef.current && observer.current.observe(imgRef.current);
  }, []);

  return (
    <img
      width={width}
      height={height}
      ref={imgRef}
      src={isLoading ? src : null}
      alt={alt}
      className={className}
    />
  );
}

export default LazyImage;
