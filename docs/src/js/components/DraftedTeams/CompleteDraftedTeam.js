import { CompleteDraftedPlayer } from './CompleteDraftedPlayer';
var CompleteDraftedTeam = /** @class */ (function () {
    function CompleteDraftedTeam(draftedTeam, players) {
        this.teamID = draftedTeam.teamID;
        this.teamName = draftedTeam.teamName;
        this.isInvalidTeam = false;
        this.allowedTransfers = draftedTeam.allowedTransfers;
        this.teamValueAllowed = this.allowedTransfers ? 80 : 90;
        this.teamPlayers = players.map(function (x) { return new CompleteDraftedPlayer(x.player, x.transfers); });
        var teamCostTotal = this.teamPlayers.reduce(function (accumulator, current) { return accumulator += parseInt(current.playerPrice, 10); }, 0);
        if (teamCostTotal > this.teamValueAllowed) {
            this.isInvalidTeam = true;
        }
    }
    return CompleteDraftedTeam;
}());
export { CompleteDraftedTeam };
//# sourceMappingURL=CompleteDraftedTeam.js.map