import {forwardRef} from "react";
import {Link} from "react-router-dom";

function LinkList({pageLink, children, className, ...restProps}, ref) {
  return (
    <>
      <li ref={ref} className={`${className} list-none`} {...restProps}>
        <Link to={`${pageLink}`}>{children}</Link>
      </li>
    </>
  );
}

export default forwardRef(LinkList);
