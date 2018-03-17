/// <reference types="jquery" />

import * as $ from "jquery";

export module PlayerData {

    let loadingState: boolean;
    let playerDataUrl: string;
    let loadingOverlay: JQuery;

    enum PlayerPosition {
        Goalkeeper = 1,
        Defender = 2,
        Midfielder = 3,
        Forward = 4
    }

    // API Elements
    interface IPlayerData {
        elements: IPlayerDataElements[];
    }

    // API Players
    interface IPlayerDataElements {
        id: number;
        photo: string;
        team: number;
        now_cost: number;
        cost_change_start_fall: number;
        web_name: string;
        element_type: PlayerPosition;
    }

    // Custom JSON
    interface IPlayer {
        id: number;
        image: string;
        teamID: number;
        name: string;
        price: string;
        playerType: PlayerPosition;
    }

    class Player implements IPlayer {
        id: number;
        image: string;
        teamID: number;
        teamName: string;
        teamShort: string;
        name: string;
        price: string;
        playerType: PlayerPosition;

        constructor(player: IPlayerDataElements) {
            this.id = player.id;
            this.image = player.photo;
            this.teamID = player.team;
            this.price = this.getPlayerCost(player.now_cost, player.cost_change_start_fall);
            this.name = player.web_name;
            this.playerType = player.element_type;

            let teamID = this.teamID

            switch (true) {
                case (teamID == 1):
                    this.teamName = "Arsenal";
                    this.teamShort = "ARS";
                    break;
                case (teamID == 2):
                    this.teamName = "Bournemouth";
                    this.teamShort = "BOU";
                    break;
                case (teamID == 3):
                    this.teamName = "Brighton and Hove Albion";
                    this.teamShort = "BHA";
                    break;
                case (teamID == 4):
                    this.teamName = "Burnley";
                    this.teamShort = "BUR";
                    break;
                case (teamID == 5):
                    this.teamName = "Chelsea";
                    this.teamShort = "CHE";
                    break;
                case (teamID == 6):
                    this.teamName = "Crystal Palace";
                    this.teamShort = "CRY";
                    break;
                case (teamID == 7):
                    this.teamName = "Everton";
                    this.teamShort = "EVE";
                    break;
                case (teamID == 8):
                    this.teamName = "Huddersfield Town";
                    this.teamShort = "HUD";
                    break;
                case (teamID == 9):
                    this.teamName = "Leicester City";
                    this.teamShort = "LEI";
                    break;
                case (teamID == 10):
                    this.teamName = "Liverpool";
                    this.teamShort = "LIV";
                    break;
                case (teamID == 11):
                    this.teamName = "Manchester City";
                    this.teamShort = "MNC";
                    break;
                case (teamID == 12):
                    this.teamName = "Manchester United";
                    this.teamShort = "MNU";
                    break;
                case (teamID == 13):
                    this.teamName = "Newcastle United";
                    this.teamShort = "NEW";
                    break;
                case (teamID == 14):
                    this.teamName = "Southampton";
                    this.teamShort = "SOU";
                    break;
                case (teamID == 15):
                    this.teamName = "Stoke City";
                    this.teamShort = "STO";
                    break;
                case (teamID == 16):
                    this.teamName = "Swansea City";
                    this.teamShort = "SWA";
                    break;
                case (teamID == 17):
                    this.teamName = "Tottenham Hotspur";
                    this.teamShort = "TOT";
                    break;
                case (teamID == 18):
                    this.teamName = "Watford";
                    this.teamShort = "WAT";
                    break;
                case (teamID == 19):
                    this.teamName = "West Bromwich Albion";
                    this.teamShort = "WBA";
                    break;
                case (teamID == 20):
                    this.teamName = "West Ham United";
                    this.teamShort = "WHU";
                    break;
            }
        }

        private getPlayerCost(now: number, change: number): string {
            return ((now + change) / 10).toFixed(1);
        }

    }

    export function getPlayerData(callback: Function) {

        loadingOverlay = $('.loading');
        loadingState = false;
        playerDataUrl = "https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json";

        $.getJSON(playerDataUrl, function (data: IPlayerData) {

            loadingOverlay.hide();

            let players: Player[] = data.elements.map(player => new Player(player))

            let playerList = {
                settings: {
                    loaded: true,
                },
                goalkeepers: players.filter(p => p.playerType == 1),
                defenders: players.filter(p => p.playerType == 2),
                midfielders: players.filter(p => p.playerType == 3),
                forwards: players.filter(p => p.playerType == 4)
            }

            callback(playerList)

        });
    }

}