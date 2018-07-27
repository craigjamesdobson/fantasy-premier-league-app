import { Player } from '../../components/Players/Player';
import { PlayerList } from './PlayerList';
export var CreatePlayerData;
(function (CreatePlayerData) {
    function createPlayerData(data) {
        var players = data.elements.map(function (player) { return new Player(player); });
        var playerList = new PlayerList(players);
        return playerList;
    }
    CreatePlayerData.createPlayerData = createPlayerData;
})(CreatePlayerData || (CreatePlayerData = {}));
//# sourceMappingURL=CreatePlayerData.js.map