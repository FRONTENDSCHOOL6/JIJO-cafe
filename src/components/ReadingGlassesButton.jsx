function ReadingGlassesButton({size = 20, className, ...restProps}) {
  return (
    <>
      <button
        type="button"
        className={`${className} cursor-pointer`}
        {...restProps}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1"
            y="1.50977"
            width="17"
            height="17"
            rx="8.5"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="15.88"
            y="14.9697"
            width="8.00446"
            height="2.00819"
            rx="1.00409"
            transform="rotate(45 15.88 14.9697)"
            fill="black"
          />
        </svg>
      </button>
    </>
  );
}

export default ReadingGlassesButton;
