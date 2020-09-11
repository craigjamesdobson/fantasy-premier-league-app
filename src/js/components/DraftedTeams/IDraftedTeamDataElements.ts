import { IDraftedPlayers } from './IDraftedPlayers';

export interface IDraftedTeamDataElements {
  team_id: number;
  team_name: string;
  team_owner: string;
  allowed_transfers: boolean;
  team_players: IDraftedPlayers[];
}
