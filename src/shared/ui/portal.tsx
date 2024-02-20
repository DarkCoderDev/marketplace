import React from 'react';
import ReactDom from 'react-dom';

export const Portal = (
  props: React.PropsWithChildren<{
    $root: string;
  }>,
) => {
  const { $root, children } = props;
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  React.useEffect(() => {
    setContainer(window.document.getElementById($root));
  }, [$root]);

  return container ? ReactDom.createPortal(children, container) : null;
};
