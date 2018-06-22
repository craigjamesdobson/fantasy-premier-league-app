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

  $('.player-data').each((i, player) => {
    if (
      $(player).attr('data-position') === '3' ||
      $(player).attr('data-position') === '4'
    ) {
      $(player)
        .find('.clean-sheet-checkbox')
        .attr('disabled', 'disabled');
    }
  });
}

function calculatePoints() {
  // Loop through each player from the selected fixtures
  $('.player-data').each((i, player) => {
    // Create calculation variables
    let goalsTotal = 0;
    let cleanSheetTotal = 0;
    let redCardTotal = 0;
    let pointsTotal = 0;
    const goalsScored = parseInt(
      $(player)
        .find('select.score-select :selected')
        .val() as string,
      10
    );
    const positionID = $(player).attr('data-position');
    const cleanSheet = $(player)
      .find('.clean-sheet-checkbox')
      .is(':checked');
    const sentOff = $(player)
      .find('.red-card-checkbox')
      .is(':checked');

    if (cleanSheet) {
      if (positionID === '1') {
        cleanSheetTotal = 5;
      } else if (positionID === '2') {
        cleanSheetTotal = 2;
      }
    }

    if (sentOff) {
      redCardTotal = 10;
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

    let multiplier;

    switch (positionID) {
      case '1':
        multiplier = 10;
        break;
      case '2':
        multiplier = 7;
        break;
      case '3':
        multiplier = 5;
        break;
      case '4':
        multiplier = 3;
        break;
    }

    goalsTotal = goalsScored * multiplier;

    if (goalsScored === 2) {
      goalsTotal = goalsTotal + 5;
    } else if (goalsScored >= 3) {
      goalsTotal = goalsTotal + 10;
    }
    pointsTotal = goalsTotal + cleanSheetTotal - redCardTotal;
    $(player).attr('data-points', pointsTotal);
  });
}

function updatePointsTotal() {
  $('.player-total-data').each((i, player) => {
    const playerID = $(player)
      .find('.id')
      .text();

    const matchingPlayerID = $('.player-data').filter(
      (index, matchingplayer) => {
        return $(matchingplayer).attr('data-id') === playerID;
      }
    );

    const matchingPlayerPoints = matchingPlayerID.attr('data-points');

    $(player)
      .find('.points')
      .text('0');
    $(player)
      .find('.points')
      .text(matchingPlayerPoints);

    if ($(matchingPlayerID).attr('data-sentoff') === 'true') {
      $(player).addClass('sent-off');
    } else {
      $(player).removeClass('sent-off');
    }
  });

  $('.teams-container table').each((i, teams) => {
    let $total = 0;

    $(teams)
      .find('.points')
      .each((index, player) => {
        $total += parseInt($(player).text(), 10);
      });

    $(teams)
      .find('.total-points')
      .text($total);
  });
}

function resetFixture(event: JQuery.Event) {
  const $this = $(event.currentTarget);
  const fixtureText = $this
    .closest('.fixtures')
    .find('h3')
    .text();
  const selectedFixture = `#${$this.closest('.fixtures').attr('id')}`;

  swal({
    title: 'Are you sure?',
    html: `Would you like to reset <b>${fixtureText.toLowerCase()}</b>`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#5cb85c',
    cancelButtonColor: '#d9534f',
    confirmButtonText: 'Yes, reset it!'
  }).then((result: any) => {
    if (result.value) {
      $(selectedFixture)
        .find('select')
        .val(0);
      $(selectedFixture)
        .find('.home-team-players, .away-team-players')
        .empty();

      calculatePoints();
      updatePointsTotal();
      disableSelectedTeams(event);
    }
  });
}

$(document).on('click', '.position-header', togglePlayers);

$(document).on('click', '.clear-fixture', event => resetFixture(event));

$(document).on('change', '.teams-dropdown', event => {
  populateFixtures(event);
  disableSelectedTeams(event);
  calculatePoints();
  updatePointsTotal();
});

$(document).on(
  'change',
  '.score-select, .clean-sheet-checkbox, .red-card-checkbox',
  event => {
    calculatePoints();
    updatePointsTotal();
  }
);

$(document).on('change', '.week-dropdown', event => {
  const weekID = $(event.currentTarget).val();

  $('.player-total-data').each((i, player) => {
    const transferData = $(player).attr('data-transfer');
    const cachedPlayerID = $(player).find('.id').attr('data-original-id');
    const cachedPlayerPosition = $(player).find('.position').attr('data-original-position');
    const cachedPlayerTeam = $(player).find('.club').attr('data-original-team');
    const cachedPlayerName = $(player).find('.player').attr('data-original-name');
    let transferSet = false;

    $(player).removeClass('transfered');
    $(player).find('.id').text(cachedPlayerID);
    $(player).find('.position').text(cachedPlayerPosition);
    $(player).find('.club').text(cachedPlayerTeam);
    $(player).find('.player').text(cachedPlayerName);
    transferSet = false;

    if (transferData !== undefined) {
      const transfers = transferData.split(',');

      $(transfers).each((ind, transfer: any) => {
        const transferSplit = transfer.split('|');
        const transferWeek = parseInt(transferSplit[0], 10);
        const transferID = transferSplit[1];

        if (transferWeek > weekID) {
          transferSet = true;
        } else {
          transferSet = false;
        }

        if (transferSet === true) {
          return;
        }

        for (const playerdata of playerData.players) {
          if (playerdata.id === parseInt(transferID, 10)) {
            if (weekID >= transferWeek) {
              $(player).addClass('transfered');
              $(player).find('.id').text(playerdata.id);
              $(player).find('.position').text(playerdata.playerType);
              $(player).find('.club').text(playerdata.teamShort);
              $(player).find('.player').text(playerdata.name);
              transferSet = true;
              return;
            }
          }
        }
      });
    }
  });
});
