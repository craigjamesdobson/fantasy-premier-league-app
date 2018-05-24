import { Player } from './Player';
import { PlayerPosition } from './PlayerPosition';

export class PlayerList {
  public readonly players: Player[];

  constructor(players: Player[]) {
    this.players = players;
  }

  public getPlayersOfType(position: PlayerPosition): Player[] {
    return this.players.filter(p => p.playerType === position);
  }

  public getSplitPlayersOfType(position: PlayerPosition): [Player[], Player[]] {
    const players = this.getPlayersOfType(position);
    const divisor = Math.floor(players.length / 2);

    return [players.slice(0, divisor), players.slice(divisor)];
  }
}
