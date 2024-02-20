import React from 'react';

export const KEY_NAME_ESC = 'Escape';
export const KEY_EVENT_TYPE = 'keydown';
export const usePressEsc = (
  handler: (args?: unknown[]) => unknown, isSet?: boolean,
) => {
  const handlePressEscape = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        handler();
      }
    },
    [handler, isSet],
  );

  React.useEffect(() => {

    if (isSet) {
      document.addEventListener(KEY_EVENT_TYPE, handlePressEscape, false);
    }

    return () => {
      if (isSet) {
        document.removeEventListener(KEY_EVENT_TYPE, handlePressEscape, false);
      }
    };
  }, [handlePressEscape, isSet]);
};
