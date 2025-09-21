import { useEffect } from "react";
import { useLocation } from "react-router";

type Props = {
  children: React.ReactNode;
};

function ScrollToTop({ children }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default ScrollToTop;
