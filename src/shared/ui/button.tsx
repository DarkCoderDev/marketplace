import React from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outlined';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

export const Button = (props: ButtonProps) => {
  const { disabled, onClick, className = '', variant, children } = props;

  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        className,
        'flex h-12 cursor-pointer items-center justify-center rounded px-5 duration-200 ease-in',
        {
          'cursor-pointer': !disabled,
          'cursor-not-allowed': disabled,
        },
        {
          primary:
            'bg-sky-500 text-white hover:bg-sky-600 disabled:bg-sky-500 disabled:opacity-50 shadow-md ',
          secondary:
            'bg-gray-600 text-white hover:bg-sky-600 disabled:bg-gray-600 disabled:opacity-50 shadow-md ',
          outlined:
            'border border-gray-600 text-gray-600 hover:border-sky-600 hover:text-sky-400 disabled:border-gray-600 disabled:text-gray-600 disabled:opacity-50 shadow-md ',
        }[variant],
      )}
    >
      {children}
    </button>
  );
};
