import { clsx } from 'clsx';

export const Select = (props: { onClick: () => void; isShown: boolean }) => {
  const { onClick = () => {}, isShown = false } = props;
  return (
    <select name='' id=''>

    </select>
  );
};
