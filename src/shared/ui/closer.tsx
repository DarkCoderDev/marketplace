import { clsx } from 'clsx';

export const Closer = (props: {
  onClick: (...args: unknown[]) => unknown;
  color?: 'black' | 'white';
  tabIndex?: number;
}) => {
  const { onClick, tabIndex = 0, color = 'white' } = props;
  const itemCSS = `my-1 duration-300 h-2 w-8 rounded transition`;

  return (
    <div
      tabIndex={tabIndex}
      className={clsx('inline-flex h-8 w-8 cursor-pointer flex-col')}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
    >
      <div
        style={{
          backgroundColor: color,
        }}
        className={clsx('translate-y-[11px] rotate-[45deg]', itemCSS)}
      />
      <div
        style={{
          backgroundColor: color,
        }}
        className={clsx('translate-x-[20px] opacity-0', itemCSS)}
      />
      <div
        style={{
          backgroundColor: color,
        }}
        className={clsx('translate-y-[-10px] rotate-[-45deg]', itemCSS)}
      />
    </div>
  );
};
