import { IDraftedPlayers } from './IDraftedPlayers';

export interface IDraftedTeamDataElements {
  team_id: number;
  team_name: string;
  team_players: IDraftedPlayers[];
}
