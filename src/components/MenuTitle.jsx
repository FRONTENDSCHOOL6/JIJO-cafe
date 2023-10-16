import { Link } from "react-router-dom";

function MenuTitle({ title, mainMenu, subMenu, children, mainLink, subLink }) {
  return (
    <div className="bg-secondary pb-jj_100 desktop:pt-[11.875rem] tablet:pt-32 mobile:pb-14 mobile:pt-28">
      <div className="mx-auto text-center max-w-7xl">
        <p className="font-thin text-white text-jj_24 mobile:text-lg tablet:text-xl mobile:font-thin ">{title}</p>
        <h2 className="font-black text-primary font-Roboto mobile:text-4xl text-jj_60 tablet:text-jj_50 mobile:p-3 ">{children}</h2>
        <div className="breadCrumbs">
          <ul className="font-thin text-white mobile:text-sm">
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
