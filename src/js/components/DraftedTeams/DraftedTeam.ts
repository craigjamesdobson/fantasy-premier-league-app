import { DraftedPlayer } from '../DraftedTeams/DraftedPlayer';
import { IDraftedTeamDataElements } from '../DraftedTeams/IDraftedTeamDataElements';

// Player class
export class DraftedTeam {
  public readonly teamID: number;
  public readonly teamName: string;
  public readonly allowedTransfers: boolean;
  public readonly teamPlayers: DraftedPlayer[];

  constructor(draftedTeam: IDraftedTeamDataElements) {
    this.teamID = draftedTeam.team_id;
    this.teamName = draftedTeam.team_name.toUpperCase();
    this.allowedTransfers = draftedTeam.allowed_transfers;
    this.teamPlayers = draftedTeam.team_players.map(x => new DraftedPlayer(x));
  }
}
