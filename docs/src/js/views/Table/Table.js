import '../../../scss/table.scss';
import { chain, maxBy } from 'lodash';
// tslint:disable:no-var-requires
var LeagueTableTemplate = require('../../components/Templates/LeagueTableTemplate.hbs');
var LeagueTableDataTemplate = require('../../components/Templates/LeagueTableDataTemplate.hbs');
// tslint:enable:no-var-requires
var draftedTeamsData = JSON.parse(localStorage.getItem('drafted_teams_data'));
var sortedTableData = [];
$('.table-container').append(LeagueTableTemplate);
initDraftedTeamData();
function initDraftedTeamData() {
    var currentWeek = parseInt($('.week-dropdown').val(), 10);
    var prevWeek = currentWeek - 1;
    for (var _i = 0, draftedTeamsData_1 = draftedTeamsData; _i < draftedTeamsData_1.length; _i++) {
        var draftedTeam = draftedTeamsData_1[_i];
        var pointsTotal = 0;
        var goalsTotal = 0;
        var redCardTotal = 0;
        var weekPoints = 0;
        var prevWeekPos = 'N/A';
        for (var _a = 0, _b = draftedTeam.weeklyData; _a < _b.length; _a++) {
            var weekData = _b[_a];
            if (parseInt(weekData.week, 10) <= currentWeek) {
                pointsTotal += weekData.weekPoints;
                goalsTotal += weekData.weekGoals;
                redCardTotal += weekData.weekRedCards;
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
        draftedTeam.redCardTotal = redCardTotal;
        draftedTeam.goalsTotal = goalsTotal;
        draftedTeam.pointsTotal = pointsTotal;
    }
    sortTableData();
    applyPositionData(currentWeek);
    getWeeklyWinners();
    $('.league-table-container').html(LeagueTableDataTemplate(sortedTableData));
}
function getWeeklyWinners() {
    var maxScoreObject = maxBy(sortedTableData, 'weekPoints');
    var maxScore = maxScoreObject.weekPoints;
    for (var _i = 0, sortedTableData_1 = sortedTableData; _i < sortedTableData_1.length; _i++) {
        var team = sortedTableData_1[_i];
        if (team.weekPoints === maxScore && maxScore > 0) {
            team.weekWinner = true;
        }
    }
}
function sortTableData() {
    sortedTableData = chain(draftedTeamsData)
        .orderBy('redCardsTotal')
        .orderBy('goalsTotal')
        .orderBy('pointsTotal')
        .value()
        .reverse();
}
function applyPositionData(currentWeek) {
    var weekPosition = 0;
    var tablePosition = 0;
    for (var _i = 0, sortedTableData_2 = sortedTableData; _i < sortedTableData_2.length; _i++) {
        var sortedTeam = sortedTableData_2[_i];
        sortedTeam.tablePosition = ++tablePosition;
        if (sortedTeam.tablePosition < sortedTeam.prevWeekPosition) {
            sortedTeam.positionChange = 'fa-chevron-up';
        }
        else if (sortedTeam.tablePosition > sortedTeam.prevWeekPosition) {
            sortedTeam.positionChange = 'fa-chevron-down';
        }
        else {
            sortedTeam.positionChange = 'fa-circle';
        }
        for (var _a = 0, _b = sortedTeam.weeklyData; _a < _b.length; _a++) {
            var sortedTeamWeek = _b[_a];
            if (sortedTeamWeek.week === currentWeek) {
                sortedTeamWeek.weekPosition = ++weekPosition;
            }
        }
    }
}
$(document).on('change', '.week-dropdown', function (event) {
    initDraftedTeamData();
});
//# sourceMappingURL=Table.js.map