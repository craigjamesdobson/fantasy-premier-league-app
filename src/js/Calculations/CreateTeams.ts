import * as $ from "jquery";
import FantasyTeams from "../Calculations/FantasyTeams.json";
import { PlayerData } from "../Shared/PlayerData";

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
        });

        // tslint:disable-next-line
        console.log(fantasyTeams);

        for (const team of fantasyTeams) {
            $(".teams-container").append(`<h3>${team.team_name}</h3>`);
        }
    }
}
