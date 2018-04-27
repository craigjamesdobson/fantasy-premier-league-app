import * as $ from "jquery";
import { IPlayerData } from "../../components/Players/IPlayerData";
import { IPlayerDataElements } from "../../components/Players/IPlayerDataElements";
import { Player } from "../../components/Players/Player";
import { PlayerData } from "../../components/Players/PlayerData";
import { PlayerPosition } from "../../components/Players/PlayerPosition";
import FantasyTeams from "../CreatedTeams/FantasyTeams.json";

const fantasyTeams = (FantasyTeams as any).fantasy_teams;

export namespace CreateTeams {
    // Interface for Team elements
    interface ITeamData {
        fantasy_teams: ITeamDataElements[];
    }

    // Interface for team data
    interface ITeamDataElements {
        team_id: number;
        team_name: string;
        team_players: ITeamPlayers[];
    }

    // Interface for team players data
    interface ITeamPlayers {
        player_id: number;
        transfers: ITransferData[];
    }

    // Interface for team players transfer data
    interface ITransferData {
        transfer_id: number;
        transfer_week: number;
    }

    export function CreateTeam() {
        PlayerData.getPlayerData((playerData: any) => {
            // tslint:disable-next-line
            console.log(playerData);

            for (const team of fantasyTeams) {
                $(".teams-container").append(`<h4>${team.team_name}</h4>`);

                for (const teamPlayer of team.team_players) {

                    for (const player of playerData.players) {
                        if (player.id === teamPlayer.player_id) {

                            // tslint:disable-next-line
                            console.log(player);
                            $(".teams-container").append(`<p>${player.name} ${player.id} ${player.teamShort} ${player.playerType}</p>`);
                        }
                    }
                }
            }
        });

        // tslint:disable-next-line
        console.log(fantasyTeams);
    }
}
