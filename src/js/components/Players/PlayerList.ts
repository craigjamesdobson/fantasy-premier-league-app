import { Player } from './Player';
import { PlayerPosition } from './PlayerPosition';

export class PlayerList {
  public readonly players: Player[];
  public filteredPlayers: Player[];

  constructor(players: Player[]) {
    this.players = players;
    this.filteredPlayers = players;
  }

  public getFilteredPlayers(
    filterName?: string,
    filterPrice?: string,
    filterTeam?: number
  ) {
    const FilterName = filterName ? filterName : '';
    const FilterPrice = filterPrice ? filterPrice : '';
    const FilterTeam = filterTeam ? filterTeam : null;

    let filteredPlayers = this.players.filter(
      p =>
        p.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .indexOf(FilterName) > -1
    );

    filteredPlayers = filteredPlayers.filter(
      p => p.price.indexOf(FilterPrice) > -1
    );

    if (FilterTeam !== null) {
      filteredPlayers = filteredPlayers.filter(p => p.teamID === FilterTeam);
    }

    return (this.filteredPlayers = filteredPlayers);
  }

  public getFilteredPlayersOfType(
    position: PlayerPosition,
    filterName?: string,
    filterPrice?: string,
    filterTeam?: number
  ): [Player[], Player[]] {
    const players = this.getPlayersOfType(position).filter(
      p =>
        p.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .indexOf(filterName) > -1 && p.playerType === position
    );
    let filteredPlayers = players.filter(
      p => p.price.indexOf(filterPrice) > -1 && p.playerType === position
    );

    if (filterTeam !== null) {
      filteredPlayers = filteredPlayers.filter(p => p.teamID === filterTeam);
    }

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
