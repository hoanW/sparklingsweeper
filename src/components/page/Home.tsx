import { Devvit } from '@devvit/public-api';

import { Difficulty } from '../../difficulty.js';
import { MinesweeperGame } from '../../game.js';

export const HomePage = ({ game }: { game: MinesweeperGame }) => {
  return (
    <vstack gap={'medium'} alignment={'middle center'} grow>
      <image url={'sparkling.png'} imageWidth={128} imageHeight={128} />
      <button onPress={game.startGame(Difficulty.Easy)}>Easy - 10x10 - 10</button>
      <button onPress={game.startGame(Difficulty.Medium)}>Medium - 15x12 - 30</button>
    </vstack>
  );
};
