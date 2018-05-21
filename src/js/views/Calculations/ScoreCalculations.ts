import '../../../scss/calculations.scss';

import * as $ from 'jquery';

import {
  PlayerPosition,
  PlayerPositionShort
} from '../../components/Players/PlayerPosition';

import { CompleteDraftedPlayer } from '../../components/DraftedTeams/CompleteDraftedPlayer';
import { CompleteDraftedTeam } from '../../components/DraftedTeams/CompleteDraftedTeam';
import { DraftedTeam } from '../../components/DraftedTeams/DraftedTeam';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { DraftedTransfer } from '../../components/DraftedTeams/DraftedTransfer';
import { IDraftedList } from '../../components/DraftedTeams/IDraftedList';
import { IPlayerList } from '../../components/Players/IPlayerList';
import { Player } from '../../components/Players/Player';
import { PlayerData } from '../../components/Players/PlayerData';

/* tslint:disable-next-line:no-var-requires */
const DraftedTeamTemplate = require('../../components/Templates/DraftedTeamsTemplate.hbs');

namespace ScoreCalculations {
  async function getDraftedTeamData(): Promise<any> {
    const playerData = await PlayerData.getPlayerData();
    const draftedTeamList = await DraftedTeamData.getDraftedTeamData();

    const draftedTeams = draftedTeamList.map(draftedTeam => {
      const players = draftedTeam.teamPlayers.map(player => ({
        player: playerData.players.filter(p => p.id === player.playerID)[0],
        transfers: player.transfers
      }));

      return new CompleteDraftedTeam(draftedTeam, players);
    });

    $('.teams-container').append(DraftedTeamTemplate(draftedTeams));

    /* tslint:disable */
    console.log(draftedTeams);
    /* tslint:enable */
  }

  export function init() {
    // initialise functions
    getDraftedTeamData();
  }
}
$(() => ScoreCalculations.init());
