import { compress as LZCompress, decompress as LZDecompress } from 'lz-string';

import swal from 'sweetalert2';

const miniSwal = (swal as any).mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

export let draftedTeamsTableData: any = [];

export function storeWeeklyData() {
  const currentWeek = 'week_' + $('.week-dropdown :selected').val();
  const selectedFixtures = $('.fixtures .teams-dropdown option[value!="0"]')
    .filter(':selected')
    .toArray();

  const currentWeekPlayers: any = [];
  const playerArray: any = {};

  const currentWeekFixtures: any = [];
  const fixtureArray: any = {};

  let homeTeamName: string;
  let homeTeamID: number;
  let homeTeamScore: number;

  let awayTeamName: string;
  let awayTeamID: number;
  let awayTeamScore: number;

  for (const fixture of selectedFixtures) {
    const fixtureNumber = $(fixture)
      .closest('[id^=fixture-]')
      .attr('id');

    if ($(fixture).parents('.home-team').length) {
      homeTeamName = $(fixture).text();
      homeTeamID = $(fixture).val() as number;
      homeTeamScore = $(fixture)
        .parent('.teams-dropdown')
        .siblings('.score')
        .val() as number;
    } else {
      awayTeamName = $(fixture).text();
      awayTeamID = $(fixture).val() as number;
      awayTeamScore = $(fixture)
        .parent('.teams-dropdown')
        .siblings('.score')
        .val() as number;
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

  $('.player-data').each((i, player) => {
    const hasScored =
      $(player)
        .find('.score-select')
        .val() !== '0';
    const hasCleanSheet = $(player)
      .find('.clean-sheet-checkbox')
      .prop('checked');
    const sentOff = $(player)
      .find('.red-card-checkbox')
      .prop('checked');

    if (hasScored || hasCleanSheet || sentOff) {
      const playerName = $(player)
        .find('td:nth-child(2)')
        .text();
      const playerID = $(player).attr('data-id');
      const goalsScored = $(player)
        .find('.score-select')
        .val();
      const cleanSheet = $(player)
        .find('.clean-sheet-checkbox')
        .prop('checked')
        ? true
        : false;
      const redCard = $(player)
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
    localStorage[currentWeek + '_players'] = LZCompress(
      JSON.stringify(currentWeekPlayers)
    );
    localStorage[currentWeek + '_fixtures'] = LZCompress(
      JSON.stringify(currentWeekFixtures)
    );

    miniSwal({
      position: 'top-left',
      type: 'success',
      title: `${$('.week-dropdown :selected')
        .text()
        .toUpperCase()} has been saved`,
      showConfirmButton: false,
      timer: 1500
    });
  } else {
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
  const currentWeekText = $('.week-dropdown :selected').text();
  const currentWeek = 'week_' + $('.week-dropdown :selected').val();

  if (
    localStorage.getItem(`${currentWeek}_fixtures`) === null ||
    !localStorage.getItem(`${currentWeek}_players`) === null
  ) {
    miniSwal({
      position: 'top-left',
      type: 'error',
      title: 'No data available to delete',
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    swal({
      title: 'Are you sure?',
      html: `<h6>Would you like to delete <b>${currentWeekText.toUpperCase()}</b><h4>`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5cb85c',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Yes, reset it!'
    }).then((result: any) => {
      if (result.value) {
        localStorage.removeItem(`${currentWeek}_fixtures`);
        localStorage.removeItem(`${currentWeek}_players`);
      }
    });
  }
}

export function populateSelectedWeek() {
  const selectedWeekFixtures =
    'week_' + $('.week-dropdown').val() + '_fixtures';

  const retrievedFixtures = localStorage.getItem(selectedWeekFixtures);
  const decompressFixtures = LZDecompress(retrievedFixtures);

  if (localStorage.getItem(selectedWeekFixtures) !== null) {
    const selectedWeekFixturesData = JSON.parse(decompressFixtures);

    $.each(selectedWeekFixturesData, (i, fixture) => {
      $.each(fixture, (j, fixturename) => {
        const currentFixture = fixturename.fixture;

        $('.fixtures').each((k, fixtureElement) => {
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
  const draftedTeamsData = JSON.parse(
    localStorage.getItem('drafted_teams_data')
  );

  for (const draftedTeam of draftedTeamsData) {
    const draftedTeamID = draftedTeam.teamID;

    const currentWeek = parseInt($('.week-dropdown').val() as string, 10);

    $('.table').each((i, table) => {
      const TableTeamID = parseInt(
        $(table)
          .find('.drafted-team-name')
          .attr('data-id'),
        10
      );
      const weekPoints = parseInt(
        $(table)
          .find('.total-points')
          .text(),
        10
      );
      let weeklyData = {};
      let weekGoals = 0;
      let redCards  = 0;

      $(table)
        .find('.player-total-data')
        .each((j, playerdata) => {
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
          weekPoints: weekPoints,
          weekGoals: weekGoals,
          weekRedCards: redCards
        };

        let weekExists = false;

        if (draftedTeam.weeklyData.length) {
          for (const weekData of draftedTeam.weeklyData) {
            if (weekData.week === currentWeek) {
              weekExists = true;
              weekData.weekPoints = weekPoints;
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
  }
  localStorage.setItem('drafted_teams_data', JSON.stringify(draftedTeamsData));
}

function IsValidJSONString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

export function importWeekData() {
  const currentWeek = parseInt($('.week-dropdown').val() as string, 10);

  swal({
    html:
    `<form>
      <div class="form-group">
        <label for="import-week-fixtures">Input fixture data below</label>
        <textarea class="form-control swal2-textarea" id="import-week-fixtures" placeholder="Input fixture data here..."></textarea>
      </div>
      <div class="form-group">
        <label for="import-week-players">Input player data below</label>
        <textarea class="form-control swal2-textarea" id="import-week-players" placeholder="Input player data here..."></textarea>
      </div>
    </form>`,
    customClass: 'swal-import',
    confirmButtonText: 'Import',
    showCancelButton: true
  }).then((result: any) => {
    if (result.value) {
      const weekFixtureText = $('#import-week-fixtures').val() as string;
      const weekPlayerText = $('#import-week-players').val() as string;

      if (IsValidJSONString(weekFixtureText) && IsValidJSONString(weekPlayerText)) {
        localStorage.setItem('week_' + currentWeek + '_fixtures', LZCompress(weekFixtureText));
        localStorage.setItem('week_' + currentWeek + '_players', LZCompress(weekPlayerText));
        $('.week-dropdown').trigger('change');
      } else {
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
