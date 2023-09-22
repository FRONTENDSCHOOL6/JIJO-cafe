import {Link} from "react-router-dom";

function MenuTitle({title, mainMenu, subMenu, children, mainLink, subLink}) {
  return (
    <div className="bg-secondary p-jj_100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white font-thin text-jj_24 tablet:text-xl">
          {title}
        </p>
        <h2 className="text-primary font-Roboto font-black text-jj_60 tablet:text-jj_50">
          {children}
        </h2>
        <div className="breadCrumbs">
          <ul className="text-white font-thin">
            <li className="inline-block">
              <Link to={"/"}>
                홈<span className="mx-2">&gt;</span>
              </Link>
            </li>
            <li className="inline-block">
              <Link to={mainLink}>
                {mainMenu}
                <span className="mx-2">&gt;</span>
              </Link>
            </li>
            <li className="inline-block">
              <Link to={subLink}>{subMenu}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuTitle;