import { IDraftedPlayers } from './IDraftedPlayers';

export interface IDraftedTeamDataElements {
  team_id: number;
  team_name: string;
  allowed_transfers: boolean;
  team_players: IDraftedPlayers[];
}
