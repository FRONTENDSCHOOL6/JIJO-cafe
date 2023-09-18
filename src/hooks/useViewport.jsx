import {useMediaQuery} from "react-responsive";

function useViewport() {
  const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 1281});
    return isDesktop ? children : null;
  };

  const Tablet = ({children}) => {
    const isTablet = useMediaQuery({
      minWidth: 728,
      maxWidth: 1280,
    });

    return isTablet ? children : null;
  };

  const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 728});
    return isMobile ? children : null;
  };

  return {
    Desktop,
    Tablet,
    Mobile,
  };
}

export default useViewport;
