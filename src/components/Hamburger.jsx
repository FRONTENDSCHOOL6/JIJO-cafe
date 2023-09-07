function Hamburger({size = 20, ...restProps}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 24 30" width={size} {...restProps}>
      <defs>
        <path id="a" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"></path>
      </defs>
      <use fill="#000" fillRule="evenodd" xlinkHref="#a"></use>
    </svg>
  );
}

export default Hamburger;
