import { ITeamPlayers } from './ITeamPlayers';

export interface ITeamDataElements {
  team_id: number;
  team_name: string;
  team_players: ITeamPlayers[];
}
