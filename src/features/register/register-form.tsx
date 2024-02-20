import React from 'react';
import { Button } from 'shared/ui/button';
import { TextField } from 'shared/ui/text-field';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { formSchema, FormSchema } from 'features/register/register.schema';

export const RegisterForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: yupResolver(formSchema) });
  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  const phoneField = watch('phone');
  React.useEffect(() => {
    if (phoneField && isValidPhoneNumber(phoneField, 'RU')) {
      const phoneNumber = parsePhoneNumber(phoneField, 'RU');
      setValue('phone', phoneNumber.formatNational());
    }
  }, [phoneField, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={errors.firstName?.message}
        label='Укажите ваше имя'
        inputProps={{
          placeholder: 'Например: Вася',
          ...register('firstName'),
        }}
      />

      <TextField
        className='mt-2'
        error={errors.lastName?.message}
        label='Укажите вашу фамилию'
        inputProps={{
          placeholder: 'Например: Пупкин',
          ...register('lastName'),
        }}
      />

      <TextField
        className='mt-2'
        error={errors.birthday?.message}
        label='Укажите дату рождения'
        inputProps={{
          type: 'date',
          ...register('birthday'),
        }}
      />

      <TextField
        className='mt-2'
        error={errors.phone?.message}
        label='Укажите ваш мобильный номер'
        inputProps={{
          maxLength: 17,
          placeholder: 'В формате: 89996663322',
          ...register('phone'),
        }}
      />

      <TextField
        className='mt-2'
        error={errors.city?.message}
        label='Укажите страну и город'
        inputProps={{
          placeholder: 'Например: Россия, Москва',
          ...register('city'),
        }}
      />

      <TextField
        className='mt-2'
        error={errors.email?.message}
        label='Укажите свой E-mail адрес'
        inputProps={{
          type: 'email',
          placeholder: 'Email',
          ...register('email'),
        }}
      />

      <TextField
        className='mt-2'
        error={errors.inn?.message}
        label='Укажите ваш ИНН'
        inputProps={{
          maxLength: 12,
          type: 'number',
          placeholder: 'ИНН',
          ...register('inn'),
        }}
      />

      <Button
        className='my-3 w-full'
        variant='primary'
        type='submit'
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
