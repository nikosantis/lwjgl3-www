import { useRef, useEffect, useCallback } from 'react';

export function useEventCallback(fn: Function, dependencies: Array<any>) {
  const ref = useRef<Function>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const fn = ref.current;
    //@ts-ignore
    return fn();
  }, [ref]);
}
