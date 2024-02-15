import { useDispatch } from "react-redux";
import { setActivedNavigationItem } from "../stores/features/appSlice";
import useIsInViewport from "./isInViewportHook";
import { useEffect } from "react";

const useIsActiveNavigationHook = (ref: any, componentRendered: boolean) => {
  console.log("componentRendered: ", componentRendered);
  const isInViewPort = useIsInViewport(ref, componentRendered);
  console.log("ex isInViewPort: ", isInViewPort);

  const dispatch = useDispatch();

  useEffect(() => {
    if (componentRendered && isInViewPort) {
      dispatch(setActivedNavigationItem(ref.current.id.toUpperCase()));
    }
  }, [componentRendered, isInViewPort, dispatch, ref]);
};

export default useIsActiveNavigationHook;
