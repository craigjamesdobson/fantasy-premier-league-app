import '../../../scss/Playerlist.scss';

import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { IPlayerData } from '../../components/Players/IPlayerData';
import { IPlayerList } from '../../components/Players/IPlayerList';
import { PlayerList } from '../../components/Players/PlayerList';
import { PlayerPosition } from '../../components/Players/PlayerPosition';

/* tslint:disable-next-line:no-var-requires */
const playerTemplate = require('../../components/Templates/PlayersTemplate.hbs');
const playerContainer = $('.player-container');
const playersTemplate = $('#players-template');

GetStaticData.getstaticData().then(data => {
  const playerData = CreatePlayerData.createPlayerData(data);
  initPlayerData(playerData);
});

function initPlayerData(playerList: PlayerList) {

  const goalkeepers = playerList.getSplitPlayersOfType(
    PlayerPosition.Goalkeeper
  );
  const defenders = playerList.getSplitPlayersOfType(
    PlayerPosition.Defender
  );
  const midfielders = playerList.getSplitPlayersOfType(
    PlayerPosition.Midfielder
  );
  const forwards = playerList.getSplitPlayersOfType(
    PlayerPosition.Forward
  );

  // prettier-ignore
  const dividedPlayerData: object = {
        gkLeft: goalkeepers[0],
        gkRight: goalkeepers[1],

        dfLeft: defenders[0],
        dfRight: defenders[1],

        mfLeft: midfielders[0],
        mfRight: midfielders[1],

        fwLeft: forwards[0],
        fwRight: forwards[1]
      };

  playerContainer.append(playerTemplate(dividedPlayerData));
}
