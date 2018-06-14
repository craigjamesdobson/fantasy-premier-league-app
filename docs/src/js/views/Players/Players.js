import '../../../scss/Playerlist.scss';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerPosition } from '../../components/Players/PlayerPosition';
/* tslint:disable-next-line:no-var-requires */
var playerTemplate = require('../../components/Templates/PlayersTemplate.hbs');
var playerContainer = $('.player-container');
var playersTemplate = $('#players-template');
GetStaticData.getstaticData().then(function (data) {
    var playerData = CreatePlayerData.createPlayerData(data);
    initPlayerData(playerData);
});
function initPlayerData(playerList) {
    var goalkeepers = playerList.getSplitPlayersOfType(PlayerPosition.Goalkeeper);
    var defenders = playerList.getSplitPlayersOfType(PlayerPosition.Defender);
    var midfielders = playerList.getSplitPlayersOfType(PlayerPosition.Midfielder);
    var forwards = playerList.getSplitPlayersOfType(PlayerPosition.Forward);
    // prettier-ignore
    var dividedPlayerData = {
        gkLeft: goalkeepers[0],
        gkRight: goalkeepers[1],
        dfLeft: defenders[0],
        dfRight: defenders[1],
        mfLeft: midfielders[0],
        mfRight: midfielders[1],
        fwLeft: forwards[0],
        fwRight: forwards[1]
    };
    playerContainer.append(playerTemplate(dividedPlayerData));
}
//# sourceMappingURL=Players.js.map