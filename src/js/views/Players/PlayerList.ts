import '../../../scss/Playerlist.scss';

import * as $ from 'jquery';

import { PlayerData } from '../../components/Players/PlayerData';
import { PlayerPosition } from '../../components/Players/PlayerPosition';

/* tslint:disable-next-line:no-var-requires */
const playerTemplate = require('../../components/Templates/PlayersTemplate.hbs');

namespace PlayerList {
  // declare Variables
  const playerContainer = $('.player-container');
  const playersTemplate = $('#players-template');

  // call in player data and slice them into column data
  async function setUpPlayers(): Promise<any> {
    const playerData = await PlayerData.getPlayerData();

    playerData.getPlayersOfType(PlayerPosition.Goalkeeper);

    const goalkeepers = playerData.getSplitPlayersOfType(PlayerPosition.Goalkeeper);
    const defenders = playerData.getSplitPlayersOfType(PlayerPosition.Defender);
    const midfielders = playerData.getSplitPlayersOfType(PlayerPosition.Midfielder);
    const forwards = playerData.getSplitPlayersOfType(PlayerPosition.Forward);

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

  export function init() {
    // initialise functions
    setUpPlayers();
  }
}

$(() => PlayerList.init());
