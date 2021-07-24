import '../../../scss/calculations.scss';
import '../../../scss/teams.scss';

import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';
import { PlayerPositionShort } from '../../components/Players/PlayerPosition';
import { TeamList } from '../../components/Teams/TeamList';
import { chain } from 'lodash';

// tslint:disable:no-var-requires
const DraftedTeamDefualtTemplate = require('../../components/Templates/DraftedTeamsDefaultTemplate.hbs');
// tslint:enable:no-var-requires

const teamsContainer = $('.teams-container');

let playerData: PlayerList;
let teamData: TeamList;
export let draftedTeams: CompleteDraftedTeam[] = [];

// GetStaticData.getstaticData().then(async (data) => {
//   playerData = CreatePlayerData.createPlayerData(data);
//   await initDraftedTeamData(playerData);

//   teamData = CreateTeamData.createTeamData(data);
//   $('.loading').hide();
// });

async function initDraftedTeamData(playerList: PlayerList) {
  return new Promise<void>(async (resolve) => {
    const draftedTeamList = await DraftedTeamData.getDraftedTeamData();

    draftedTeams = draftedTeamList.map((draftedTeam) => {
      const players = draftedTeam.teamPlayers.map((player) => ({
        player: playerList.players.filter((p) => p.id === player.playerID)[0],
        transfers: player.transfers,
      }));
      return new CompleteDraftedTeam(draftedTeam, players);
    });

    const sortedDraftTeams = chain(draftedTeams).orderBy('teamName').value();

    teamsContainer.append(DraftedTeamDefualtTemplate(sortedDraftTeams));
    resolve();
    applyTransfers();
  });
}

function applyTransfers() {
  $('.table').each((i, table) => {
    let totalTeamCost = 0;

    $(table)
      .find('.player-total-data')
      .each((i, player) => {
        const transferData = $(player).attr('data-transfer');
        const activeTransferExpiryData = $(player).attr(
          'data-current-transfer-date'
        );

        let activeTransferExpiryDate = null;

        if (activeTransferExpiryData) {
          activeTransferExpiryDate = new Date(activeTransferExpiryData);
        }

        if (transferData !== undefined) {
          const transfers = transferData.split(',');

          if (activeTransferExpiryDate > new Date()) {
            $(player).addClass('current-week-transfer');
          }

          $(transfers).each((j, transfer: any) => {
            const transferSplit = transfer.split('|');
            const transferID = transferSplit[1];

            for (const playerdata of playerData.players) {
              if (playerdata.id === parseInt(transferID, 10)) {
                $(player).addClass('transfered');
                $(player).find('.id').text(playerdata.id);
                $(player)
                  .find('.position')
                  .text(PlayerPositionShort[playerdata.playerType]);
                $(player).find('.club').text(playerdata.teamShort);
                $(player).find('.player').text(playerdata.name);
                $(player).find('.price').text(playerdata.price);
              }
            }
          });
        }
        const playerPrice = $(player).find('.price').text();
        totalTeamCost += parseFloat(playerPrice);
      });
    $(table).find('.total-team-value').text(totalTeamCost);
  });
}
