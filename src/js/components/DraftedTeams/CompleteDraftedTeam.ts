import { CompleteDraftedPlayer } from './CompleteDraftedPlayer';
import { DraftedTeam } from './DraftedTeam';
import { ICompleteDraftedPlayer } from './ICompleteDraftedPlayer';

export class CompleteDraftedTeam {
  public readonly teamID: number;
  public readonly teamName: string;
  private readonly isInvalidTeam: boolean;
  private readonly allowedTransfers: boolean;
  private readonly teamPlayers: CompleteDraftedPlayer[];

  constructor(draftedTeam: DraftedTeam, players: ICompleteDraftedPlayer[]) {
    this.teamID = draftedTeam.teamID;
    this.teamName = draftedTeam.teamName;
    this.isInvalidTeam = false;
    this.allowedTransfers = draftedTeam.allowedTransfers;
    this.teamPlayers = players.map(
      x => new CompleteDraftedPlayer(x.player, x.transfers)
    );

    let teamCostTotal = 0;
    for (const teamPlayer of this.teamPlayers) {
      const playerPrice = parseInt(teamPlayer.playerPrice, 10);

      teamCostTotal = teamCostTotal + playerPrice;
    }

    if (teamCostTotal > 80) {
      this.isInvalidTeam = true;
    }
  }
}
