import React from 'react';
import { clsx } from 'clsx';

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: React.PropsWithRef<React.InputHTMLAttributes<HTMLInputElement>>;
};

export const Typography = (props: UiTextFieldProps) => {
  const { className, label, inputProps, error } = props;
  const id = React.useId();
  return (
    <div className={clsx(className, '')}>
      {label && (
        <label
          className='blcok'
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        type='text'
        className={clsx(inputProps?.className, '')}
      />
      {error && <div>{error}</div>}
    </div>
  );
};
