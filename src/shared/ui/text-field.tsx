import React from 'react';
import { clsx } from 'clsx';

export type TextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: React.PropsWithRef<React.InputHTMLAttributes<HTMLInputElement>>;
};

export const TextField = (props: TextFieldProps) => {
  const { className, label, inputProps, error } = props;
  const id = React.useId();
  return (
    <div className={clsx(className, 'flex flex-col')}>
      {label && (
        <label
          className='block text-gray-600'
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type='text'
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          'my-1 h-12 rounded px-3 shadow focus:border-sky-500',
          {
            'border border-red-500 outline-red-500 placeholder:text-red-500 focus:outline-red-500':
              Boolean(error),
          },
        )}
      />
      {error && <div className='text-red-500'>{error}</div>}
    </div>
  );
};
