import "../../../scss/table.scss";

import { chain, maxBy } from "lodash";

import swal from "sweetalert2";

// tslint:disable:no-var-requires
const LeagueTableTemplate = require("../../components/Templates/LeagueTableTemplate.hbs");
const LeagueTableDataTemplate = require("../../components/Templates/LeagueTableDataTemplate.hbs");
// tslint:enable:no-var-requires

const draftedTeamsData = JSON.parse(localStorage.getItem("drafted_teams_data"));

$(".table-container").html(LeagueTableTemplate);

let sortedTableData = [];

function initDraftedTeamData() {
  const currentWeek = parseInt($(".week-dropdown").val() as string, 10);
  const prevWeek = currentWeek - 1;
  let excludeWeek = false;

  for (const draftedTeam of draftedTeamsData) {
    let pointsTotal = 0;
    let goalsTotal = 0;
    let redCardTotal = 0;
    let weekPoints = 0;
    let prevWeekPos = "N/A";

    for (const weekData of draftedTeam.weeklyData) {
      if (parseInt(weekData.week, 10) <= currentWeek) {
        if (!weekData.excludeWeek) {
          pointsTotal += weekData.weekPoints;
          goalsTotal += weekData.weekGoals;
          redCardTotal += weekData.weekRedCards;
        }
      }

      if (parseInt(weekData.week, 10) === currentWeek) {
        weekPoints = weekData.weekPoints;
        excludeWeek = weekData.excludeWeek;
      }

      if (parseInt(weekData.week, 10) === prevWeek) {
        prevWeekPos = weekData.weekPosition;
      }
    }
    draftedTeam.weekWinner = false;
    draftedTeam.currentWeek = currentWeek;
    draftedTeam.prevWeekPosition = prevWeekPos;
    draftedTeam.weekPoints = weekPoints;
    draftedTeam.redCardTotal = redCardTotal;
    draftedTeam.goalsTotal = goalsTotal;
    draftedTeam.pointsTotal = pointsTotal;
    draftedTeam.excludeWeek = excludeWeek;
  }

  sortTableData();
  applyPositionData(currentWeek);
  getWeeklyWinners();

  $(".league-table-container").html(LeagueTableDataTemplate(sortedTableData));
}

function getWeeklyWinners() {
  const maxScoreObject = maxBy(sortedTableData, "weekPoints");
  const maxScore = maxScoreObject.weekPoints;

  for (const team of sortedTableData) {
    if (team.weekPoints === maxScore && maxScore > 0) {
      team.weekWinner = true;
    }
  }
}

function sortTableData() {
  sortedTableData = chain(draftedTeamsData)
    .orderBy("redCardsTotal")
    .orderBy("goalsTotal")
    .orderBy("pointsTotal")
    .value()
    .reverse();
}

function applyPositionData(currentWeek: number) {
  let weekPosition = 0;
  let tablePosition = 0;

  for (const sortedTeam of sortedTableData) {
    sortedTeam.tablePosition = ++tablePosition;

    if (sortedTeam.tablePosition < sortedTeam.prevWeekPosition) {
      sortedTeam.positionChange = "fa-chevron-up";
    } else if (sortedTeam.tablePosition > sortedTeam.prevWeekPosition) {
      sortedTeam.positionChange = "fa-chevron-down";
    } else {
      sortedTeam.positionChange = "fa-circle";
    }
    for (const sortedTeamWeek of sortedTeam.weeklyData) {
      if (sortedTeamWeek.week === currentWeek) {
        sortedTeamWeek.weekPosition = ++weekPosition;
      }
    }
  }
}

initDraftedTeamData();

$(document).on("change", ".week-dropdown", event => {
  initDraftedTeamData();
});
