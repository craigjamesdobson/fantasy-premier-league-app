import { DraftedPlayer } from '../DraftedTeams/DraftedPlayer';
// Player class
var DraftedTeam = /** @class */ (function () {
    function DraftedTeam(draftedTeam) {
        this.teamID = draftedTeam.team_id;
        this.teamName = draftedTeam.team_name;
        this.allowedTransfers = draftedTeam.allowed_transfers;
        this.teamPlayers = draftedTeam.team_players.map(function (x) { return new DraftedPlayer(x); });
    }
    return DraftedTeam;
}());
export { DraftedTeam };
//# sourceMappingURL=DraftedTeam.js.map