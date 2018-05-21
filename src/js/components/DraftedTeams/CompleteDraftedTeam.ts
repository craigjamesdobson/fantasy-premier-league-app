import { CompleteDraftedPlayer } from './CompleteDraftedPlayer';
import { DraftedTeam } from './DraftedTeam';
import { ICompleteDraftedPlayer } from './ICompleteDraftedPlayer';

export class CompleteDraftedTeam {
  private readonly teamID: number;
  private readonly teamName: string;
  private readonly allowedTransfers: boolean;
  private readonly teamPlayers: CompleteDraftedPlayer[];

  constructor(draftedTeam: DraftedTeam, players: ICompleteDraftedPlayer[]) {
    this.teamID = draftedTeam.teamID;
    this.teamName = draftedTeam.teamName;
    this.allowedTransfers = draftedTeam.allowedTransfers;
    this.teamPlayers = players.map(
      x => new CompleteDraftedPlayer(x.player, x.transfers)
    );
  }
}
