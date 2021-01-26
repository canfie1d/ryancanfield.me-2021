import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import { usePrevious } from 'react-use';

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration.
const ScrollToTop = (props) => {
  const location = useLocation();
  const prevLocation = usePrevious(location);

  useLayoutEffect(() => {
    if (!prevLocation || location.pathname !== prevLocation.pathname) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
    }

    return () => clearTimeout();
  }, [location]); // eslint-disable-line

  return null;
};

export default ScrollToTop;