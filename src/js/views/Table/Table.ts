
// tslint:disable:no-var-requires
const LeagueTableTemplate = require('../../components/Templates/LeagueTableTemplate.hbs');
// tslint:enable:no-var-requires
let leagueData = [];
let draftedTeamsData = [];
let draftedTeamData = {};

let teamPoints = {};
let teamPointsTotal = [];

const weeklyData = Object.keys(localStorage).filter((key, i) => {
    return key.includes('drafted_team_data');
}).forEach((key, j) => {
    leagueData.push(JSON.parse(localStorage.getItem(key)));
});

for (const week of leagueData) {
    for (const team of week) {

        const points = team.points;

        teamPointsTotal.push(points);

        draftedTeamData = {
            teamID: team.draftedTeamID,
            teamName: team.draftedTeamName,
            points: team.points,
        };

        draftedTeamsData.push(draftedTeamData);
    }
}

function getSum(total, num) {
    return total + num;
}

const grandtotal = teamPointsTotal.reduce(getSum);

console.log(grandtotal);

// for (const key of Object.keys(localStorage)) {
//     if (key.includes('drafted_team_data')) {
//         const weeklyData = JSON.parse(localStorage.getItem(key));

//         // for (const data of weeklyData) {
//         //     const teamID = data.draftedTeamID;
//         //     const teamName = data.draftedTeamName;
//         //     const points = data.points++;

//         //     draftedTeamData = {
//         //         teamID: teamID,
//         //         teamName: teamName,
//         //         points: points,
//         //     };

//         //     leagueData.push(draftedTeamData);
//         // }
//     }
// }

// leagueData.sort((a, b) => parseInt(a.points, 10) - parseInt(b.points, 10)).reverse();

console.log(draftedTeamsData);

$('.table-container').append(LeagueTableTemplate(draftedTeamsData));
