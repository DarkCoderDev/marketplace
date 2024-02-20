import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header } from 'widgets/header';
import { MediaBoard } from 'widgets/media-board';
import { Overview } from 'widgets/overview';
import { Container } from 'shared/ui/container';
import { Modal } from 'shared/ui/modal';
import { Button } from 'shared/ui/button';
import { Closer } from 'shared/ui/closer';
import { Footer } from 'widgets/footer';
import { RegisterForm } from 'features/register/register-form';
import { useRegisterModel } from 'features/register/register.model';
import { Sidebar, useSidebarModel } from 'shared/ui/sidebar';

const SidebarContent = () => (
  <nav>
    <Link href='/'>
      <span
        role='img'
        aria-label='about us'
      >
        💁🏻‍♂️
      </span>
      About us
    </Link>
    <Link href='/'>
      <span
        role='img'
        aria-label='price'
      >
        💸
      </span>
      Pricing
    </Link>
    <Link href='/'>
      <span
        role='img'
        aria-label='contact'
      >
        📩
      </span>
      Contact
    </Link>
  </nav>
);

export function Home() {
  const sidebar = useSidebarModel(({ isOpen, setIsOpen }) => ({
    isOpen,
    setIsOpen,
  }));
  const register = useRegisterModel(
    ({ isRegisterOpen, setIsRegisterOpen }) => ({
      isRegisterOpen,
      setIsRegisterOpen,
    }),
  );

  return (
    <>
      <Head>
        <title>Atomy Marketplace</title>
      </Head>

      <Header />

      <MediaBoard>
        <Container>
          <Overview />
        </Container>
      </MediaBoard>

      <Modal
        isOpen={register.isRegisterOpen}
        handleOutsideClick={() => register.setIsRegisterOpen(false)}
      >
        <div className='px-3 py-4'>
          <div className='mb-3 flex items-center justify-between'>
            <h2 className='text-2xl'>Заявка на регистрацию</h2>
            <Closer
              color='black'
              onClick={() => register.setIsRegisterOpen(false)}
            />
          </div>

          <RegisterForm />

          <p className='text-center'>
            Нажимая на кнопку, я соглашаюсь на обработку своих персональных
            данных
          </p>
        </div>
      </Modal>

      <Button
        variant='primary'
        onClick={() => sidebar.setIsOpen(true)}
      >
        Open menu
      </Button>

      <Sidebar
        isOpen={sidebar.isOpen}
        setIsOpen={sidebar.setIsOpen}
      >
        <SidebarContent />
      </Sidebar>

      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
        corporis, dolore ducimus, et eveniet ex exercitationem expedita in
        libero nesciunt, nihil non placeat quaerat quisquam sed soluta voluptas
        voluptates.
      </h1>

      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
        corporis, dolore ducimus, et eveniet ex exercitationem expedita in
        libero nesciunt, nihil non placeat quaerat quisquam sed soluta voluptas
        voluptates.
      </h1>
      <Footer />
    </>
  );
}
