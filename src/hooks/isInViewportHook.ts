import { useEffect, useMemo, useState } from "react";

const useIsInViewport = (ref: any, rendered: boolean) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        {
          root: null,
          threshold: 0.5,
        }
      ),
    []
  );

  useEffect(() => {
    if (ref != null && ref.current != null) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, observer, rendered]);

  return isIntersecting;
};

export default useIsInViewport;
