import { Category, Component, Variant, Palette } from '@react-buddy/ide-toolbox-next';
import { Button } from 'shared/ui/button';

export const PaletteTree = () => (
  <Palette>
    <Category name='UI-Kit'>
      <Component name='Button'>
        <Variant name='primary'>
          <Button variant='primary' />
        </Variant>
        <Variant name='secondary'>
          <Button variant='secondary' />
        </Variant>
      </Component>
    </Category>
  </Palette>
);
