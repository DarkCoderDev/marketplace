import React from 'react';

type TimerID = ReturnType<typeof setTimeout>;

export const useDebounce = (
  fn: (...args: unknown[]) => unknown,
  delay = 300,
) => {
  const timerID = React.useRef<TimerID>();

  return (...args: unknown[]) => {
    clearTimeout(timerID.current);
    timerID.current = setTimeout(() => fn(...args), delay);
  };
};
