import { IDraftedTransferData } from './IDraftedTransferData';
import { PlayerPosition } from '../Players/PlayerPosition';

export interface IDraftedPlayers {
  player_id: number;
  transfers: IDraftedTransferData[];
}
