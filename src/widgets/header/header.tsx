import Image from 'next/image';
import React from 'react';
import { SidebarToggle, useSidebarModel } from 'shared/ui/sidebar';
import Link from 'next/link';
import { useRegisterModel } from 'features/register/register.model';
import { Button } from 'shared/ui/button';
import { clsx } from 'clsx';
import { Container } from 'shared/ui/container';
// import { clsx } from 'clsx';
// import logoImg from '../assets/logo_atomy_white.png';

export const Header = () => {
  const sidebar = useSidebarModel(({ isOpen, setIsOpen }) => ({
    isOpen,
    setIsOpen,
  }));
  const register = useRegisterModel(({ setIsRegisterOpen }) => ({
    setIsRegisterOpen,
  }));
  const [isStickied, setIsStickied] = React.useState(false);

  React.useEffect(() => {
    const scrollHandler = () => setIsStickied(window.scrollY > 0);

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  // content: '';
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // background-color: rgba(0,0,0,0.05);
  // z-index: 0;
  // backdrop-filter: blur(5px);

  // ToDo: make sticky header in the future.
  return (
    <header
      className={clsx(
        {
          'absolute': !isStickied,
          'fixed backdrop-blur-2xl backdrop-brightness-50': isStickied,
        },
        'top-0 z-10 w-full py-2 font-bold text-white transition-all duration-100 ease-in',
      )}
    >
      <Container>
        <div className='grid grid-cols-5 grid-rows-[auto_1fr]'>
          <section className='col-span-1 row-start-2 mr-3 w-[60px] self-center sm:w-[70px] md:row-span-2 md:row-start-1 md:w-[110px]'>
            <Image
              src='./atomy/logo-white.png'
              alt='Logo'
              width={300}
              height={300}
            />
          </section>

          <section className='col-span-5 row-span-1 place-self-center text-center text-xs md:col-span-2 md:col-start-2 md:place-self-start md:text-base'>
            Официальный сайт партнера Атоми
          </section>

          <section
            onClick={() => register.setIsRegisterOpen(true)}
            className='col-span-3 col-start-2 row-start-2 cursor-pointer place-self-center text-center text-sm hover:text-sky-500 active:text-sky-500 md:col-start-4 md:row-start-1 md:place-self-end md:text-base'
          >
            🔑 Заявка на регистрацию
          </section>

          <nav className='col-start-5 row-start-2 justify-self-end md:hidden'>
            <SidebarToggle
              color='white'
              isOpen={sidebar.isOpen}
              setIsOpen={sidebar.setIsOpen}
            />
          </nav>

          <nav className='col-span-4 col-start-2 row-start-2 hidden place-content-stretch py-2 md:inline-block'>
            <menu className='border-y-black-200 flex items-center justify-between border-t-[1px] pt-3'>
              <li>
                <Link href='/'>О компании</Link>
              </li>
              <li>
                <Link href='/'>Продукция</Link>
              </li>
              <li>
                <Link href='/'>Бизнес</Link>
              </li>
              <li>
                <Link href='/'>Хемохим</Link>
              </li>
              <li>
                <Link href='/'>Маркетинг-план</Link>
              </li>
              <li>
                <Link href='/'>Статьи</Link>
              </li>
            </menu>
          </nav>
        </div>
      </Container>
    </header>
  );
};
