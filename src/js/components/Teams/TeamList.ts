import { Team } from './Team';

export class TeamList {
  public teams: Team[];

  constructor(teams: Team[]) {
    this.teams = teams;
  }
}
