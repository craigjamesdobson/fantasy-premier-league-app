var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import '../../../scss/calculations.scss';
import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
var iconCleanSheet = require('../../../img/clean_sheet.png');
var iconRedCard = require('../../../img/red_card.png');
var iconGoal = require('../../../img/football.png');
/* tslint:disable-next-line:no-var-requires */
var FixturesTemplate = require('../../components/Templates/FixturesTemplate.hbs');
// tslint:disable-next-line:no-var-requires
var DraftedTeamTemplate = require('../../components/Templates/DraftedTeamsTemplate.hbs');
var teamsContainer = $('.teams-container');
var fixturesContainer = $('.fixtures-container');
var playerData;
var teamData;
GetStaticData.getstaticData().then(function (data) {
    playerData = CreatePlayerData.createPlayerData(data);
    initDraftedTeamData(playerData);
    teamData = CreateTeamData.createTeamData(data);
    initTeamData(teamData);
});
function initDraftedTeamData(playerList) {
    return __awaiter(this, void 0, void 0, function () {
        var draftedTeamList, draftedTeams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, DraftedTeamData.getDraftedTeamData()];
                case 1:
                    draftedTeamList = _a.sent();
                    draftedTeams = draftedTeamList.map(function (draftedTeam) {
                        var players = draftedTeam.teamPlayers.map(function (player) { return ({
                            player: playerList.players.filter(function (p) { return p.id === player.playerID; })[0],
                            transfers: player.transfers
                        }); });
                        return new CompleteDraftedTeam(draftedTeam, players);
                    });
                    teamsContainer.append(DraftedTeamTemplate(draftedTeams));
                    return [2 /*return*/];
            }
        });
    });
}
function initTeamData(teamList) {
    // tslint:disable-next-line:no-console
    console.log(teamList);
    fixturesContainer.append(FixturesTemplate(teamList));
}
function populateFixtures(event) {
    var selectedTeam = $(this)
        .find(':selected')
        .val();
    var playerTableClass = "." + $(this)
        .parent()
        .attr('class') + "-players";
    var selectedFixture = "#" + $(this)
        .closest('.fixtures')
        .attr('id');
    var playerTable = selectedFixture +
        ' .' +
        $(this)
            .parent()
            .attr('class') +
        '-players' +
        ' table';
    for (var _i = 0, _a = playerData.players; _i < _a.length; _i++) {
        var player = _a[_i];
        if (player.teamID === selectedTeam) {
            console.log(player.name);
        }
    }
}
$(document).on('change', '.teams-dropdown', populateFixtures);
//# sourceMappingURL=Calculations.js.map