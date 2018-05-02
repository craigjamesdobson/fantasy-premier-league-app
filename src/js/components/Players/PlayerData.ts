import { IPlayerData } from "../../components/Players/IPlayerData";
import { IPlayerDataElements } from "../../components/Players/IPlayerDataElements";
import { Player } from "../../components/Players/Player";
// import { PlayerPosition } from "../../components/Players/PlayerPosition";

export namespace PlayerData {
    // Declare variables
    let players = [];
    let playerDataUrl: string;
    let imageUrl: string;
    let loadingState: boolean;
    let loadingOverlay: JQuery;

    export function getPlayerData(playerListCallback: any) {
        // Define variables
        loadingOverlay = $(".loading");
        loadingState = false;
        playerDataUrl =
            "https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json";
        imageUrl =
            "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p";

        fetch(playerDataUrl)
            .then((data: Response) => {
                if (data.status !== 200) {
                    Error(
                        `Looks like there was a problem. Status Code:  ${
                            data.status
                        }`
                    );
                    return;
                }

                // Examine the text in the response
                data.json().then((playerData: IPlayerData) => {
                    // Hide the loading overlay
                    loadingOverlay.hide();

                    players = playerData.elements.map(
                        player => new Player(player)
                    );

                    const playerList: object = {
                        settings: {
                            loaded: true
                        },
                        players: players,
                        goalkeepers: players.filter(p => p.playerType === 1),
                        defenders: players.filter(p => p.playerType === 2),
                        midfielders: players.filter(p => p.playerType === 3),
                        forwards: players.filter(p => p.playerType === 4)
                    };

                    // Create callback with player data
                    playerListCallback(playerList);
                });
            })
            .catch((err: Error) => {
                // Hide the loading overlay
                loadingOverlay.hide();

                // Show alert error
                alert(`fetch error ${err}`);
            });
    }
}
