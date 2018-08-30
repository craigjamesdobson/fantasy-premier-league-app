import { orderBy } from 'lodash';

// tslint:disable:no-var-requires
const LeagueTableTemplate = require('../../components/Templates/LeagueTableTemplate.hbs');
const LeagueTableDataTemplate = require('../../components/Templates/LeagueTableDataTemplate.hbs');
// tslint:enable:no-var-requires

const draftedTeamsData = JSON.parse(localStorage.getItem('drafted_teams_data'));

$('.table-container').append(LeagueTableTemplate);

updateDraftedTeamData();

function updateDraftedTeamData() {
  let sortedTableData = [];

  const currentWeek = parseInt($('.week-dropdown').val() as string, 10);

  for (const draftedTeam of draftedTeamsData) {
    let pointsTotal = 0;
    let goalsTotal = 0;
    for (const weekData of draftedTeam.weeklyData) {
      if (weekData.week <= currentWeek) {
        pointsTotal += weekData.weekPoints;
        goalsTotal += weekData.weekGoals;
      }
    }
    draftedTeam.goalsTotal = goalsTotal;
    draftedTeam.pointsTotal = pointsTotal;

    sortedTableData = orderBy(draftedTeamsData, ['pointsTotal'], ['desc']);
  }
  console.log(sortedTableData);

  $('.league-table-container').html(LeagueTableDataTemplate(sortedTableData));
}

$(document).on('change', '.week-dropdown', event => {
  updateDraftedTeamData();
});
