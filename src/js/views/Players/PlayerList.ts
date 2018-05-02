// imports
import * as Handlebars from "handlebars";
import * as $ from "jquery";
import "../../../scss/Playerlist.scss";
import { PlayerData } from "../../components/Players/PlayerData";

namespace PlayerList {

    // define variables
    let playerContainer: JQuery;
    let playersTemplate: JQuery;
    let playerImage: JQuery;

    // call in player data and slice them into column data
    function setUpPlayers(): any {

        PlayerData.getPlayerData((playerData: any) => {

            const dividedPlayerData: object = {
                gkLeft: playerData.goalkeepers.slice(0, Math.floor(playerData.goalkeepers.length / 2)),
                gkRight: playerData.goalkeepers.slice(Math.floor(playerData.goalkeepers.length / 2)),

                dfLeft: playerData.defenders.slice(0, Math.floor(playerData.defenders.length / 2)),
                dfRight: playerData.defenders.slice(Math.floor(playerData.defenders.length / 2)),

                mfLeft: playerData.midfielders.slice(0, Math.floor(playerData.midfielders.length / 2)),
                mfRight: playerData.midfielders.slice(Math.floor(playerData.midfielders.length / 2)),

                fwLeft: playerData.forwards.slice(0, Math.floor(playerData.forwards.length / 2)),
                fwRight: playerData.forwards.slice(Math.floor(playerData.forwards.length / 2)),
            };

            // retrieve the template data from the HTML (jQuery is used here).
            const template: any = playersTemplate.html();

            // compile the template data into a function
            const templateScript: any = Handlebars.compile(template);

            // create HTML code
            const html: HTMLElement = templateScript(dividedPlayerData);

            // insert the HTML code into the page
            playerContainer.append(html);

        });
    }

    export function init() {

        // declare Variables
        playerContainer = $(".player-container");
        playersTemplate = $("#players-template");
        playerImage = $("img");

        // initialise functions
        setUpPlayers();
    }

}

$(() => PlayerList.init());
