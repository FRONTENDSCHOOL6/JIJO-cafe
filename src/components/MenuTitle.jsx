function MenuTitle({title, mainMenu, subMenu, children}) {
  return (
    <div className="bg-secondary p-jj_100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white font-thin text-jj_24 tablet:text-xl">{title}</p>
        <h2 className="text-primary font-Roboto font-black text-jj_60 tablet:text-jj_50">{children}</h2>
        <div className="breadCrumbs">
          <ul className="text-white font-thin">
            <li className="inline-block">
              <a href="/">홈<span className="mx-2">&gt;</span></a>
            </li>
            <li className="inline-block">
              <a href="">{mainMenu}<span className="mx-2">&gt;</span></a>
            </li>
            <li className="inline-block">
              <a href="">{subMenu}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuTitle;