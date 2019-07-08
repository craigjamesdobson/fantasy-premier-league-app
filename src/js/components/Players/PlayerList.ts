import { Player } from './Player';
import { PlayerPosition } from './PlayerPosition';

export class PlayerList {
  public readonly players: Player[];
  public filteredPlayers: Player[];

  constructor(players: Player[]) {
    this.players = players;
    this.filteredPlayers = players;
  }

  public getFilteredPlayers(filterName?: string, filterPrice?: string) {
    const FilterName = filterName ? filterName : '';
    const FilterPrice = filterPrice ? filterPrice : '';

    const filteredPlayers = this.players.filter(
      p =>
        p.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .indexOf(FilterName) > -1
    );

    filteredPlayers.filter( p => p.price.indexOf(FilterPrice) > -1);

    return this.filteredPlayers = filteredPlayers;
  }

  public getFilteredPlayersOfType(
    position: PlayerPosition,
    filterName?: string,
    filterPrice?: string
  ): [Player[], Player[]] {
    const players = this.getPlayersOfType(position).filter(
      p =>
        p.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .indexOf(filterName) > -1 && p.playerType === position
    );
    const filteredPlayers = players.filter(
      p => p.price.indexOf(filterPrice) > -1 && p.playerType === position
    );
    const divisor = Math.ceil(filteredPlayers.length / 2);

    return [filteredPlayers.slice(0, divisor), filteredPlayers.slice(divisor)];
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
