import { Team } from './Team';

export class TeamList {
  public readonly teams: Team[];

  constructor(teams: Team[]) {
    this.teams = teams;
  }
}
