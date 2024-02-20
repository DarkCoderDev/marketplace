import React from 'react';
import { uiBreakpoints } from 'shared/consts/ui-breakpoints';

export const MediaBoard = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <>
      <video
        className='hidden w-screen brightness-50 xl:block'
        autoPlay
        muted
        loop
      >
        <source
          media={`(min-width:${uiBreakpoints.xl}px)`}
          src='./atomy/media.mp4'
          type='video/mp4'
        />
      </video>
      <div className='min-w-full bg-no-repeat pt-16 backdrop-brightness-50 xl:absolute xl:top-20 xl:backdrop-brightness-100'>
        {children}
      </div>
    </>
  );
};
