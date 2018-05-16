import { Player } from './Player';

export interface IPlayerList {
  loaded: boolean;
  players: Player[];
  goalkeepers: Player[];
  defenders: Player[];
  midfielders: Player[];
  forwards: Player[];
}
