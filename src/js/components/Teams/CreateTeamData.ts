import { GetStaticData } from '../StaticData/GetStaticData';
import { ITeamData } from './ITeamData';
import { Team } from './Team';
import { TeamList } from './TeamList';

export namespace CreateTeamData {
  export function createTeamData(data: ITeamData): TeamList {

    const teams = data.teams.map(team => new Team(team));
    const teamList = new TeamList(teams);

    return teamList;
  }
}
