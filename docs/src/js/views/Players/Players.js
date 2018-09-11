import '../../../scss/Playerlist.scss';
import '../../../img/badges-sprite.png';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerPosition } from '../../components/Players/PlayerPosition';
import { debounce } from 'lodash';
/* tslint:disable-next-line:no-var-requires */
var playerTemplate = require('../../components/Templates/PlayersTemplate.hbs');
var playerContainer = $('.player-container');
var playerData;
var dividedPlayerData;
GetStaticData.getstaticData().then(function (data) {
    playerData = CreatePlayerData.createPlayerData(data);
    initPlayerData(playerData);
});
function initPlayerData(playerList, filterString) {
    var filter = filterString;
    var players = playerList.players.filter(function (p) {
        return p.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .indexOf(filter ? filter : '') > -1;
    });
    var goalkeepers = playerList.getFilteredPlayersOfType(PlayerPosition.Goalkeeper, filter ? filter : '');
    var defenders = playerList.getFilteredPlayersOfType(PlayerPosition.Defender, filter ? filter : '');
    var midfielders = playerList.getFilteredPlayersOfType(PlayerPosition.Midfielder, filter ? filter : '');
    var forwards = playerList.getFilteredPlayersOfType(PlayerPosition.Forward, filter ? filter : '');
    // prettier-ignore
    dividedPlayerData = {
        players: players,
        gkLeft: goalkeepers[0],
        gkRight: goalkeepers[1],
        dfLeft: defenders[0],
        dfRight: defenders[1],
        mfLeft: midfielders[0],
        mfRight: midfielders[1],
        fwLeft: forwards[0],
        fwRight: forwards[1]
    };
    playerContainer.empty().append(playerTemplate(dividedPlayerData));
    $('.loading').hide();
}
$('#searchInput').on('paste, keyup', debounce(function (event) {
    var $this = $(event.currentTarget);
    var searchtext = $this.val();
    initPlayerData(playerData, searchtext.toLowerCase());
}, 500));
//# sourceMappingURL=Players.js.map