import { compress as LZCompress } from 'lz-string';
import swal from 'sweetalert2';

export function storeWeeklyData() {

  const currentWeek = 'week_' + $('.week-dropdown :selected').val();
  const selectedFixtures = $('.fixtures .teams-dropdown option[value!="0"]')
    .filter(':selected')
    .toArray();

  const currentWeekPlayers: any = [];
  const playerArray: any = {};

  const currentWeekFixtures: any = [];
  const fixtureList: any = {};

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

    fixtureList[fixtureNumber] = {
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

    const hasScored =   $(player).find('.score-select').val() !== '0';
    const hasCleanSheet = $(player).find('.clean-sheet-checkbox').prop('checked');
    const sentOff = $(player).find('.red-card-checkbox').prop('checked');

    if (hasScored || hasCleanSheet || sentOff) {
      const playerName = $(player).find('td:nth-child(2)').text();
      const playerID = $(player).attr('data-id');
      const goalsScored = $(player).find('.score-select').val();
      const cleanSheet = $(player).find('.clean-sheet-checkbox').prop('checked') ? true : false;
      const redCard = $(player).find('.red-card-checkbox').prop('checked') ? true : false;

      playerArray[playerID] = {
        playerName: playerName,
        playerID: playerID,
        goalsScored: goalsScored,
        cleanSheet: cleanSheet,
        redCard: redCard
      };

    }

  });

  if (!jQuery.isEmptyObject(fixtureList)) {
    currentWeekFixtures.push(fixtureList);
  }

  if (!jQuery.isEmptyObject(playerArray)) {
  currentWeekPlayers.push(playerArray);
  }

  const toast = (swal as any).mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  if (currentWeekPlayers.length > 0 || currentWeekFixtures.length > 0) {
    localStorage[currentWeek + '_players'] = (JSON.stringify(currentWeekPlayers));
    localStorage[currentWeek + '_fixtures'] = (JSON.stringify(currentWeekFixtures));
    toast({
      position: 'top-end',
      type: 'success',
      title: `${$('.week-dropdown :selected').text().toUpperCase()} has been saved`,
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    toast({
      position: 'top-end',
      type: 'error',
      title: 'No data has been selected',
      showConfirmButton: false,
      timer: 1500
    });
  }

}

export function deleteWeeklyData() {
  const currentWeek = 'week_' + $('.week-dropdown :selected').val();

  localStorage.removeItem(`${currentWeek}_fixtures`);
  localStorage.removeItem(`${currentWeek}_players`);
}
