import '../../../scss/calculations.scss';

import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';

/* tslint:disable-next-line:no-var-requires */
const DraftedTeamTemplate = require('../../components/Templates/DraftedTeamsTemplate.hbs');
const teamsContainer = $('.teams-container');

GetStaticData.getstaticData().then(data => {
  const playerData = CreatePlayerData.createPlayerData(data);
  initTeamData(playerData);
});
async function initTeamData(playerList: PlayerList) {
  // const playerList = await CreatePlayerData.createPlayerData();
  const draftedTeamList = await DraftedTeamData.getDraftedTeamData();

  const draftedTeams = draftedTeamList.map(draftedTeam => {
    const players = draftedTeam.teamPlayers.map(player => ({
      player: playerList.players.filter(p => p.id === player.playerID)[0],
      transfers: player.transfers
    }));

    return new CompleteDraftedTeam(draftedTeam, players);
  });

  teamsContainer.append(DraftedTeamTemplate(draftedTeams));

}
