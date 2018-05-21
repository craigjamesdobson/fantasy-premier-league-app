import { DraftedTransfer } from './DraftedTransfer';
import { Player } from '../Players/Player';

export interface ICompleteDraftedPlayer {
  player: Player;
  transfers: DraftedTransfer[];
}
