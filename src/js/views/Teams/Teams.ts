import '../../../scss/calculations.scss';
import '../../../scss/teams.scss';

import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { CreatePlayerData } from '../../components/Players/CreatePlayerData';
import { CreateTeamData } from '../../components/Teams/CreateTeamData';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { GetStaticData } from '../../components/StaticData/GetStaticData';
import { PlayerList } from '../../components/Players/PlayerList';
import { TeamList } from '../../components/Teams/TeamList';

import { chain } from 'lodash';

// tslint:disable:no-var-requires
const DraftedTeamDefualtTemplate = require('../../components/Templates/DraftedTeamsDefaultTemplate.hbs');
// tslint:enable:no-var-requires

const teamsContainer = $('.teams-container');

let playerData: PlayerList;
let teamData: TeamList;
export let draftedTeams: CompleteDraftedTeam[] = [];

GetStaticData.getstaticData().then(async data => {
  playerData = CreatePlayerData.createPlayerData(data);
  await initDraftedTeamData(playerData);

  teamData = CreateTeamData.createTeamData(data);
  $('.loading').hide();
});

async function initDraftedTeamData(playerList: PlayerList) {
  return new Promise<void>(async resolve => {
    const draftedTeamList = await DraftedTeamData.getDraftedTeamData();

    draftedTeams = draftedTeamList.map(draftedTeam => {
      const teamName =  draftedTeam.teamName;
      const players = draftedTeam.teamPlayers.map(player => ({
        player: playerList.players.filter(p => p.id === player.playerID)[0],
        transfers: player.transfers
      }));
      return new CompleteDraftedTeam(draftedTeam, players);
    });

    const sortedDraftTeams = chain(draftedTeams)
    .orderBy('teamName')
    .value();

    teamsContainer.append(DraftedTeamDefualtTemplate(sortedDraftTeams));
    resolve();
  });
}
