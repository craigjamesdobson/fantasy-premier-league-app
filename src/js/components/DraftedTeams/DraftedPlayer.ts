import { DraftedTransfer } from './DraftedTransfer';
import { IDraftedPlayers } from '../DraftedTeams/IDraftedPlayers';

export class DraftedPlayer {
  public readonly playerID: number;
  public readonly transfers: DraftedTransfer[];

  constructor(draftedPlayer: IDraftedPlayers) {
    this.playerID = draftedPlayer.player_id;
    this.transfers = draftedPlayer.transfers.map(x => new DraftedTransfer(x));
  }
}
