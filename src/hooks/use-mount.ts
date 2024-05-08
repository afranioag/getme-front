import { useCallback, useEffect, useRef } from "react";

function useMount() {
  const componentIsMounted = useRef(false);

  useEffect(() => {
    componentIsMounted.current = true;

    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  const isMounted = useCallback(() => componentIsMounted.current, []);

  return { isMounted };
}

export default useMount;
