import '../../../scss/table.scss';

import { chain, maxBy, orderBy } from 'lodash';

// tslint:disable:no-var-requires
const LeagueTableTemplate = require('../../components/Templates/LeagueTableTemplate.hbs');
const LeagueTableDataTemplate = require('../../components/Templates/LeagueTableDataTemplate.hbs');
// tslint:enable:no-var-requires

const draftedTeamsData = JSON.parse(localStorage.getItem('drafted_teams_data'));

let sortedTableData = [];

$('.table-container').append(LeagueTableTemplate);

initDraftedTeamData();

function initDraftedTeamData() {
  const currentWeek = parseInt($('.week-dropdown').val() as string, 10);
  const prevWeek = currentWeek - 1;

  let tablePosition = 0;

  for (const draftedTeam of draftedTeamsData) {
    let pointsTotal = 0;
    let goalsTotal = 0;
    let weekPoints = 0;
    let prevWeekPos = 'N/A';

    for (const weekData of draftedTeam.weeklyData) {
      if (parseInt(weekData.week, 10) <= currentWeek) {
        pointsTotal += weekData.weekPoints;
        goalsTotal += weekData.weekGoals;
      }

      if (parseInt(weekData.week, 10) === currentWeek) {
        weekPoints = weekData.weekPoints;
      }

      if (parseInt(weekData.week, 10) === prevWeek) {
        prevWeekPos = weekData.weekPosition;
      }
    }
    draftedTeam.weekWinner = false;
    draftedTeam.currentWeek = currentWeek;
    draftedTeam.prevWeekPosition = prevWeekPos;
    draftedTeam.weekPoints = weekPoints;
    draftedTeam.goalsTotal = goalsTotal;
    draftedTeam.pointsTotal = pointsTotal;
  }

  console.log(draftedTeamsData);

  sortedTableData = chain(draftedTeamsData)
    .orderBy('goalsTotal')
    .orderBy('pointsTotal')
    .value()
    .reverse();

  let weekPosition = 0;

  for (const sortedTeam of sortedTableData) {
    sortedTeam.tablePosition = ++tablePosition;

    if (sortedTeam.tablePosition < sortedTeam.prevWeekPosition) {
      sortedTeam.positionChange = 'fa-chevron-up';
    } else if (sortedTeam.tablePosition > sortedTeam.prevWeekPosition) {
      sortedTeam.positionChange = 'fa-chevron-down';
    } else {
      sortedTeam.positionChange = 'fa-circle';
    }
    for (const sortedTeamWeek of sortedTeam.weeklyData) {
      if (sortedTeamWeek.week === currentWeek) {
        sortedTeamWeek.weekPosition = ++weekPosition;
      }
    }
  }

  const weeklyWinners = maxBy(sortedTableData, 'weekPoints');
  weeklyWinners.weekWinner = true;

  console.log(weeklyWinners);

  $('.league-table-container').html(LeagueTableDataTemplate(sortedTableData));
}

function sortTableData() {
  $('.league-table-container').html(LeagueTableDataTemplate(sortedTableData));

  const teamRow = $('.team-row');

  let offsetPos = 0;

  teamRow.each((i, row) => {
    for (const teamData of draftedTeamsData) {
      if (parseInt($(row).attr('data-team-id'), 10) === teamData.teamID) {
        // $(row).attr('data-table-position', teamData.tablePosition);
      }
    }

    const offsetAnimate = parseInt($(row).attr('data-table-position'), 10);
    $(row).css({
      position: 'absolute',
      display: 'flex',
      top: (offsetPos += 46)
    });

    $(row).animate(
      {
        top: 46 * offsetAnimate
      },
      1000,
      () => {
        $('.league-table-container').html(
          LeagueTableDataTemplate(sortedTableData)
        );
      }
    );
  });
}

$(document).on('change', '.week-dropdown', event => {
  initDraftedTeamData();
});
