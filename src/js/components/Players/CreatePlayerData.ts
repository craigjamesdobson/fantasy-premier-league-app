import { IPlayerData } from '../../components/Players/IPlayerData';
import { Player } from '../../components/Players/Player';
import { PlayerList } from './PlayerList';

export namespace CreatePlayerData {
  export function createPlayerData(data: IPlayerData): PlayerList {
    const loadingOverlay = $('.loading');

    loadingOverlay.hide();

    const players = data.elements.map(player => new Player(player));
    const playerList = new PlayerList(players);

    return playerList;
  }
}
