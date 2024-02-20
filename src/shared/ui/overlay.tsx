import React from 'react';
import { clsx } from 'clsx';

export const Overlay = (props: { onClick: () => void; isShown: boolean }) => {
  const { onClick, isShown = false } = props;

  return (
    <div
      onClick={onClick}
      className={clsx(
        'height-0 pointer-events fixed left-0 top-0 z-20 w-screen backdrop-brightness-75 transition-opacity duration-500 ease-in-out',
        {
          'h-screen backdrop-blur-sm': isShown,
          'opacity-0': !isShown,
        },
      )}
    ></div>
  );
};
