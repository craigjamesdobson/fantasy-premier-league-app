import { compress as LZCompress, decompress as LZDecompress } from 'lz-string';
import swal from 'sweetalert2';
var miniSwal = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
export var draftedTeamsTableData = [];
export function storeWeeklyData() {
    var currentWeek = 'week_' + $('.week-dropdown :selected').val();
    var selectedFixtures = $('.fixtures .teams-dropdown option[value!="0"]')
        .filter(':selected')
        .toArray();
    var currentWeekPlayers = [];
    var playerArray = {};
    var currentWeekFixtures = [];
    var fixtureArray = {};
    var homeTeamName;
    var homeTeamID;
    var homeTeamScore;
    var awayTeamName;
    var awayTeamID;
    var awayTeamScore;
    for (var _i = 0, selectedFixtures_1 = selectedFixtures; _i < selectedFixtures_1.length; _i++) {
        var fixture = selectedFixtures_1[_i];
        var fixtureNumber = $(fixture)
            .closest('[id^=fixture-]')
            .attr('id');
        if ($(fixture).parents('.home-team').length) {
            homeTeamName = $(fixture).text();
            homeTeamID = $(fixture).val();
            homeTeamScore = $(fixture)
                .parent('.teams-dropdown')
                .siblings('.score')
                .val();
        }
        else {
            awayTeamName = $(fixture).text();
            awayTeamID = $(fixture).val();
            awayTeamScore = $(fixture)
                .parent('.teams-dropdown')
                .siblings('.score')
                .val();
        }
        fixtureArray[fixtureNumber] = {
            fixture: fixtureNumber,
            homeTeamName: homeTeamName,
            homeTeamID: homeTeamID,
            homeTeamScore: homeTeamScore,
            awayTeamName: awayTeamName,
            awayTeamID: awayTeamID,
            awayTeamScore: awayTeamScore
        };
    }
    $('.player-data').each(function (i, player) {
        var hasScored = $(player)
            .find('.score-select')
            .val() !== '0';
        var hasCleanSheet = $(player)
            .find('.clean-sheet-checkbox')
            .prop('checked');
        var sentOff = $(player)
            .find('.red-card-checkbox')
            .prop('checked');
        if (hasScored || hasCleanSheet || sentOff) {
            var playerName = $(player)
                .find('td:nth-child(2)')
                .text();
            var playerID = $(player).attr('data-id');
            var goalsScored = $(player)
                .find('.score-select')
                .val();
            var cleanSheet = $(player)
                .find('.clean-sheet-checkbox')
                .prop('checked')
                ? true
                : false;
            var redCard = $(player)
                .find('.red-card-checkbox')
                .prop('checked')
                ? true
                : false;
            playerArray[playerID] = {
                playerName: playerName,
                playerID: playerID,
                goalsScored: goalsScored,
                cleanSheet: cleanSheet,
                redCard: redCard
            };
        }
    });
    if (!$.isEmptyObject(fixtureArray)) {
        currentWeekFixtures.push(fixtureArray);
    }
    if (!$.isEmptyObject(playerArray)) {
        currentWeekPlayers.push(playerArray);
    }
    if (currentWeekPlayers.length > 0 || currentWeekFixtures.length > 0) {
        localStorage[currentWeek + '_players'] = LZCompress(JSON.stringify(currentWeekPlayers));
        localStorage[currentWeek + '_fixtures'] = LZCompress(JSON.stringify(currentWeekFixtures));
        miniSwal({
            position: 'top-left',
            type: 'success',
            title: $('.week-dropdown :selected')
                .text()
                .toUpperCase() + " has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        miniSwal({
            position: 'top-left',
            type: 'error',
            title: 'No data has been selected',
            showConfirmButton: false,
            timer: 1500
        });
    }
}
export function deleteWeeklyData() {
    var currentWeekText = $('.week-dropdown :selected').text();
    var currentWeek = 'week_' + $('.week-dropdown :selected').val();
    if (localStorage.getItem(currentWeek + "_fixtures") === null ||
        !localStorage.getItem(currentWeek + "_players") === null) {
        miniSwal({
            position: 'top-left',
            type: 'error',
            title: 'No data available to delete',
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        swal({
            title: 'Are you sure?',
            html: "<h6>Would you like to delete <b>" + currentWeekText.toUpperCase() + "</b><h4>",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5cb85c',
            cancelButtonColor: '#d9534f',
            confirmButtonText: 'Yes, reset it!'
        }).then(function (result) {
            if (result.value) {
                localStorage.removeItem(currentWeek + "_fixtures");
                localStorage.removeItem(currentWeek + "_players");
            }
        });
    }
}
export function populateSelectedWeek() {
    var selectedWeekFixtures = 'week_' + $('.week-dropdown').val() + '_fixtures';
    var retrievedFixtures = localStorage.getItem(selectedWeekFixtures);
    var decompressFixtures = LZDecompress(retrievedFixtures);
    if (localStorage.getItem(selectedWeekFixtures) !== null) {
        var selectedWeekFixturesData = JSON.parse(decompressFixtures);
        $.each(selectedWeekFixturesData, function (i, fixture) {
            $.each(fixture, function (j, fixturename) {
                var currentFixture = fixturename.fixture;
                $('.fixtures').each(function (k, fixtureElement) {
                    if ($(fixtureElement).attr('id') === currentFixture) {
                        $(fixtureElement)
                            .find('.home-team .teams-dropdown')
                            .val(fixturename.homeTeamID)
                            .prop('selected', true);
                        $(fixtureElement)
                            .find('.away-team .teams-dropdown')
                            .val(fixturename.awayTeamID)
                            .prop('selected', true);
                        $(fixtureElement)
                            .find('.home-team .score')
                            .val(fixturename.homeTeamScore)
                            .prop('selected', true);
                        $(fixtureElement)
                            .find('.away-team .score')
                            .val(fixturename.awayTeamScore)
                            .prop('selected', true);
                    }
                });
            });
        });
    }
}
export function storeTableData() {
    var draftedTeamsData = JSON.parse(localStorage.getItem('drafted_teams_data'));
    var _loop_1 = function (draftedTeam) {
        var draftedTeamID = draftedTeam.teamID;
        var currentWeek = parseInt($('.week-dropdown').val(), 10);
        var excludeWeek = $('#exclude-week').prop('checked');
        $('.table').each(function (i, table) {
            var TableTeamID = parseInt($(table)
                .find('.drafted-team-name')
                .attr('data-id'), 10);
            var weekPoints = parseInt($(table)
                .find('.total-points')
                .text(), 10);
            var weeklyData = {};
            var weekGoals = 0;
            var redCards = 0;
            $(table)
                .find('.player-total-data')
                .each(function (j, playerdata) {
                if ($(playerdata).attr('data-goals')) {
                    weekGoals += parseInt($(playerdata).attr('data-goals'), 10);
                }
                if ($(playerdata).hasClass('sent-off')) {
                    redCards++;
                }
            });
            if (draftedTeamID === TableTeamID) {
                weeklyData = {
                    week: currentWeek,
                    excludeWeek: excludeWeek,
                    weekPoints: weekPoints,
                    weekGoals: weekGoals,
                    weekRedCards: redCards
                };
                var weekExists = false;
                if (draftedTeam.weeklyData.length) {
                    for (var _i = 0, _a = draftedTeam.weeklyData; _i < _a.length; _i++) {
                        var weekData = _a[_i];
                        if (weekData.week === currentWeek) {
                            weekExists = true;
                            weekData.weekPoints = weekPoints;
                            weekData.excludeWeek = excludeWeek;
                            weekData.weekGoals = weekGoals;
                            weekData.weekRedCards = redCards;
                        }
                    }
                }
                if (!weekExists) {
                    draftedTeam.weeklyData.push(weeklyData);
                }
            }
        });
    };
    for (var _i = 0, draftedTeamsData_1 = draftedTeamsData; _i < draftedTeamsData_1.length; _i++) {
        var draftedTeam = draftedTeamsData_1[_i];
        _loop_1(draftedTeam);
    }
    localStorage.setItem('drafted_teams_data', JSON.stringify(draftedTeamsData));
}
function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
export function importWeekData() {
    var currentWeek = parseInt($('.week-dropdown').val(), 10);
    swal({
        html: "<form>\n      <div class=\"form-group\">\n        <label for=\"import-week-fixtures\">Input fixture data below</label>\n        <textarea class=\"form-control swal2-textarea\" id=\"import-week-fixtures\" placeholder=\"Input fixture data here...\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"import-week-players\">Input player data below</label>\n        <textarea class=\"form-control swal2-textarea\" id=\"import-week-players\" placeholder=\"Input player data here...\"></textarea>\n      </div>\n    </form>",
        customClass: 'swal-import',
        confirmButtonText: 'Import',
        showCancelButton: true
    }).then(function (result) {
        if (result.value) {
            var weekFixtureText = $('#import-week-fixtures').val();
            var weekPlayerText = $('#import-week-players').val();
            if (IsValidJSONString(weekFixtureText) && IsValidJSONString(weekPlayerText)) {
                localStorage.setItem('week_' + currentWeek + '_fixtures', LZCompress(weekFixtureText));
                localStorage.setItem('week_' + currentWeek + '_players', LZCompress(weekPlayerText));
                $('.week-dropdown').trigger('change');
            }
            else {
                swal({
                    title: 'Data input is not correct format',
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    type: 'error',
                    timer: 1000
                });
            }
        }
    });
}
//# sourceMappingURL=WeeklyData.js.map