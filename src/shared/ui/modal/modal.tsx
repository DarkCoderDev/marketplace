import React from 'react';
import { clsx } from 'clsx';
import { Portal } from 'shared/ui/portal';
import { useLockScroll } from 'shared/hooks/use-lock-scroll';
import { usePressEsc } from 'shared/hooks/use-press-esc';
import { MODAL_CONTAINER } from './consts';
import Transition, {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  UNMOUNTED,
} from 'react-transition-group/Transition';

export const Modal = (
  props: React.PropsWithChildren<{
    isOpen?: boolean;
    handleOutsideClick?: () => void;
  }>,
) => {
  const { isOpen = true, handleOutsideClick, children } = props;

  const onOutsideClick = () => {
    if (handleOutsideClick) {
      handleOutsideClick();
    }
  };
  const onContentClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  useLockScroll(isOpen);
  usePressEsc(onOutsideClick, isOpen);

  const nodeRef = React.useRef<HTMLDivElement>(null);

  return (
    <Portal $root={MODAL_CONTAINER}>
      <Transition
        nodeRef={nodeRef}
        in={isOpen}
        unmountOnExit
        timeout={100}
      >
        {(status) => (
          <div
            ref={nodeRef}
            className={clsx(
              'z-20 pointer-events-none fixed left-0 top-0 flex h-screen w-screen touch-pan-y justify-center overflow-y-auto p-2 backdrop-blur-sm backdrop-brightness-75 transition-opacity duration-100 ease-in',
              {
                [UNMOUNTED]: 'opacity-0',
                [ENTERING]: 'opacity-50',
                [ENTERED]: 'pointer-events-auto opacity-100',
                [EXITING]: 'opacity-40',
                [EXITED]: 'opacity-0',
              }[status],
            )}
            onClick={onOutsideClick}
          >
            <div
              aria-modal
              aria-hidden={!isOpen}
              role='alertdialog'
              aria-labelledby='dialog_label'
              aria-describedby='dialog_desc'
              className={clsx(
                'm-auto max-w-xs rounded bg-gray-100 p-1 sm:max-w-sm md:max-w-md',
              )}
              onClick={onContentClick}
            >
              {children}
            </div>
          </div>
        )}
      </Transition>
    </Portal>
  );
};
