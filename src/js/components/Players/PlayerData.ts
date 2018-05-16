import { IPlayerData } from '../../components/Players/IPlayerData';
import { IPlayerDataElements } from '../../components/Players/IPlayerDataElements';
import { Player } from '../../components/Players/Player';
import { IPlayerList } from './IPlayerList';

export namespace PlayerData {
  export async function getPlayerData(): Promise<IPlayerList> {
    return new Promise<IPlayerList>((resolve, reject) => {
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
            reject(`Looks like there was a problem. Status Code:  ${data.status}`);
          }

          // Examine the text in the response
          data.json().then((playerData: IPlayerData) => {
            // Hide the loading overlay
            loadingOverlay.hide();

            const players = playerData.elements.map(player => new Player(player));

            const playerList: IPlayerList = {
              loaded: true,
              players: players,
              goalkeepers: players.filter(p => p.playerType === 1),
              defenders: players.filter(p => p.playerType === 2),
              midfielders: players.filter(p => p.playerType === 3),
              forwards: players.filter(p => p.playerType === 4)
            };
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
