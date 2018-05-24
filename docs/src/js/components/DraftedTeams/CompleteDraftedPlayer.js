import { PlayerPositionShort } from '../Players/PlayerPosition';
var CompleteDraftedPlayer = /** @class */ (function () {
    function CompleteDraftedPlayer(player, transfers) {
        this.playerId = player.id;
        this.playerName = player.name;
        this.playerPosition = PlayerPositionShort[player.playerType];
        this.playerTeamId = player.teamID;
        this.playerTeamName = player.teamName;
        this.playerTeamShort = player.teamShort;
        this.transfers = transfers;
    }
    return CompleteDraftedPlayer;
}());
export { CompleteDraftedPlayer };
//# sourceMappingURL=CompleteDraftedPlayer.js.map