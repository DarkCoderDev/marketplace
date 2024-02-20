import React from 'react';

export const useLockScroll = (isLocked = false) => {
  React.useEffect(() => {
    document.body.style.overflowY = isLocked ? 'hidden' : 'auto';
    const app = document.querySelector('#app');
    if (!app) return;

    if (!app!.hasAttribute('inert')) {
      app!.setAttribute('inert', '');
    } else {
      app!.removeAttribute('inert');
    }
  }, [isLocked]);
};
