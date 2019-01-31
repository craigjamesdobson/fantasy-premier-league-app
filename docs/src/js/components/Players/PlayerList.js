var PlayerList = /** @class */ (function () {
    function PlayerList(players) {
        this.players = players;
    }
    PlayerList.prototype.getFilteredPlayersOfType = function (position, filter) {
        var players = this.getPlayersOfType(position).filter(function (p) {
            return p.name
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .indexOf(filter) > -1 && p.playerType === position;
        });
        // const filteredPlayers = players.filter(p => p.name.toLowerCase().indexOf(filter) > -1 && p.playerType === position);
        var divisor = Math.ceil(players.length / 2);
        return [players.slice(0, divisor), players.slice(divisor)];
    };
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