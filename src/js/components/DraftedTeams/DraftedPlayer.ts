import { IPlayerData } from '../Players/IPlayerData';
import { IPlayerDataElements } from '../Players/IPlayerDataElements';
import { Player } from '../Players/Player';
import { PlayerData } from '../Players/PlayerData';
import { PlayerPosition } from '../Players/PlayerPosition';

import { IDraftedPlayers } from '../DraftedTeams/IDraftedPlayers';
import { IDraftedTeamData } from '../DraftedTeams/IDraftedTeamData';
import { IDraftedTeamDataElements } from '../DraftedTeams/IDraftedTeamDataElements';
import { IDraftedTransferData } from '../DraftedTeams/IDraftedTransferData';
import { DraftedTransfer } from './DraftedTransfer';

export class DraftedPlayer {
  public readonly playerID: number;
  public readonly transfers: DraftedTransfer[];

  constructor(draftedPlayer: IDraftedPlayers) {
    this.playerID = draftedPlayer.player_id;
    this.transfers = draftedPlayer.transfers.map(x => new DraftedTransfer(x));
  }
}
