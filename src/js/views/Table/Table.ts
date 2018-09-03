import '../../../scss/table.scss';

import { orderBy } from 'lodash';

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

  let tablePosition = 0;
  let prevTablePosition = 0;

  for (const draftedTeam of draftedTeamsData) {
    let pointsTotal = 0;
    let goalsTotal = 0;
    let weekPoints = 0;

    for (const weekData of draftedTeam.weeklyData) {
      if (parseInt(weekData.week, 10) <= currentWeek) {
        pointsTotal += weekData.weekPoints;
        goalsTotal += weekData.weekGoals;
      }
      if (parseInt(weekData.week, 10) === currentWeek) {
        weekPoints = weekData.weekPoints;
      }
    }

    draftedTeam.currentWeek = currentWeek;
    draftedTeam.weekPoints = weekPoints;
    draftedTeam.goalsTotal = goalsTotal;
    draftedTeam.pointsTotal = pointsTotal;
    // draftedTeam.tablePosition = ++tablePosition;

  }

  console.log(draftedTeamsData);

  sortedTableData = orderBy(draftedTeamsData, ['pointsTotal'], ['desc']);

  for (const sortedTeam of sortedTableData) {
      sortedTeam.tablePosition = ++tablePosition;
  }

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
      top: offsetPos += 46,
    });

    $(row).animate({
      top: 46 * offsetAnimate,
    }, 1000, () => {
      $('.league-table-container').html(LeagueTableDataTemplate(sortedTableData));
    });
  });

}

$(document).on('change', '.week-dropdown', event => {
  initDraftedTeamData();
});
