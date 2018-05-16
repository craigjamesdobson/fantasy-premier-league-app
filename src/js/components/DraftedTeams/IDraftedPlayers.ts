import { PlayerPosition } from '../Players/PlayerPosition';
import { IDraftedTransferData } from './IDraftedTransferData';

export interface IDraftedPlayers {
  player_id: number;
  transfers: IDraftedTransferData[];
}
