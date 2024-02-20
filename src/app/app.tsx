import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { DevSupport } from '@react-buddy/ide-toolbox-next';
import { ComponentPreviews, useInitial } from 'dev';
import { clsx } from 'clsx';

const Noto_Sans = localFont({
  src: [
    {
      path: 'assets/fonts/NotoSans-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: 'assets/fonts/NotoSans-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'assets/fonts/NotoSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <div
        id='app'
        role='application'
        className={clsx(
          Noto_Sans.className,
          'min-w-screen min-h-screen selection:bg-sky-500',
        )}
      >
        <Component {...pageProps} />
      </div>
    </DevSupport>
  );
}
