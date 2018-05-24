import { CompleteDraftedPlayer } from './CompleteDraftedPlayer';
var CompleteDraftedTeam = /** @class */ (function () {
    function CompleteDraftedTeam(draftedTeam, players) {
        this.teamID = draftedTeam.teamID;
        this.teamName = draftedTeam.teamName;
        this.allowedTransfers = draftedTeam.allowedTransfers;
        this.teamPlayers = players.map(function (x) { return new CompleteDraftedPlayer(x.player, x.transfers); });
    }
    return CompleteDraftedTeam;
}());
export { CompleteDraftedTeam };
//# sourceMappingURL=CompleteDraftedTeam.js.map