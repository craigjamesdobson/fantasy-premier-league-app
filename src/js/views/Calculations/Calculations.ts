import '../../../scss/calculations.scss';
import '../../../img/icon-cleansheet.png';
import '../../../img/icon-redcard.png';
import '../../../img/icon-goal.png';
import '../../../img/icon-assist.png';
import '../../components/Database/WeeklyData';

import {
  deleteWeeklyData,
  importWeekData,
  populateSelectedWeek,
  storeTableData,
  storeWeeklyData
} from '../../components/Database/WeeklyData';

import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { decompress as LZDecompress } from 'lz-string';
import { PlayerList } from '../../components/Players/PlayerList';
import { PlayerPositionShort } from '../../components/Players/PlayerPosition';
import { TeamList } from '../../components/Teams/TeamList';
import swal from 'sweetalert2';

// tslint:disable:no-var-requires
const FixturesTemplate = require('../../components/Templates/FixturesTemplate.hbs');
const DraftedTeamTemplate = require('../../components/Templates/DraftedTeamsTemplate.hbs');
const PopulateFixturesTemplate = require('../../components/Templates/PopulateFixturesTemplate.hbs');
// tslint:enable:no-var-requires

const teamsContainer = $('.teams-container');
const fixturesContainer = $('.fixtures-container');

let playerData: PlayerList;
let teamData: TeamList;
export let draftedTeams: CompleteDraftedTeam[] = [];

GetStaticData.getstaticData().then(async data => {
  playerData = CreatePlayerData.createPlayerData(data);
  await initDraftedTeamData(playerData);

  teamData = CreateTeamData.createTeamData(data);
  initTeamData(teamData);
  $('.loading').hide();
  $('.week-dropdown').trigger('change');
});

async function initDraftedTeamData(playerList: PlayerList) {
  return new Promise<void>(async resolve => {
    const draftedTeamList = await DraftedTeamData.getDraftedTeamData();

    draftedTeams = draftedTeamList.map(draftedTeam => {
      const players = draftedTeam.teamPlayers.map(player => ({
        player: playerList.players.filter(p => p.id === player.playerID)[0],
        transfers: player.transfers
      }));
      return new CompleteDraftedTeam(draftedTeam, players);
    });

    teamsContainer.append(DraftedTeamTemplate(draftedTeams));
    if (localStorage.getItem('drafted_teams_data') === null) {
      createDraftedTeamData();
    }
    resolve();
  });
}

function createDraftedTeamData() {
  const draftedTeamsData = [];
  let draftedTeamData = {};
  for (const draftedTeam of draftedTeams) {
    (draftedTeamData = {
      teamID: draftedTeam.teamID,
      teamName: draftedTeam.teamName,
      weeklyData: []
    }),
      draftedTeamsData.push(draftedTeamData);
  }
  localStorage.setItem('drafted_teams_data', JSON.stringify(draftedTeamsData));
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
    .map((i, selectedOption) => {
      return $(selectedOption).val() as string;
    })
    .toArray();

  $('.team-option').removeAttr('disabled');

  for (const option of selectedOptions) {
    $('.team-option').each((i, teamOption) => {
      const optionID = $(teamOption).attr('data-id');
      if (optionID === option.toString()) {
        $(teamOption).attr('disabled', 'disabled');
      }
    });
  }
}

function populateFixture(event: JQuery.Event) {
  const fixture = $(event.currentTarget);
  const selectedTeam = fixture.find(':selected').val() as string;
  const playerTableClass = `.${fixture.parent().attr('class')}-players`;
  const selectedFixture = `#${fixture.closest('.fixtures').attr('id')}`;

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

export function populateAllFixtures() {
  const selectedWeekPlayers = 'week_' + $('.week-dropdown').val() + '_players';
  const retrievedPlayers = localStorage.getItem(selectedWeekPlayers);

  $('.teams-dropdown').each((i, teams) => {
    const playerTableClass = `.${$(teams)
      .parent()
      .attr('class')}-players`;
    const selectedFixture = `#${$(teams)
      .closest('.fixtures')
      .attr('id')}`;
    const selectedTeam = $(teams)
      .find(':selected')
      .val() as string;
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

    if (
      $(teams)
        .find(':selected')
        .val() !== '0'
    ) {
      $(selectedFixture)
        .find(playerTableClass)
        .html(PopulateFixturesTemplate(filteredPositions));

      $('.player-data').each((ind, player) => {
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
  });

  if (localStorage.getItem(selectedWeekPlayers) !== null) {
    const decompressPlayers = LZDecompress(retrievedPlayers);
    const selectedWeekPlayersData = JSON.parse(decompressPlayers);

    $.each(selectedWeekPlayersData, (i, playerList) => {
      $.each(playerList, (j, player) => {
        $('.player-data').each((k, dataPlayer) => {
          if ($(dataPlayer).attr('data-id') === playerList[j].playerID) {
            $(dataPlayer)
              .find('.red-card-checkbox')
              .prop('checked', playerList[j].redCard);
            $(dataPlayer)
              .find('.clean-sheet-checkbox')
              .prop('checked', playerList[j].cleanSheet);
            $(dataPlayer)
              .find('.score-select')
              .val(playerList[j].goalsScored);
          }
        });
      });
    });
  }
}

function calculatePoints() {
  $('.player-data').each((i, player) => {
    let goalsTotal = 0;
    let cleanSheetTotal = 0;
    let redCardTotal = 0;
    let pointsTotal = 0;
    const goalsScored = parseInt(
      $(player)
        .find('.score-select')
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
        .attr('data-goals', goalsScored)
        .find('.score-select')
        .addClass('active');
    } else {
      $(player)
        .removeAttr('data-goals')
        .find('.score-select')
        .removeClass('active');
    }

    goalsTotal = goalsScored * multiplier;

    if (goalsScored === 2) {
      goalsTotal = goalsTotal + 5;
    } else if (goalsScored >= 3) {
      goalsTotal = goalsTotal + 10;
    }
    pointsTotal = goalsTotal + cleanSheetTotal - redCardTotal;

    pointsTotal !== 0
      ? $(player).attr('data-points', pointsTotal)
      : $(player).removeAttr('data-points');
  });
}

function updatePointsTotal() {
  $('.player-total-data').each((i, player) => {
    const playerID = $(player)
      .find('.id')
      .text();

    const matchingPlayerID = $('.player-data').filter((j, matchingPlayer) => {
      return $(matchingPlayer).attr('data-id') === playerID;
    });

    const matchingPlayerPoints = matchingPlayerID.attr('data-points');
    const matchingPlayerGoals = matchingPlayerID.attr('data-goals');

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

    if ($(matchingPlayerID).attr('data-goals')) {
      $(player).attr('data-goals', matchingPlayerGoals);
    } else {
      $(player).removeAttr('data-goals');
    }
  });

  $('.teams-container table').each((i, teams) => {
    let total = 0;

    $(teams)
      .find('.points')
      .each((k, player) => {
        total += parseInt($(player).text(), 10);
      });

    $(teams)
      .find('.total-points')
      .text(total);
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
    html: `<h6>Would you like to reset <b>${fixtureText.toUpperCase()}</b><h4>`,
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

function resetAllFixtures() {
  $('.fixtures')
    .find('select')
    .val(0);
  $('.fixtures')
    .find('.home-team-players, .away-team-players')
    .empty();
}

function applyTransfers(event: JQuery.Event) {
  const weekID = +$(event.currentTarget).val();

  $('.player-total-data').each((i, player) => {
    const transferData = $(player).attr('data-transfer');
    const cachedPlayerID = $(player)
      .find('.id')
      .attr('data-original-id');
    const cachedPlayerPosition = $(player)
      .find('.position')
      .attr('data-original-position');
    const cachedPlayerTeam = $(player)
      .find('.club')
      .attr('data-original-team');
    const cachedPlayerName = $(player)
      .find('.player')
      .attr('data-original-name');
    let transferSet = false;

    if (transferData !== undefined) {
      $(player).removeClass('transfered current-week-transfer');
      $(player)
        .find('.id')
        .text(cachedPlayerID);
      $(player)
        .find('.position')
        .text(cachedPlayerPosition);
      $(player)
        .find('.club')
        .text(cachedPlayerTeam);
      $(player)
        .find('.player')
        .text(cachedPlayerName);

      const transfers = transferData.split(',');

      $(transfers).each((j, transfer: any) => {
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
              if (weekID === transferWeek) {
                $(player).addClass('current-week-transfer');
              }
              $(player).addClass('transfered');
              $(player)
                .find('.id')
                .text(playerdata.id);
              $(player)
                .find('.position')
                .text(PlayerPositionShort[playerdata.playerType]);
              $(player)
                .find('.club')
                .text(playerdata.teamShort);
              $(player)
                .find('.player')
                .text(playerdata.name);
              transferSet = true;
              return;
            }
          }
        }
      });
    }
  });
}

function exportWeekData() {
  let selectedWeekFixturesText = null;
  let selectedWeekPlayersText = null;

  const selectedWeekPlayers = 'week_' + $('.week-dropdown').val() + '_players';
  const selectedWeekFixtures = 'week_' + $('.week-dropdown').val() + '_fixtures';

  if (localStorage.getItem(selectedWeekPlayers) === null && localStorage.getItem(selectedWeekPlayers) === null) {
    swal({
      title: 'No week data to export',
      type: 'error',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  const selectedWeekFixtureString = JSON.stringify(LZDecompress(localStorage.getItem(selectedWeekFixtures)));
  const selectedWeekPlayerString = JSON.stringify(LZDecompress(localStorage.getItem(selectedWeekPlayers)));

  const formattedFixtureString = selectedWeekFixtureString.replace(/^"|"$|\\/g, '');
  const formattedPlayerString = selectedWeekPlayerString.replace(/^"|"$|\\/g, '');

  const selectedWeekFixturesData = new Blob([formattedFixtureString], { type: 'text/plain' });
  const selectedWeekPlayersData = new Blob([formattedPlayerString], { type: 'text/plain' });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (selectedWeekFixturesText !== null || selectedWeekPlayersText !== null) {
    window.URL.revokeObjectURL(selectedWeekFixturesText);
    window.URL.revokeObjectURL(selectedWeekPlayersText);
  }

  selectedWeekFixturesText = window.URL.createObjectURL(selectedWeekFixturesData);
  selectedWeekPlayersText = window.URL.createObjectURL(selectedWeekPlayersData);

  $('.fixtures-container').append('<a class="fixture-export-link" href="">fixtures</a>').append('<a class="player-export-link" href="">players</a>');

  $('.fixture-export-link').attr('download', `${selectedWeekFixtures}.txt`).attr('href', selectedWeekFixturesText);
  $('.player-export-link').attr('download', `${selectedWeekPlayers}.txt`).attr('href', selectedWeekPlayersText);

  $('a.fixture-export-link')[0].click();
  $('a.player-export-link')[0].click();

  $('.fixture-export-link').remove();
  $('.player-export-link').remove();

}

$(document).on('click', '.position-header', togglePlayers);

$(document).on('click', '.clear-fixture', event => resetFixture(event));

$(document).on('change', '.teams-dropdown', event => {
  populateFixture(event);
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
  resetAllFixtures();
  applyTransfers(event);
  populateSelectedWeek();
  populateAllFixtures();
  disableSelectedTeams(event);
  calculatePoints();
  updatePointsTotal();
});

$(document).on('click', '.save-week', event => {
  storeWeeklyData();
  storeTableData();
});

$(document).on('click', '.delete-week', event => {
  deleteWeeklyData();
});

$(document).on('click', '#import-week', event => {
  importWeekData();
});

$(document).on('click', '#export-week', event => {
  exportWeekData();
});
