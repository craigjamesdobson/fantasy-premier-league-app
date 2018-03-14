/// <reference types="jquery" />

import * as $ from "jquery";

export module PlayerData {

    let loaded = false;
    let url = "https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json";

    //
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
        team: number
        name: string;
        price: string;
        playerType: PlayerPosition;
    }

    class Player implements IPlayer {
        id: number;
        image: string;
        team: number;
        name: string;
        price: string;
        playerType: PlayerPosition;

        constructor(player: IPlayerDataElements) {
            this.id = player.id;
            this.image = player.photo;
            this.team = player.team;
            this.price = this.getPlayerCost(player.now_cost, player.cost_change_start_fall);
            this.name = player.web_name;
            this.playerType = player.element_type;
        }

        private getPlayerCost(now: number, change: number): string {
            return ((now + change) / 10).toFixed(1);
        }

    }

    export function getPlayerData(callback: Function) {

        $.getJSON(url, function (data: IPlayerData) {

            $('.loading').hide();

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

            console.log(playerList);

            callback(playerList)

        });
    }

}