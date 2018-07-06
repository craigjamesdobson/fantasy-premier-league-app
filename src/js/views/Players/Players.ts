import '../../../scss/Playerlist.scss';

import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';
import { PlayerPosition } from '../../components/Players/PlayerPosition';
import { debounce } from 'lodash';

/* tslint:disable-next-line:no-var-requires */
const playerTemplate = require('../../components/Templates/PlayersTemplate.hbs');
const playerContainer = $('.player-container');
let playerData: PlayerList;
let dividedPlayerData: object;

GetStaticData.getstaticData().then(data => {
  playerData = CreatePlayerData.createPlayerData(data);
  initPlayerData(playerData);
});

function initPlayerData(playerList: PlayerList, filterString?: string) {

  const filter = filterString;
  const goalkeepers = playerList.getFilteredPlayersOfType(PlayerPosition.Goalkeeper, filter ? filter : '');
  const defenders = playerList.getFilteredPlayersOfType(PlayerPosition.Defender, filter ? filter : '');
  const midfielders = playerList.getFilteredPlayersOfType(PlayerPosition.Midfielder, filter ? filter : '');
  const forwards = playerList.getFilteredPlayersOfType(PlayerPosition.Forward, filter ? filter : '');

  // prettier-ignore
  dividedPlayerData = {
    gkLeft: goalkeepers[0],
    gkRight: goalkeepers[1],

    dfLeft: defenders[0],
    dfRight: defenders[1],

    mfLeft: midfielders[0],
    mfRight: midfielders[1],

    fwLeft: forwards[0],
    fwRight: forwards[1]
  };
  playerContainer.empty().append(playerTemplate(dividedPlayerData));
}

// $(document).on('keyup', '#searchInput', event => {
//   const $this = $(event.currentTarget);

//   const searchtext = $this.val() as string;

//   initPlayerData(playerData, searchtext);
// });

$('#searchInput').on('keyup', debounce(event => {
  const $this = $(event.currentTarget);

  const searchtext = $this.val() as string;

  initPlayerData(playerData, searchtext);
}, 1000));
