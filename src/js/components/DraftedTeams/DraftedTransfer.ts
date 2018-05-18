import { IPlayerData } from '../Players/IPlayerData';
import { IPlayerDataElements } from '../Players/IPlayerDataElements';
import { Player } from '../Players/Player';
import { PlayerData } from '../Players/PlayerData';
import { PlayerPosition } from '../Players/PlayerPosition';

import { IDraftedPlayers } from '../DraftedTeams/IDraftedPlayers';
import { IDraftedTeamData } from '../DraftedTeams/IDraftedTeamData';
import { IDraftedTeamDataElements } from '../DraftedTeams/IDraftedTeamDataElements';
import { IDraftedTransferData } from '../DraftedTeams/IDraftedTransferData';

export class DraftedTransfer {
  public readonly transferId: number;
  public readonly transferWeek: number;

  constructor(draftedTransfer: IDraftedTransferData) {
    this.transferId = draftedTransfer.transfer_id;
    this.transferWeek = draftedTransfer.transfer_week;
  }
}
