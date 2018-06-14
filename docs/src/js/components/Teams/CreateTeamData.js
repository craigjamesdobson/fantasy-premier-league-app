import { Team } from './Team';
import { TeamList } from './TeamList';
export var CreateTeamData;
(function (CreateTeamData) {
    function createTeamData(data) {
        var teams = data.teams.map(function (team) { return new Team(team); });
        var teamList = new TeamList(teams);
        return teamList;
    }
    CreateTeamData.createTeamData = createTeamData;
})(CreateTeamData || (CreateTeamData = {}));
//# sourceMappingURL=CreateTeamData.js.map