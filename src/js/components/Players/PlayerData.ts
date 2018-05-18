import { IPlayerData } from '../../components/Players/IPlayerData';
import { IPlayerDataElements } from '../../components/Players/IPlayerDataElements';
import { Player } from '../../components/Players/Player';
import { IPlayerList } from './IPlayerList';
import { PlayerPosition } from './PlayerPosition';

class PlayerList {
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

export namespace PlayerData {
  export async function getPlayerData(): Promise<PlayerList> {
    return new Promise<PlayerList>((resolve, reject) => {
      // Define variables
      const loadingOverlay = $('.loading');
      const loadingState = false;
      const playerDataUrl =
        'https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json';
      const imageUrl =
        'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p';

      fetch(playerDataUrl)
        .then((data: Response) => {
          if (data.status !== 200) {
            reject(
              `Looks like there was a problem. Status Code:  ${data.status}`
            );
          }

          // Examine the text in the response
          data.json().then((playerData: IPlayerData) => {
            // Hide the loading overlay
            loadingOverlay.hide();

            const players = playerData.elements.map(player => new Player(player));
            const playerList = new PlayerList(players);

            resolve(playerList);
          });
        })
        .catch((err: Error) => {
          // Hide the loading overlay
          loadingOverlay.hide();

          // Show alert error
          reject(`fetch error ${err}`);
        });
    });
  }
}
