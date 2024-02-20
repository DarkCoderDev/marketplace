import React from 'react';
import { clsx } from 'clsx';
import { Overlay } from 'shared/ui/overlay';
import { SidebarToggle } from './sidebar-toggle';
import Image from 'next/image';
import { useLockScroll } from 'shared/hooks/use-lock-scroll';
import { usePressEsc } from 'shared/hooks/use-press-esc';
import { MODAL_CONTAINER } from 'shared/ui/modal/consts';
import { Portal } from '../portal';
import Transition, {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  UNMOUNTED,
} from 'react-transition-group/Transition';

export const Sidebar = (props: {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { children, className, isOpen, setIsOpen = () => {} } = props;

  useLockScroll(isOpen);
  usePressEsc(() => setIsOpen(false), isOpen);
  const nodeRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Portal $root={MODAL_CONTAINER}>
        <Overlay
          onClick={() => setIsOpen(false)}
          isShown={isOpen}
        />
        <aside
          ref={nodeRef}
          className={clsx(
            className,
            'fixed right-0 top-0 z-20 inline-flex h-screen min-w-[290px] flex-col bg-gray-100 p-2 transition-all duration-300 ease-in-out',
            {
              'translate-x-[0]': isOpen,
              'translate-x-[200%]': !isOpen,
            },
          )}
        >
          <header className='flex items-center justify-between'>
            <Image
              src='./atomy/logo.svg'
              alt='Logo'
              width={100}
              height={100}
            />

            <SidebarToggle
              tabIndex={0}
              color='black'
              isOpen={isOpen}
              setIsOpen={() => setIsOpen(false)}
            />
          </header>

          <hr className='my-2' />

          <div className='container'>{children}</div>
        </aside>
      </Portal>
    </>
  );
};
