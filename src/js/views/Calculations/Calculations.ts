import '../../../scss/calculations.scss';

import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';
import { TeamList } from '../../components/Teams/TeamList';

// tslint:disable:no-var-requires
const iconCleanSheet = require('../../../img/clean_sheet.png');
const iconRedCard = require('../../../img/red_card.png');
const iconGoal = require('../../../img/football.png');

const FixturesTemplate = require('../../components/Templates/FixturesTemplate.hbs');
const DraftedTeamTemplate = require('../../components/Templates/DraftedTeamsTemplate.hbs');
const PopulateFixturesTemplate = require('../../components/Templates/PopulateFixturesTemplate.hbs');
// tslint:enable:no-var-requires

const teamsContainer = $('.teams-container');
const fixturesContainer = $('.fixtures-container');

let playerData: PlayerList;
let teamData: TeamList;

GetStaticData.getstaticData().then(data => {
  playerData = CreatePlayerData.createPlayerData(data);
  initDraftedTeamData(playerData);

  teamData = CreateTeamData.createTeamData(data);
  initTeamData(teamData);
});

async function initDraftedTeamData(playerList: PlayerList) {

  const draftedTeamList = await DraftedTeamData.getDraftedTeamData();

  const draftedTeams = draftedTeamList.map(draftedTeam => {
    const players = draftedTeam.teamPlayers.map(player => ({
      player: playerList.players.filter(p => p.id === player.playerID)[0],
      transfers: player.transfers
    }));

    return new CompleteDraftedTeam(draftedTeam, players);
  });

  teamsContainer.append(DraftedTeamTemplate(draftedTeams));
}

function initTeamData(teamList: TeamList) {
  fixturesContainer.append(FixturesTemplate(teamList));
}

function togglePlayers(event: JQuery.Event) {
  const positionHeader = $(event.currentTarget);
  const selectedFixture = `#${positionHeader.closest('.fixtures').attr('id')}`;
  const playerTableClass = `.${positionHeader.parents('div').attr('class')}`;
  const positionTableHeader = positionHeader.next('.table-heading');
  const positionHeaderID = positionHeader.attr('data-position');
  const players = $(selectedFixture).find(playerTableClass).find('.player-data');

  players.filter(`[data-position="${positionHeaderID}"]`).toggleClass('active');
  positionTableHeader.toggleClass('active');
  positionHeader.toggleClass('active');
}

function disableSelectedTeams(event: JQuery.Event) {

  const selectedOptions = $('.team-option:selected').map(function() {
    return $(this).val();
  }).toArray();

  $('.team-option').removeAttr('disabled');

  for (const option of selectedOptions) {
    $('.team-option').each((i, el) => {
      const optionID = $(el).attr('data-id');
      if (optionID === option.toString()) {
        $(el).attr('disabled', 'disabled');
      }
    });
  }
}

function populateFixtures(event: JQuery.Event) {
  const $this = $(event.currentTarget);

  const selectedTeam = $this.find(':selected').val() as string;
  const playerTableClass = `.${$this.parent().attr('class')}-players`;
  const selectedFixture = `#${$this.closest('.fixtures').attr('id')}`;
  const playerTable = selectedFixture + ' .' + $this.parent() + '-players' + ' table';

  const filteredPlayers = playerData.players.filter(
    p => p.teamID === parseInt(selectedTeam, 10)
  );

  const filteredPositions = {
    filteredPositions: [
      {
        id: 1,
        name: 'Goalkeeper',
        nameShort: 'GK',
        players: filteredPlayers.filter(g => g.playerType === 1)
      },
      {
        id: 2,
        name: 'Defender',
        nameShort: 'DEF',
        players: filteredPlayers.filter(g => g.playerType === 2)
      },
      {
        id: 3,
        name: 'Midfielder',
        nameShort: 'MID',
        players: filteredPlayers.filter(g => g.playerType === 3)
      },
      {
        id: 4,
        name: 'Forward',
        nameShort: 'FWD',
        players: filteredPlayers.filter(g => g.playerType === 4)
      }
    ]
  };

  $(selectedFixture).find(playerTableClass).html(PopulateFixturesTemplate(filteredPositions));
}

$(document).on('click', '.position-header', togglePlayers);

$(document).on('change', '.teams-dropdown', event => {
  populateFixtures(event);
  disableSelectedTeams(event);
});
