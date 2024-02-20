import React from 'react';

export const useIntersection = <Args, RT>(handler: (...args: Args[]) => RT) => {
  const intersectionObserver = React.useRef<IntersectionObserver>();

  const $observable = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (intersectionObserver.current) {
      intersectionObserver.current?.disconnect();
    }

    intersectionObserver.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        handler();
      }
    });

    intersectionObserver.current.observe($observable.current as HTMLElement);
  });

  return { $observable };
};
