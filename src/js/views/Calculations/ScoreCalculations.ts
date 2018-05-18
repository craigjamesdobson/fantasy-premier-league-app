import * as $ from 'jquery';
import '../../../scss/calculations.scss';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { DraftedTeam } from '../../components/DraftedTeams/DraftedTeam';
import { DraftedTransfer } from '../../components/DraftedTeams/DraftedTransfer';
import { IDraftedList } from '../../components/DraftedTeams/IDraftedList';
import { IPlayerList } from '../../components/Players/IPlayerList';
import { Player } from '../../components/Players/Player';
import { PlayerData } from '../../components/Players/PlayerData';
import { PlayerPosition, PlayerPositionShort } from '../../components/Players/PlayerPosition';

/* tslint:disable: no-var-requires */
const DraftedTeamTemplate = require('../../components/Templates/FantasyTeamsTemplate.hbs');
/* tslint:enable: no-var-requires */

/* tslint:disable: max-classes-per-file */
class CustomTeamPlayerList {
  private readonly playerId: number;
  private readonly playerName: string;
  private readonly playerPosition: string;
  private readonly playerTeamName: string;
  private readonly playerTeamShort: string;
  private readonly transfers: DraftedTransfer[];

  constructor(player: Player, transfers: DraftedTransfer[]) {
    this.playerId = player.id;
    this.playerName = player.name;
    this.playerPosition = PlayerPositionShort[player.playerType];
    this.playerTeamName = player.teamName;
    this.playerTeamShort = player.teamShort;
    this.transfers = transfers;
  }
}

class FullDraftedTeam {
  private readonly teamID: number;
  private readonly teamName: string;
  private readonly teamPlayers: CustomTeamPlayerList[];

  constructor(draftedTeam: DraftedTeam, players: IPlayerModel[]) {
    this.teamID = draftedTeam.teamID;
    this.teamName = draftedTeam.teamName;
    this.teamPlayers = players.map(x => new CustomTeamPlayerList(x.player, x.transfers));
  }
}
/* tslint:enable: max-classes-per-file */

interface IPlayerModel {
  player: Player;
  transfers: DraftedTransfer[];
}

namespace ScoreCalculations {
  async function getDraftedTeamData(): Promise<any> {
    const playerData = await PlayerData.getPlayerData();
    const draftedTeamList = await DraftedTeamData.getDraftedTeamData();

    const draftedTeams = draftedTeamList.map(draftedTeam => {
      const players = draftedTeam.teamPlayers.map(player => ({
        player: playerData.players.filter(p => p.id === player.playerID)[0],
        transfers: player.transfers
      }));

      return new FullDraftedTeam(draftedTeam, players);
    });

    console.log(draftedTeams);

    /*for (const draftedTeam of draftedTeamData.draftedTeams) {
      const fullDraftedTeam: object = {
        teamID: draftedTeam.teamID,
        teamName: draftedTeam.teamName,
        teamPlayers: null
      };
    }*/

    $('.teams-container').append(
      DraftedTeamTemplate(draftedTeams)
    );
  }

  export function init() {
    // initialise functions
    getDraftedTeamData();
  }
}
$(() => ScoreCalculations.init());
