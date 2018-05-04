import { PlayerPosition } from '../../components/Players/PlayerPosition';

// Interface for player data
export interface IPlayerDataElements {
  id: number;
  code: string;
  status: string;
  news: string;
  team: number;
  now_cost: number;
  cost_change_start_fall: number;
  web_name: string;
  element_type: PlayerPosition;
}
