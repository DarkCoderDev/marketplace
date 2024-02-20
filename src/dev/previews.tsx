import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import { PaletteTree } from './palette';
import { Button } from 'shared/ui/button';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path='/UiButton'>
        {/*<UiButton />*/}
      </ComponentPreview>
      <ComponentPreview path='/PaletteTree'>
        <PaletteTree />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
