import React from 'react';
import Transition from 'react-transition-group/Transition';
import { clsx } from 'clsx';
import {
  UNMOUNTED,
  EXITED,
  ENTERING,
  ENTERED,
  EXITING,
} from 'react-transition-group/Transition';

export const RawFade = (
  props: React.PropsWithChildren<{
    init: boolean;
    duration: number;
  }>,
) => {
  const { init, duration, children } = props;
  const nodeRef = React.useRef<HTMLDivElement>(null);

  return (
    <Transition
      nodeRef={nodeRef}
      in={init}
      unmountOnExit
      timeout={duration}
    >
      {(status) => (
        <div
          ref={nodeRef}
          className={clsx(
            'transition-all duration-300 ease-in',
            {
              [UNMOUNTED]: 'opacity: 1',
              [EXITED]: 'opacity: 1 backdropFilter: blur(4px)',
              [ENTERING]: 'opacity: 0',
              [ENTERED]: 'opacity: 0',
              [EXITING]: 'opacity: 0',
            }[status],
          )}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
