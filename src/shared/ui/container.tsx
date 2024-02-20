import React from 'react';

export const Container = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <div className='container mx-auto w-auto px-2 lg:px-20'>{children}</div>
  );
};
