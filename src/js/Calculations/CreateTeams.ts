/// <reference types="jquery" />

import * as $ from "jquery";
import { PlayerData } from '../Shared/PlayerData';
import FantasyTeams from '../Calculations/FantasyTeams.json';

const fantasyTeams = (<any>FantasyTeams).fantasy_teams;

export module CreateTeams {

    // Interface for Team elements
    interface ITeamData {
        fantasy_teams: ITeamDataElements[];
    }

        // Interface for team data
        interface ITeamDataElements {
            team_id: number;
            team_name: string;
            team_players: Array<ITeamPlayers>;
        }

        // Interface for team players data
        interface ITeamPlayers {
            player_id: number;
            transfers: Array<ITransferData>
        }

        // Interface for team players transfer data
        interface ITransferData {
            transfer_id: number;
            transfer_week: number;
        }

    export function CreateTeam() {

        PlayerData.getPlayerData(function (playerData: any) { 
            console.log(playerData);
        });

        console.log(fantasyTeams);

        for (var t = 0; t < fantasyTeams.length; t++) {

            $('.teams-container').append('<h3>' + fantasyTeams[t].team_name + '</p>');

        }
    }
}