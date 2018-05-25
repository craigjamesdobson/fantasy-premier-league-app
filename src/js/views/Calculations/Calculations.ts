import '../../../scss/calculations.scss';

import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';
import { Team } from '../../components/Teams/Team';
import { TeamList } from '../../components/Teams/TeamList';

/* tslint:disable-next-line:no-var-requires */
const FixturesTemplate = require('../../components/Templates/FixturesTemplate.hbs');
// tslint:disable-next-line:no-var-requires
const DraftedTeamTemplate = require('../../components/Templates/DraftedTeamsTemplate.hbs');
const teamsContainer = $('.teams-container');
const fixturesContainer = $('.fixtures-container');

GetStaticData.getstaticData().then(data => {
  const playerData = CreatePlayerData.createPlayerData(data);
  initDraftedTeamData(playerData);

  const teamData = CreateTeamData.createTeamData(data);
  initTeamData(teamData);
});

async function initDraftedTeamData(playerList: PlayerList) {
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

function initTeamData(teamList: TeamList) {
  // tslint:disable-next-line:no-console
  console.log(teamList);
  fixturesContainer.append(FixturesTemplate(teamList));
}
