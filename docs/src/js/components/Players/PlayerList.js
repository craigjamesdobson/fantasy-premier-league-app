var PlayerList = /** @class */ (function () {
    function PlayerList(players) {
        this.players = players;
    }
    PlayerList.prototype.getPlayersOfType = function (position) {
        return this.players.filter(function (p) { return p.playerType === position; });
    };
    PlayerList.prototype.getSplitPlayersOfType = function (position) {
        var players = this.getPlayersOfType(position);
        var divisor = Math.floor(players.length / 2);
        return [players.slice(0, divisor), players.slice(divisor)];
    };
    return PlayerList;
}());
export { PlayerList };
//# sourceMappingURL=PlayerList.js.map