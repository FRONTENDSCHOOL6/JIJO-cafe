import {Link} from "react-router-dom";

function LinkList({pageLink, children, className}) {
  return (
    <>
      <li className={`${className} list-none`}>
        <Link to={`${pageLink}`}>{children}</Link>
      </li>
    </>
  );
}

export default LinkList;
