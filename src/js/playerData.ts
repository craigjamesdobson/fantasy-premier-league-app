import * as $ from "jquery";

export module PlayerData {


    enum PlayerType {
        Goalkeeper = 1,
        Defender = 2,
        Midfielder = 3,
        Forward = 4
    }

    class Player {
        private id: number;
        private name: string;
        private price: string;
        private playerType: PlayerType;

        constructor(id: number, name: string, price: string, playerType: PlayerType) {
            this.id = id;
            this.price = price;
            this.name = name;
            this.playerType = playerType;
        }

        // public setName(name:string): void {
        //     if(name == "") {
        //         this.name == "no name";
        //     } else {
        //         this.name == name;
        //     }
        // }

    }

    export function callPlayerData() {
        $.getJSON("https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json", function(data: any) {

            let players: Player[] = data.elements.map((player: any) => new Player(player.id, player.web_name, ((player.now_cost + player.cost_change_start_fall) / 10).toFixed(1), player.element_type))

            console.log(players);

        });
    }

}