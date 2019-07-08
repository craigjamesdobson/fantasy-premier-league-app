import '../../../scss/Playerlist.scss';
import '../../../img/badges-sprite.png';

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

function initPlayerData(playerList?: PlayerList, filterName?: string, filterPrice?: string) {
  const FilterName = filterName;
  const FilterPrice = filterPrice;
  const players = playerList.players;
  const filteredPlayers = playerList.getFilteredPlayers(filterName, filterPrice);

  const goalkeepers = playerList.getFilteredPlayersOfType(
    PlayerPosition.Goalkeeper,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : ''
  );
  const defenders = playerList.getFilteredPlayersOfType(
    PlayerPosition.Defender,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : ''
  );
  const midfielders = playerList.getFilteredPlayersOfType(
    PlayerPosition.Midfielder,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : ''
  );
  const forwards = playerList.getFilteredPlayersOfType(
    PlayerPosition.Forward,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : ''
  );

  // prettier-ignore
  dividedPlayerData = {
    filteredPlayers: filteredPlayers,
    players: players,

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
  $('.loading').hide();
}

$('#search-name').on(
  'paste, keyup',
  debounce(event => {
    const $this = $(event.currentTarget);

    const searchtext = $this.val() as string;
    const searchPrice = $('#search-price').val() as string;

    initPlayerData(playerData, searchtext.toLowerCase(), searchPrice);
  }, 500)
);

$('#search-price').on('change', event => {
    const $this = $(event.currentTarget);

    const searchtext = $('#search-name').val() as string;
    const searchPrice = $this.val() as string;

    initPlayerData(playerData, searchtext.toLowerCase(), searchPrice);
});
