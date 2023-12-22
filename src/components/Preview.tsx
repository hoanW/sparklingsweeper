import { Devvit } from '@devvit/public-api';

import CustomPostComponent = Devvit.CustomPostComponent;

export const Preview: CustomPostComponent = () => {
  return (
    <blocks height={'tall'}>
      <vstack gap={'large'} alignment={'center middle'} grow>
        <image url={'sparkling.png'} imageWidth={128} imageHeight={128} />
        <text style={'heading'}>Sparklingsweeper</text>
      </vstack>
    </blocks>
  );
};
