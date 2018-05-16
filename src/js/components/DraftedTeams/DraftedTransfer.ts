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
  private transferTeam: number;
  private transferWeek: number;

  constructor(draftedTransfer: IDraftedTransferData) {
    this.transferTeam = draftedTransfer.transferID;
    this.transferWeek = draftedTransfer.transferWeek;
  }
}
