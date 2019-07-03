import { CompleteDraftedPlayer } from './CompleteDraftedPlayer';
import { DraftedTeam } from './DraftedTeam';
import { ICompleteDraftedPlayer } from './ICompleteDraftedPlayer';

export class CompleteDraftedTeam {
  public readonly teamID: number;
  public readonly teamName: string;
  private readonly isInvalidTeam: boolean;
  private readonly allowedTransfers: boolean;
  private readonly teamValueAllowed: number;
  private readonly teamPlayers: CompleteDraftedPlayer[];

  constructor(draftedTeam: DraftedTeam, players: ICompleteDraftedPlayer[]) {
    this.teamID = draftedTeam.teamID;
    this.teamName = draftedTeam.teamName;
    this.isInvalidTeam = false;
    this.allowedTransfers = draftedTeam.allowedTransfers;
    this.teamValueAllowed = this.allowedTransfers ? 80 : 90;
    this.teamPlayers = players.map(
      x => new CompleteDraftedPlayer(x.player, x.transfers)
    );

    const teamCostTotal = this.teamPlayers.reduce((accumulator, current) => accumulator += parseInt(current.playerPrice, 10), 0);

    if (teamCostTotal > this.teamValueAllowed) {
      this.isInvalidTeam = true;
    }
  }
}
