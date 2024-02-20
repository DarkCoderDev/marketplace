import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-gray-600 p-2 text-white font-bold'>
      <Image
        className='mb-1'
        src='./atomy/logo.svg'
        alt='Logo'
        width={90}
        height={90}
      />

      <p className='text-center my-2'>
        © {new Date().getFullYear()} «Atomy Marketplace». Все права защищены.
      </p>

      <p
        className='text-center my-2'
      >
        При входе на ресурс, вы принимаете условия доступа и политику
        конфиденциальности.
      </p>

      <div className='grid grid-cols-2 grid-rows-2 justify-center'>
        <p className='col-span-2 col-start-1 row-start-1 place-self-center'>
          Скачать мобильное приложение:
        </p>

        <div className='col-start-1 row-start-2 place-self-end'>
          <Link
            target='_blank'
            href='https://apps.apple.com/ru/app/official-atomy-mobile/id1095597597'
          >
            <Image
              src='./atomy/app-store.png'
              alt='Logo'
              width={150}
              height={90}
            />
          </Link>
        </div>

        <div className='col-start-2 row-start-2 place-self-start'>
          <Link
            target='_blank'
            href='https://play.google.com/store/apps/details?id=m.com.atomy'
          >
            <Image
              src='./atomy/google-play.png'
              alt='Logo'
              width={150}
              height={90}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
