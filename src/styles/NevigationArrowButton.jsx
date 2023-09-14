export const PrevButton = (current = "20px", buttonNext) => {
  <svg width={current} height={current} viewBox="0 0 50 50" className={buttonNext} preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path
        d="M235 360 l-110 -110 112 -112 c90 -89 115 -110 125 -100 10 10 -8 33
-87 112 l-100 100 99 99 c86 86 108 121 78 121 -4 0 -57 -50 -117 -110z"
      />
    </g>
  </svg>;
};

export const NextButton = (current = "20px", buttonPrev) => {
  <svg version="1.0" width={current} height={current} viewBox="0 0 50 50" className={buttonPrev} preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path
        d="M134 459 c-4 -6 36 -53 92 -110 l99 -99 -100 -100 c-79 -79 -97 -102
  -87 -112 10 -10 35 11 125 100 l112 112 -110 110 c-60 60 -113 110 -117 110
  -4 0 -10 -5 -14 -11z"
      />
    </g>
  </svg>;
};
