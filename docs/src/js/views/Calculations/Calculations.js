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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var _this = this;
import '../../../scss/calculations.scss';
import '../../../img/clean_sheet.png';
import '../../../img/red_card.png';
import '../../../img/football.png';
import '../../components/Database/WeeklyData';
import { deleteWeeklyData, importWeekData, populateSelectedWeek, storeTableData, storeWeeklyData } from '../../components/Database/WeeklyData';
import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { decompress as LZDecompress } from 'lz-string';
import { PlayerPositionShort } from '../../components/Players/PlayerPosition';
import swal from 'sweetalert2';
// tslint:disable:no-var-requires
var FixturesTemplate = require('../../components/Templates/FixturesTemplate.hbs');
var DraftedTeamTemplate = require('../../components/Templates/DraftedTeamsTemplate.hbs');
var PopulateFixturesTemplate = require('../../components/Templates/PopulateFixturesTemplate.hbs');
// tslint:enable:no-var-requires
var teamsContainer = $('.teams-container');
var fixturesContainer = $('.fixtures-container');
var playerData;
var teamData;
export var draftedTeams = [];
GetStaticData.getstaticData().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerData = CreatePlayerData.createPlayerData(data);
                return [4 /*yield*/, initDraftedTeamData(playerData)];
            case 1:
                _a.sent();
                teamData = CreateTeamData.createTeamData(data);
                initTeamData(teamData);
                $('.loading').hide();
                $('.week-dropdown').trigger('change');
                return [2 /*return*/];
        }
    });
}); });
function initDraftedTeamData(playerList) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var draftedTeamList;
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
                                if (localStorage.getItem('drafted_teams_data') === null) {
                                    createDraftedTeamData();
                                }
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function createDraftedTeamData() {
    var draftedTeamsData = [];
    var draftedTeamData = {};
    for (var _i = 0, draftedTeams_1 = draftedTeams; _i < draftedTeams_1.length; _i++) {
        var draftedTeam = draftedTeams_1[_i];
        (draftedTeamData = {
            teamID: draftedTeam.teamID,
            teamName: draftedTeam.teamName,
            weeklyData: []
        }),
            draftedTeamsData.push(draftedTeamData);
    }
    localStorage.setItem('drafted_teams_data', JSON.stringify(draftedTeamsData));
}
function initTeamData(teamList) {
    fixturesContainer.append(FixturesTemplate(teamList));
}
function togglePlayers(event) {
    var positionHeader = $(event.currentTarget);
    var selectedFixture = "#" + positionHeader.closest('.fixtures').attr('id');
    var playerTableClass = "." + positionHeader.parents('div').attr('class');
    var positionTableHeader = positionHeader.next('.table-heading');
    var positionHeaderID = positionHeader.attr('data-position');
    var players = $(selectedFixture)
        .find(playerTableClass)
        .find('.player-data');
    players.filter("[data-position=\"" + positionHeaderID + "\"]").toggleClass('active');
    positionTableHeader.toggleClass('active');
    positionHeader.toggleClass('active');
}
function disableSelectedTeams(event) {
    var selectedOptions = $('.team-option:selected')
        .map(function (i, selectedOption) {
        return $(selectedOption).val();
    })
        .toArray();
    $('.team-option').removeAttr('disabled');
    var _loop_1 = function (option) {
        $('.team-option').each(function (i, teamOption) {
            var optionID = $(teamOption).attr('data-id');
            if (optionID === option.toString()) {
                $(teamOption).attr('disabled', 'disabled');
            }
        });
    };
    for (var _i = 0, selectedOptions_1 = selectedOptions; _i < selectedOptions_1.length; _i++) {
        var option = selectedOptions_1[_i];
        _loop_1(option);
    }
}
function populateFixture(event) {
    var fixture = $(event.currentTarget);
    var selectedTeam = fixture.find(':selected').val();
    var playerTableClass = "." + fixture.parent().attr('class') + "-players";
    var selectedFixture = "#" + fixture.closest('.fixtures').attr('id');
    var filteredPlayers = playerData.players.filter(function (p) { return p.teamID === parseInt(selectedTeam, 10); });
    var filteredPositions = {
        filteredPositions: [
            {
                id: 1,
                name: 'Goalkeeper',
                nameShort: 'GK',
                players: filteredPlayers.filter(function (g) { return g.playerType === 1; })
            },
            {
                id: 2,
                name: 'Defender',
                nameShort: 'DEF',
                players: filteredPlayers.filter(function (g) { return g.playerType === 2; })
            },
            {
                id: 3,
                name: 'Midfielder',
                nameShort: 'MID',
                players: filteredPlayers.filter(function (g) { return g.playerType === 3; })
            },
            {
                id: 4,
                name: 'Forward',
                nameShort: 'FWD',
                players: filteredPlayers.filter(function (g) { return g.playerType === 4; })
            }
        ]
    };
    $(selectedFixture)
        .find(playerTableClass)
        .html(PopulateFixturesTemplate(filteredPositions));
    $('.player-data').each(function (i, player) {
        if ($(player).attr('data-position') === '3' ||
            $(player).attr('data-position') === '4') {
            $(player)
                .find('.clean-sheet-checkbox')
                .attr('disabled', 'disabled');
        }
    });
}
export function populateAllFixtures() {
    var selectedWeekPlayers = 'week_' + $('.week-dropdown').val() + '_players';
    var retrievedPlayers = localStorage.getItem(selectedWeekPlayers);
    $('.teams-dropdown').each(function (i, teams) {
        var playerTableClass = "." + $(teams)
            .parent()
            .attr('class') + "-players";
        var selectedFixture = "#" + $(teams)
            .closest('.fixtures')
            .attr('id');
        var selectedTeam = $(teams)
            .find(':selected')
            .val();
        var filteredPlayers = playerData.players.filter(function (p) { return p.teamID === parseInt(selectedTeam, 10); });
        var filteredPositions = {
            filteredPositions: [
                {
                    id: 1,
                    name: 'Goalkeeper',
                    nameShort: 'GK',
                    players: filteredPlayers.filter(function (g) { return g.playerType === 1; })
                },
                {
                    id: 2,
                    name: 'Defender',
                    nameShort: 'DEF',
                    players: filteredPlayers.filter(function (g) { return g.playerType === 2; })
                },
                {
                    id: 3,
                    name: 'Midfielder',
                    nameShort: 'MID',
                    players: filteredPlayers.filter(function (g) { return g.playerType === 3; })
                },
                {
                    id: 4,
                    name: 'Forward',
                    nameShort: 'FWD',
                    players: filteredPlayers.filter(function (g) { return g.playerType === 4; })
                }
            ]
        };
        if ($(teams)
            .find(':selected')
            .val() !== '0') {
            $(selectedFixture)
                .find(playerTableClass)
                .html(PopulateFixturesTemplate(filteredPositions));
            $('.player-data').each(function (ind, player) {
                if ($(player).attr('data-position') === '3' ||
                    $(player).attr('data-position') === '4') {
                    $(player)
                        .find('.clean-sheet-checkbox')
                        .attr('disabled', 'disabled');
                }
            });
        }
    });
    if (localStorage.getItem(selectedWeekPlayers) !== null) {
        var decompressPlayers = LZDecompress(retrievedPlayers);
        var selectedWeekPlayersData = JSON.parse(decompressPlayers);
        $.each(selectedWeekPlayersData, function (i, playerList) {
            $.each(playerList, function (j, player) {
                $('.player-data').each(function (k, dataPlayer) {
                    if ($(dataPlayer).attr('data-id') === playerList[j].playerID) {
                        $(dataPlayer)
                            .find('.red-card-checkbox')
                            .prop('checked', playerList[j].redCard);
                        $(dataPlayer)
                            .find('.clean-sheet-checkbox')
                            .prop('checked', playerList[j].cleanSheet);
                        $(dataPlayer)
                            .find('.score-select')
                            .val(playerList[j].goalsScored);
                    }
                });
            });
        });
    }
}
function calculatePoints() {
    $('.player-data').each(function (i, player) {
        var goalsTotal = 0;
        var cleanSheetTotal = 0;
        var redCardTotal = 0;
        var pointsTotal = 0;
        var goalsScored = parseInt($(player)
            .find('.score-select')
            .val(), 10);
        var positionID = $(player).attr('data-position');
        var cleanSheet = $(player)
            .find('.clean-sheet-checkbox')
            .is(':checked');
        var sentOff = $(player)
            .find('.red-card-checkbox')
            .is(':checked');
        var multiplier;
        switch (positionID) {
            case '1':
                multiplier = 10;
                break;
            case '2':
                multiplier = 7;
                break;
            case '3':
                multiplier = 5;
                break;
            case '4':
                multiplier = 3;
                break;
        }
        if (cleanSheet) {
            if (positionID === '1') {
                cleanSheetTotal = 5;
            }
            else if (positionID === '2') {
                cleanSheetTotal = 2;
            }
        }
        if (sentOff) {
            redCardTotal = 10;
            $(player).attr('data-sentoff', 'true');
        }
        else {
            $(player).removeAttr('data-sentoff');
        }
        if (goalsScored > 0) {
            $(player)
                .attr('data-goals', goalsScored)
                .find('.score-select')
                .addClass('active');
        }
        else {
            $(player)
                .removeAttr('data-goals')
                .find('.score-select')
                .removeClass('active');
        }
        goalsTotal = goalsScored * multiplier;
        if (goalsScored === 2) {
            goalsTotal = goalsTotal + 5;
        }
        else if (goalsScored >= 3) {
            goalsTotal = goalsTotal + 10;
        }
        pointsTotal = goalsTotal + cleanSheetTotal - redCardTotal;
        pointsTotal !== 0
            ? $(player).attr('data-points', pointsTotal)
            : $(player).removeAttr('data-points');
    });
}
function updatePointsTotal() {
    $('.player-total-data').each(function (i, player) {
        var playerID = $(player)
            .find('.id')
            .text();
        var matchingPlayerID = $('.player-data').filter(function (j, matchingPlayer) {
            return $(matchingPlayer).attr('data-id') === playerID;
        });
        var matchingPlayerPoints = matchingPlayerID.attr('data-points');
        var matchingPlayerGoals = matchingPlayerID.attr('data-goals');
        $(player)
            .find('.points')
            .text('0');
        $(player)
            .find('.points')
            .text(matchingPlayerPoints);
        if ($(matchingPlayerID).attr('data-sentoff') === 'true') {
            $(player).addClass('sent-off');
        }
        else {
            $(player).removeClass('sent-off');
        }
        if ($(matchingPlayerID).attr('data-goals')) {
            $(player).attr('data-goals', matchingPlayerGoals);
        }
        else {
            $(player).removeAttr('data-goals');
        }
    });
    $('.teams-container table').each(function (i, teams) {
        var total = 0;
        $(teams)
            .find('.points')
            .each(function (k, player) {
            total += parseInt($(player).text(), 10);
        });
        $(teams)
            .find('.total-points')
            .text(total);
    });
}
function resetFixture(event) {
    var $this = $(event.currentTarget);
    var fixtureText = $this
        .closest('.fixtures')
        .find('h3')
        .text();
    var selectedFixture = "#" + $this.closest('.fixtures').attr('id');
    swal({
        title: 'Are you sure?',
        html: "<h6>Would you like to reset <b>" + fixtureText.toUpperCase() + "</b><h4>",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5cb85c',
        cancelButtonColor: '#d9534f',
        confirmButtonText: 'Yes, reset it!'
    }).then(function (result) {
        if (result.value) {
            $(selectedFixture)
                .find('select')
                .val(0);
            $(selectedFixture)
                .find('.home-team-players, .away-team-players')
                .empty();
            calculatePoints();
            updatePointsTotal();
            disableSelectedTeams(event);
        }
    });
}
function resetAllFixtures() {
    $('.fixtures')
        .find('select')
        .val(0);
    $('.fixtures')
        .find('.home-team-players, .away-team-players')
        .empty();
}
function applyTransfers(event) {
    var weekID = +$(event.currentTarget).val();
    $('.player-total-data').each(function (i, player) {
        var transferData = $(player).attr('data-transfer');
        var cachedPlayerID = $(player)
            .find('.id')
            .attr('data-original-id');
        var cachedPlayerPosition = $(player)
            .find('.position')
            .attr('data-original-position');
        var cachedPlayerTeam = $(player)
            .find('.club')
            .attr('data-original-team');
        var cachedPlayerName = $(player)
            .find('.player')
            .attr('data-original-name');
        var transferSet = false;
        if (transferData !== undefined) {
            $(player).removeClass('transfered current-week-transfer');
            $(player)
                .find('.id')
                .text(cachedPlayerID);
            $(player)
                .find('.position')
                .text(cachedPlayerPosition);
            $(player)
                .find('.club')
                .text(cachedPlayerTeam);
            $(player)
                .find('.player')
                .text(cachedPlayerName);
            var transfers = transferData.split(',');
            $(transfers).each(function (j, transfer) {
                var transferSplit = transfer.split('|');
                var transferWeek = parseInt(transferSplit[0], 10);
                var transferID = transferSplit[1];
                if (transferWeek > weekID) {
                    transferSet = true;
                }
                else {
                    transferSet = false;
                }
                if (transferSet === true) {
                    return;
                }
                for (var _i = 0, _a = playerData.players; _i < _a.length; _i++) {
                    var playerdata = _a[_i];
                    if (playerdata.id === parseInt(transferID, 10)) {
                        if (weekID >= transferWeek) {
                            if (weekID === transferWeek) {
                                $(player).addClass('current-week-transfer');
                            }
                            $(player).addClass('transfered');
                            $(player)
                                .find('.id')
                                .text(playerdata.id);
                            $(player)
                                .find('.position')
                                .text(PlayerPositionShort[playerdata.playerType]);
                            $(player)
                                .find('.club')
                                .text(playerdata.teamShort);
                            $(player)
                                .find('.player')
                                .text(playerdata.name);
                            transferSet = true;
                            return;
                        }
                    }
                }
            });
        }
    });
}
function exportWeekData() {
    var selectedWeekFixturesText = null;
    var selectedWeekPlayersText = null;
    var selectedWeekPlayers = 'week_' + $('.week-dropdown').val() + '_players';
    var selectedWeekFixtures = 'week_' + $('.week-dropdown').val() + '_fixtures';
    if (localStorage.getItem(selectedWeekPlayers) === null && localStorage.getItem(selectedWeekPlayers) === null) {
        swal({
            title: 'No week data to export',
            type: 'error',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1500,
        });
        return;
    }
    var selectedWeekFixtureString = JSON.stringify(LZDecompress(localStorage.getItem(selectedWeekFixtures)));
    var selectedWeekPlayerString = JSON.stringify(LZDecompress(localStorage.getItem(selectedWeekPlayers)));
    var formattedFixtureString = selectedWeekFixtureString.replace(/^"|"$|\\/g, '');
    var formattedPlayerString = selectedWeekPlayerString.replace(/^"|"$|\\/g, '');
    var selectedWeekFixturesData = new Blob([formattedFixtureString], { type: 'text/plain' });
    var selectedWeekPlayersData = new Blob([formattedPlayerString], { type: 'text/plain' });
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (selectedWeekFixturesText !== null || selectedWeekPlayersText !== null) {
        window.URL.revokeObjectURL(selectedWeekFixturesText);
        window.URL.revokeObjectURL(selectedWeekPlayersText);
    }
    selectedWeekFixturesText = window.URL.createObjectURL(selectedWeekFixturesData);
    selectedWeekPlayersText = window.URL.createObjectURL(selectedWeekPlayersData);
    $('.fixtures-container').append('<a class="fixture-export-link" href="">fixtures</a>').append('<a class="player-export-link" href="">players</a>');
    $('.fixture-export-link').attr('download', selectedWeekFixtures + ".txt").attr('href', selectedWeekFixturesText);
    $('.player-export-link').attr('download', selectedWeekPlayers + ".txt").attr('href', selectedWeekPlayersText);
    $('a.fixture-export-link')[0].click();
    $('a.player-export-link')[0].click();
    $('.fixture-export-link').remove();
    $('.player-export-link').remove();
}
$(document).on('click', '.position-header', togglePlayers);
$(document).on('click', '.clear-fixture', function (event) { return resetFixture(event); });
$(document).on('change', '.teams-dropdown', function (event) {
    populateFixture(event);
    disableSelectedTeams(event);
    calculatePoints();
    updatePointsTotal();
});
$(document).on('change', '.score-select, .clean-sheet-checkbox, .red-card-checkbox', function (event) {
    calculatePoints();
    updatePointsTotal();
});
$(document).on('change', '.week-dropdown', function (event) {
    resetAllFixtures();
    applyTransfers(event);
    populateSelectedWeek();
    populateAllFixtures();
    disableSelectedTeams(event);
    calculatePoints();
    updatePointsTotal();
});
$(document).on('click', '.save-week', function (event) {
    storeWeeklyData();
    storeTableData();
});
$(document).on('click', '.delete-week', function (event) {
    deleteWeeklyData();
});
$(document).on('click', '#import-week', function (event) {
    importWeekData();
});
$(document).on('click', '#export-week', function (event) {
    exportWeekData();
});
//# sourceMappingURL=Calculations.js.map