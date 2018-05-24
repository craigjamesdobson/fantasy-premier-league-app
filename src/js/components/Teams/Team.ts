import { ITeamDataElements } from './ITeamDataElements';

export class Team {
  private readonly teamID: number;
  private readonly teamCode: number;
  private readonly teamName: string;
  private readonly teamNameShort: string;

  constructor(team: ITeamDataElements) {
    this.teamID = team.id;
    this.teamCode = team.code;
    this.teamName = team.name;
    this.teamNameShort = team.short_name;
  }
}
