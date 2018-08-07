import { Player } from './Player';
import { PlayerPosition } from './PlayerPosition';

export class PlayerList {
  public readonly players: Player[];

  constructor(players: Player[]) {
    this.players = players;
  }

  public getFilteredPlayersOfType(
    position: PlayerPosition,
    filter: string
  ): [Player[], Player[]] {
    const players = this.getPlayersOfType(position).filter(
      p =>
        p.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .indexOf(filter) > -1 && p.playerType === position
    );
    // const filteredPlayers = players.filter(p => p.name.toLowerCase().indexOf(filter) > -1 && p.playerType === position);
    const divisor = Math.ceil(players.length / 2);

    return [players.slice(0, divisor), players.slice(divisor)];
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
