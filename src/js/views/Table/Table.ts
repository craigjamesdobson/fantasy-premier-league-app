
// tslint:disable:no-var-requires
const LeagueTableTemplate = require('../../components/Templates/LeagueTableTemplate.hbs');
// tslint:enable:no-var-requires

let data = JSON.parse(localStorage.getItem('week_1_drafted_team_data'));

data.sort((a, b) => parseFloat(a.points) - parseFloat(b.points)).reverse();

console.log(data);

$('.table-container').append(LeagueTableTemplate(data));
