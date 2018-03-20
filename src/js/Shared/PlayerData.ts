/// <reference types="jquery" />

import * as $ from "jquery";

export module PlayerData {

    // Declare variables
    let players = [];
    let playerDataUrl: string;
    let imageUrl: string;
    let loadingState: boolean;
    let loadingOverlay: JQuery;

    // Create enumarable list for player position
    enum PlayerPosition {
        Goalkeeper = 1,
        Defender = 2,
        Midfielder = 3,
        Forward = 4
    }

    // Interface for player elements
    interface IPlayerData {
        elements: IPlayerDataElements[];
    }

    // Interface for player data
    interface IPlayerDataElements {
        id: number;
        code: string;
        status: string;
        news: string;
        team: number;
        now_cost: number;
        cost_change_start_fall: number;
        web_name: string;
        element_type: PlayerPosition;
    }

    // Interface for Players
    interface IPlayer {
        id: number;
        image: string;
        isUnavailable: boolean;
        availabilityType: string;
        availabilityNews: string;
        teamID: number;
        teamName: string;
        teamShort: string;
        name: string;
        price: string;
        playerType: PlayerPosition;
    }

    // Player class
    class Player implements IPlayer {
        id: number;
        image: string;
        isUnavailable: boolean;
        availabilityType: string;
        availabilityNews: string;
        teamID: number;
        teamName: string;
        teamShort: string;
        name: string;
        price: string;
        playerType: PlayerPosition;

        // Calculate out the cost using the paramaters now and change
        private getPlayerCost(now: number, change: number): string {
            return ((now + change) / 10).toFixed(1);
        }

        // Construct player objects
        constructor(player: IPlayerDataElements) {
            this.id = player.id;
            this.image = `${imageUrl + player.code}.png`;
            this.availabilityType = player.status;
            this.teamID = player.team;
            this.price = this.getPlayerCost(player.now_cost, player.cost_change_start_fall);
            this.name = player.web_name;
            this.playerType = player.element_type;

            // Create team name and team abbrevation objects depending on team ID
            switch (this.teamID) {
                case 1:
                    this.teamName = "Arsenal";
                    this.teamShort = "ARS";
                    break;
                case 2:
                    this.teamName = "Bournemouth";
                    this.teamShort = "BOU";
                    break;
                case 3:
                    this.teamName = "Brighton and Hove Albion";
                    this.teamShort = "BHA";
                    break;
                case 4:
                    this.teamName = "Burnley";
                    this.teamShort = "BUR";
                    break;
                case 5:
                    this.teamName = "Chelsea";
                    this.teamShort = "CHE";
                    break;
                case 6:
                    this.teamName = "Crystal Palace";
                    this.teamShort = "CRY";
                    break;
                case 6:
                    this.teamName = "Everton";
                    this.teamShort = "EVE";
                    break;
                case 8:
                    this.teamName = "Huddersfield Town";
                    this.teamShort = "HUD";
                    break;
                case 9:
                    this.teamName = "Leicester City";
                    this.teamShort = "LEI";
                    break;
                case 10:
                    this.teamName = "Liverpool";
                    this.teamShort = "LIV";
                    break;
                case 11:
                    this.teamName = "Manchester City";
                    this.teamShort = "MNC";
                    break;
                case 12:
                    this.teamName = "Manchester United";
                    this.teamShort = "MNU";
                    break;
                case 13:
                    this.teamName = "Newcastle United";
                    this.teamShort = "NEW";
                    break;
                case 14:
                    this.teamName = "Southampton";
                    this.teamShort = "SOU";
                    break;
                case 15:
                    this.teamName = "Stoke City";
                    this.teamShort = "STO";
                    break;
                case 16:
                    this.teamName = "Swansea City";
                    this.teamShort = "SWA";
                    break;
                case 17:
                    this.teamName = "Tottenham Hotspur";
                    this.teamShort = "TOT";
                    break;
                case 18:
                    this.teamName = "Watford";
                    this.teamShort = "WAT";
                    break;
                case 19:
                    this.teamName = "West Bromwich Albion";
                    this.teamShort = "WBA";
                    break;
                case 20:
                    this.teamName = "West Ham United";
                    this.teamShort = "WHU";
                    break;
            }

            // Create availability objects
            switch (true) {
                case (this.availabilityType == "u" || this.availabilityType == "i"):
                    this.isUnavailable = true;
                    this.availabilityNews = player.news;
                    break;
                default:
                    this.isUnavailable = false;
            }
        }
    }

    export function getPlayerData(playerListCallback: Function) {

        // Define variables
        loadingOverlay = $('.loading');
        loadingState = false;
        playerDataUrl = "https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json";
        imageUrl = "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p";


        fetch(playerDataUrl)
            .then(
                function (data) {
                    if (data.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' + data.status);
                        return;
                    }

                    // Examine the text in the response
                    data.json().then(function (data: IPlayerData) {

                        // Hide the loading overlay
                        loadingOverlay.hide();

                        players = data.elements.map(player => new Player(player))

                        let playerList = {
                            settings: {
                                loaded: true,
                            },
                            goalkeepers: players.filter(p => p.playerType == 1),
                            defenders: players.filter(p => p.playerType == 2),
                            midfielders: players.filter(p => p.playerType == 3),
                            forwards: players.filter(p => p.playerType == 4)
                        }

                        console.log(playerList)

                        // Create callback with player data
                        playerListCallback(playerList)
                    });
                }
            )
            .catch(function (err: any) {

                // Hide the loading overlay
                loadingOverlay.hide();

                // Show alert error
                alert(`fetch error ${err}`);
            });
    }

}