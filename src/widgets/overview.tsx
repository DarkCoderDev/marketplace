import Link from 'next/link';
import { Button } from 'shared/ui/button';

export const Overview = () => {
  return (
    <section
      className='grid-rows-[repeat(7, minmax(auto, 1fr)))] md:grid-rows-[repeat(4, minmax(auto, 1fr)))] grid h-auto gap-y-4 py-[5%] font-bold lg:grid-cols-4 lg:grid-rows-3'>
      <h1
        className='text-center text-xl text-white md:col-span-4 md:row-start-1 md:text-2xl lg:col-span-2 lg:col-start-1 lg:text-left'>
        ГЛОБАЛЬНЫЙ ИНТЕРНЕТ-МАГАЗИН ПРЕМИАЛЬНЫХ КОРЕЙСКИХ ТОВАРОВ С ВОЗМОЖНОСТЬЮ
        ЗАРАБОТКА
      </h1>

      <div
        className='md:col-span-4 md:row-start-2 lg:col-span-2 lg:col-start-1'>
        <p className='text-center text-base text-white md:text-lg lg:text-left'>
          Начните бизнес и зарабатывайте 1000$ на старте. Повторите путь
          успешных партнеров, под присмотром двух наставников.
        </p>
      </div>

      <div
        className='justify-self-center md:col-span-2 md:col-start-1 md:row-start-3 lg:col-span-1 lg:col-start-1 lg:self-center lg:justify-self-start'>
        <Button
          variant='primary'
          className='w-64'
        >
          <Link href='/'>Узнать про бизнес</Link>
        </Button>
      </div>

      <div
        className='lg:justify-self justify-self-center md:col-span-2 md:col-start-3 md:row-start-3 lg:col-start-2 lg:row-start-3 lg:self-center xl:md:col-span-1'>
        <Button
          variant='secondary'
          className='w-64'
        >
          <Link href='/'>Смотреть продукцию</Link>
        </Button>
      </div>

      <div
        className='flex flex-col justify-self-center text-center md:row-start-4 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:text-right xl:justify-self-end'>
        <div className='text-6xl text-sky-400'>2 трлн</div>
        <div className='text-white pt-2'>Уровень мировых продаж в 2022 году достиг 2,2 триллиона.</div>
      </div>

      <div
        className='flex flex-col justify-self-center text-center md:col-span-2 md:col-start-2 md:row-start-4 lg:col-span-1 lg:col-start-4 lg:row-start-2 lg:text-right xl:justify-self-end'>
        <div className='text-6xl text-sky-400'>15 млн</div>
        <div className='text-white'>Количество участников по всему миру превысило 15 миллионов.</div>
      </div>

      <div
        className='flex flex-col justify-self-center text-center md:row-start-4 lg:col-span-1 lg:col-start-4 lg:row-start-3 lg:text-right xl:justify-self-end '>
        <div className='text-6xl text-sky-400'>27</div>
        <div className='text-white'>Компания представлена уже в 27 странах мира.</div>
      </div>
    </section>
  );
};
