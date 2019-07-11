import '../../../scss/Playerlist.scss';
import '../../../img/badges-sprite.png';

import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';
import { PlayerPosition } from '../../components/Players/PlayerPosition';
import { TeamList } from '../../components/Teams/TeamList';
import { debounce } from 'lodash';
import { initPlayerFilters } from './Filters';

/* tslint:disable-next-line:no-var-requires */
const playerTemplate = require('../../components/Templates/PlayersTemplate.hbs');
const playerContainer = $('.player-container');
const filterContainer = $('.filter-container');
let playerData: PlayerList;
let teamData: TeamList;
let dividedPlayerData: object;

GetStaticData.getstaticData().then(data => {
  playerData = CreatePlayerData.createPlayerData(data);
  teamData =  CreateTeamData.createTeamData(data);
  initPlayerData(playerData);
  initPlayerFilters(teamData);
});

function initPlayerData(
  playerList?: PlayerList,
  filterName?: string,
  filterPrice?: string,
  filterTeam?: number
) {
  const FilterName = filterName;
  const FilterPrice = filterPrice;
  const FilterTeam = filterTeam;
  const players = playerList.players;
  const filteredPlayers = playerList.getFilteredPlayers(
    filterName,
    filterPrice,
    filterTeam
  );

  const goalkeepers = playerList.getFilteredPlayersOfType(
    PlayerPosition.Goalkeeper,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : '',
    FilterTeam ? FilterTeam : null
  );
  const defenders = playerList.getFilteredPlayersOfType(
    PlayerPosition.Defender,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : '',
    FilterTeam ? FilterTeam : null
  );
  const midfielders = playerList.getFilteredPlayersOfType(
    PlayerPosition.Midfielder,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : '',
    FilterTeam ? FilterTeam : null
  );
  const forwards = playerList.getFilteredPlayersOfType(
    PlayerPosition.Forward,
    FilterName ? FilterName : '',
    FilterPrice ? FilterPrice : '',
    FilterTeam ? FilterTeam : null
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

filterContainer.on(
  'paste, keyup',
  '#search-name',
  debounce(event => {
    const $this = $(event.currentTarget);

    const searchtext = $this.val() as string;
    const searchPrice = $('#search-price').val() as string;
    const searchTeam = parseInt($('.badge-link.active').attr('id'), 10);

    initPlayerData(
      playerData,
      searchtext.toLowerCase(),
      searchPrice,
      searchTeam
    );
  }, 500)
);

filterContainer.on('change', '#search-price', event => {
  const $this = $(event.currentTarget);

  const searchtext = $('#search-name').val() as string;
  const searchPrice = $this.val() as string;
  const searchTeam = parseInt($('.badge-link.active').attr('id'), 10);

  initPlayerData(playerData, searchtext.toLowerCase(), searchPrice, searchTeam);
});

filterContainer.on('click', '.badge-link', event => {
  event.preventDefault();
  const $this = $(event.currentTarget);

  $('.badge-link').removeClass('active');

  $this.hasClass('active')
    ? $this.removeClass('active')
    : $this.addClass('active');

  const searchtext = $('#search-name').val() as string;
  const searchPrice = $('#search-price').val() as string;
  const searchTeam = parseInt($('.badge-link.active').attr('id'), 10);

  initPlayerData(playerData, searchtext.toLowerCase(), searchPrice, searchTeam);
});

filterContainer.on('click', '.clear-filter', event => {
  event.preventDefault();
  const $this = $(event.currentTarget);
  const form = $this.siblings('.form-group').find('select, input, #search-team');
  const formID = form.attr('id');

  switch (formID) {
    case 'search-name':
      form.val('');
      break;
    case 'search-price':
      form.val('').prop('selected');
      break;
    case 'search-team':
      form.find('.badge .badge-link').removeClass('active');
      break;
  }

  const searchtext = $('#search-name').val() as string;
  const searchPrice = $('#search-price').val() as string;
  const searchTeam = parseInt($('.badge-link.active').attr('id'), 10);

  initPlayerData(playerData, searchtext.toLowerCase(), searchPrice, searchTeam);

});
