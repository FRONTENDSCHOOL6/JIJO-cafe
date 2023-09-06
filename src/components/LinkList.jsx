import {Link} from "react-router-dom";

function LinkList({pageLink, children}) {
  return (
    <>
      <li className="list-none">
        <Link to={`${pageLink}`}>{children}</Link>
      </li>
    </>
  );
}

export default LinkList;
