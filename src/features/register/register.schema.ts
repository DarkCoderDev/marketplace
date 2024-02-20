import * as y from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';

const isValidInn = (value: any) => {
  if (!value || value.match(/\D/)) return false;
  const inn = value.match(/(\d)/g);
  if (inn.length == 10) {
    return (
      inn[9] ==
      String(
        ((2 * inn[0] +
          4 * inn[1] +
          10 * inn[2] +
          3 * inn[3] +
          5 * inn[4] +
          9 * inn[5] +
          4 * inn[6] +
          6 * inn[7] +
          8 * inn[8]) %
          11) %
          10,
      )
    );
  } else if (inn.length == 12) {
    return (
      inn[10] ==
        String(
          ((7 * inn[0] +
            2 * inn[1] +
            4 * inn[2] +
            10 * inn[3] +
            3 * inn[4] +
            5 * inn[5] +
            9 * inn[6] +
            4 * inn[7] +
            6 * inn[8] +
            8 * inn[9]) %
            11) %
            10,
        ) &&
      inn[11] ==
        String(
          ((3 * inn[0] +
            7 * inn[1] +
            2 * inn[2] +
            4 * inn[3] +
            10 * inn[4] +
            3 * inn[5] +
            5 * inn[6] +
            9 * inn[7] +
            4 * inn[8] +
            6 * inn[9] +
            8 * inn[10]) %
            11) %
            10,
        )
    );
  }
  return false;
};

export const formSchema = y.object({
  firstName: y.string().required('Поле обязательное').min(2).max(15),
  lastName: y.string().required('Поле обязательное').min(2).max(15),
  birthday: y
    .date()
    .typeError('Введите коректную дату')
    .required('Поле обязательное')
    .min(new Date(1900, 0, 1), 'Некорректная дата')
    .max(new Date(2005, 0, 1), 'Регистрация возможна только с 18 лет'),
  inn: y
    .string()
    .required('Поле обязательное')
    .test({
      name: 'проверка ИНН',
      skipAbsent: true,
      test(value, ctx) {
        if (!isValidInn(value))
          return ctx.createError({ message: 'Некорректный ИНН' });
        else return true;
      },
    }),
  city: y.string().required('Поле обязательное'),
  email: y
    .string()
    .required('Поле обязательное')
    .email('Некорректный E-mail адрес'),
  phone: y
    .string()
    .required('Поле обязательное')
    .max(17, 'Некорректный номер телефона')
    .test({
      name: 'проверка номера телефона',
      skipAbsent: true,
      test(value, ctx) {
        return isValidPhoneNumber(value, 'RU')
          ? true
          : ctx.createError({ message: 'Некорректный номер телефона' });
      },
    }),
});

export type FormSchema = y.InferType<typeof formSchema>;
