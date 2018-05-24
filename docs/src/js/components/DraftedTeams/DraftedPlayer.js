import { DraftedTransfer } from './DraftedTransfer';
var DraftedPlayer = /** @class */ (function () {
    function DraftedPlayer(draftedPlayer) {
        this.playerID = draftedPlayer.player_id;
        this.transfers = draftedPlayer.transfers.map(function (x) { return new DraftedTransfer(x); });
    }
    return DraftedPlayer;
}());
export { DraftedPlayer };
//# sourceMappingURL=DraftedPlayer.js.map