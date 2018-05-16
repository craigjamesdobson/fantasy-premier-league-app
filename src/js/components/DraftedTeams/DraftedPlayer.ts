import { IPlayerData } from '../Players/IPlayerData';
import { IPlayerDataElements } from '../Players/IPlayerDataElements';
import { Player } from '../Players/Player';
import { PlayerData } from '../Players/PlayerData';
import { PlayerPosition } from '../Players/PlayerPosition';

import { IDraftedPlayers } from '../DraftedTeams/IDraftedPlayers';
import { IDraftedTeamData } from '../DraftedTeams/IDraftedTeamData';
import { IDraftedTeamDataElements } from '../DraftedTeams/IDraftedTeamDataElements';
import { IDraftedTransferData } from '../DraftedTeams/IDraftedTransferData';

export class DraftedPlayer {
  private playerID: number;
  private playerPosition: PlayerPosition;
  private playerTeam: number;
  private playerName: string;
  private transfers: IDraftedTransferData;

  constructor(draftedPlayer: IDraftedPlayers, player: IPlayerDataElements) {
    this.playerID = draftedPlayer.player_id;
    this.playerPosition = player.element_type;
    this.playerTeam = player.team;
    this.playerName = player.web_name;
    this.transfers = this.transfers;
  }
}
