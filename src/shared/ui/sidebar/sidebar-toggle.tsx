import { clsx } from 'clsx';

export const SidebarToggle = (props: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  color?: 'black' | 'white';
  tabIndex?: number;
}) => {
  const { setIsOpen, tabIndex = 0, isOpen = false, color = 'white' } = props;
  const itemCSS = `my-1 duration-300 h-2 w-8 rounded transition`;

  return (
    <div
      tabIndex={tabIndex}
      className={clsx('inline-flex h-8 w-8 cursor-pointer flex-col')}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setIsOpen(!isOpen);
        }
      }}
    >
      <div
        style={{
          backgroundColor: color,
        }}
        className={clsx(itemCSS, {
          'translate-y-[11px] rotate-[45deg]': isOpen,
          'rotate-[0]': !isOpen,
        })}
      />
      <div
        style={{
          backgroundColor: color,
        }}
        className={clsx(itemCSS, {
          'translate-x-[20px] opacity-0': isOpen,
          'translate-x-[0]': !isOpen,
        })}
      />
      <div
        style={{
          backgroundColor: color,
        }}
        className={clsx(itemCSS, {
          'translate-y-[-10px] rotate-[-45deg]': isOpen,
          'rotate-[0]': !isOpen,
        })}
      />
    </div>
  );
};
