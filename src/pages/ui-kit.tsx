import React, { useState } from 'react';
import { Button } from 'shared/ui/button';
import { TextField } from 'shared/ui/text-field';
import { Sidebar, SidebarToggle } from 'shared/ui/sidebar';
import { Modal } from 'shared/ui/modal';

export const UiKitPage = () => {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <hgroup className='p-20'>
      <h2>UI Kit</h2>
      <div>
        <details className='p-5'>
          <summary className='mb-3'>
            <strong>Buttons</strong>
          </summary>
          <div>
            <Button variant='primary'>primary</Button>

            <hr className='m-5' />

            <Button variant='secondary'>secondary</Button>

            <hr className='m-5' />

            <Button variant='outlined'>outlined</Button>
          </div>
        </details>

        <hr className='m-5' />

        <details className='p-5'>
          <summary className='mb-3'>
            <strong>Inputs</strong>
          </summary>
          <div>
            <TextField
              label='email'
              inputProps={{
                placeholder: 'enter email',
              }}
            />

            <hr className='m-5' />

            <TextField
              label='pass'
              error='error'
              inputProps={{
                placeholder: 'enter email',
              }}
            />

            <hr className='m-5' />

            <TextField
              error='error'
              inputProps={{
                placeholder: 'enter email',
              }}
            />
          </div>
        </details>

        <hr className='m-5' />

        <details className='p-5'>
          <summary className='mb-3'>
            <strong>Modal</strong>
          </summary>

          <div>
            <Button
              onClick={() => setModal((prevState) => !prevState)}
              variant='outlined'
            >
              open modal
            </Button>
            <Modal
              isOpen={modal}
              handleOutsideClick={() => setModal((prevState) => !prevState)}
            >
              Modal
            </Modal>
          </div>
        </details>

        <hr className='m-5' />

        <details className='p-5'>
          <summary className='mb-3'>
            <strong>Sidebar</strong>
          </summary>
          <div>
            <Button
              onClick={() => setSidebar((prevState) => !prevState)}
              variant='outlined'
            >
              open sidebar
            </Button>
            <SidebarToggle
              isOpen={sidebar}
              setIsOpen={() => setSidebar((prevState) => !prevState)}
            />
            <Sidebar
              isOpen={sidebar}
              setIsOpen={() => setSidebar((prevState) => !prevState)}
            >
              Sidebar
            </Sidebar>
          </div>
        </details>
      </div>
    </hgroup>
  );
};
