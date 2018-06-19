import '../../../scss/calculations.scss';

import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';
import { TeamList } from '../../components/Teams/TeamList';

// tslint:disable:no-var-requires
const swal = require('sweetalert2');
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
  const players = $(selectedFixture)
    .find(playerTableClass)
    .find('.player-data');

  players.filter(`[data-position="${positionHeaderID}"]`).toggleClass('active');
  positionTableHeader.toggleClass('active');
  positionHeader.toggleClass('active');
}

function disableSelectedTeams(event: JQuery.Event) {
  const selectedOptions = $('.team-option:selected')
    .map(function() {
      return $(this).val();
    })
    .toArray();

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
  const playerTable =
    selectedFixture + ' .' + $this.parent() + '-players' + ' table';

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

  $(selectedFixture)
    .find(playerTableClass)
    .html(PopulateFixturesTemplate(filteredPositions));
}

function calculatePoints() {
  // Loop through each player from the selected fixtures
  $('.player-data').each((i, player) => {
    // Create calculation variables
    let goalsTotal = 0;
    let cleanSheetTotal = 0;
    let redCardTotal = 0;
    let pointsTotal = 0;
    const goalsScored = parseInt($(player).find('select.score-select :selected').val() as string, 10);
    const positionID = $(player).attr('data-position');
    const cleanSheet = $(player).find('.clean-sheet-checkbox').is(':checked');
    const sentOff = $(player).find('.red-card-checkbox').is(':checked');

    // If clean sheet checkbox is checked set the cleanSheetTotal
    if (cleanSheet) {
      if (positionID === '1') {
        cleanSheetTotal = 5;
      } else if (positionID === '2') {
        cleanSheetTotal = 2;
      }
    }

    // If the red card checkbox is selected set the redCardTotal to 10
    if (sentOff) {
      redCardTotal = 10;
      // Add attribute to current player if sent off
      $(player).attr('data-sentoff', 'true');
    } else {
      $(player).removeAttr('data-sentoff');
    }

    if (goalsScored > 0) {
      $(player)
        .find('.score-select')
        .addClass('active');
    } else {
      $(player)
        .find('.score-select')
        .removeClass('active');
    }

    if (positionID === '1') {
      goalsTotal = goalsScored * 10;

      if (goalsScored === 2) {
        goalsTotal = goalsTotal + 5;
      } else if (goalsScored >= 3) {
        goalsTotal = goalsTotal + 10;
      }

    } else if (positionID === '2') {
      goalsTotal = goalsScored * 7;

      if (goalsScored === 2) {
        goalsTotal = goalsTotal + 5;
      } else if (goalsScored >= 3) {
        goalsTotal = goalsTotal + 10;
      }

    } else if (positionID === '3') {
      goalsTotal = goalsScored * 5;

      if (goalsScored === 2) {
        goalsTotal = goalsTotal + 5;
      } else if (goalsScored >= 3) {
        goalsTotal = goalsTotal + 10;
      }

    } else if (positionID === '4') {
      goalsTotal = goalsScored * 3;

      if (goalsScored === 2) {
        goalsTotal = goalsTotal + 5;
      } else if (goalsScored >= 3) {
        goalsTotal = goalsTotal + 10;
      }
    }

    // Create a variable by adding the totals of all calculation variables
    pointsTotal = goalsTotal + cleanSheetTotal - redCardTotal;

    // Create an attribute on the player table row and set it to the pointsTotal
    $(player).attr('data-points', pointsTotal);
  });
}

function updatePointsTotal() {

      $('.player-total-data').each( (i, player) => {

        const playerID = $(player).find('.id').text();

        $(this).attr('data-player-id', playerID);

        const matchingPlayerID = $('.player-data').filter( (ind, matchingplayer) => {
            return $(matchingplayer).attr('data-id') === playerID;
        });

        const matchingPlayerPoints = matchingPlayerID.attr('data-points');

        $(player).find('.points').text('0');
        $(player).find('.points').text(matchingPlayerPoints);

        if ($(matchingPlayerID).attr('data-sentoff') === 'true') {
            $(player).addClass('sent-off');
        } else {
            $(player).removeClass('sent-off');
        }
    });
}

function resetFixture(event: JQuery.Event) {
  const $this = $(event.currentTarget);
  const fixtureText = $this.closest('.fixtures').find('h3').text();
  const selectedFixture = `#${$this.closest('.fixtures').attr('id')}`;

  swal({
      title: 'Are you sure?',
      html: `Would you like to reset <b>${fixtureText.toLowerCase()}</b>`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5cb85c',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Yes, reset it!',
    }).then((result: any) => {
      if (result.value) {
          $(selectedFixture).find('select').val(0);
          $(selectedFixture).find('.home-team-players, .away-team-players').empty();

          calculatePoints();
          updatePointsTotal();
          disableSelectedTeams(event);
      }
    });
}

$(document).on('click', '.position-header', togglePlayers);

$(document).on('change', '.teams-dropdown', event => {
  populateFixtures(event);
  disableSelectedTeams(event);
  calculatePoints();
  updatePointsTotal();
});

$(document).on('change', '.score-select, .clean-sheet-checkbox, .red-card-checkbox', event => {
    calculatePoints();
    updatePointsTotal();
  }
);

$(document).on('click', '.clear-fixture', event => resetFixture(event));
