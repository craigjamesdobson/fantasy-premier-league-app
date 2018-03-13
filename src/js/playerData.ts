export module PlayerData {

    enum PlayerType {
        Goalkeeper = 1,
        Defender = 2,
        Midfielder = 3,
        Forward = 4
    }

    class Player {
        private name: string;
        private price: number;
        private playerType: PlayerType;

        constructor(name: string, price: number, playerType: PlayerType) {
            this.price = price;
            this.setName(name);
        }

        public getCalculatedPrice(): number {
            return this.price - 10;
        }

        public setName(name:string): void {
            if(name == "") {
                this.name == "no name";
            } else {
                this.name == name;
            }
        }

    }

    export function callPlayerData() {
        $.getJSON("https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json", function(data: any) {

            let players: Player[] = data.elements.map((player: any) => new Player(data.web_name, data.now_cost, data.element_type));

            console.log(players);

        });
    }

}