/// <reference types="jquery" />
/// <reference types="bootstrap" />
/// <reference types="handlebars" />

// Imports
import * as $ from "jquery";
import {
    PlayerData
} from "./playerData";
import './../scss/playerList.scss';
import * as Handlebars from 'handlebars';

namespace PlayerList {

    // Define variables
    let playerContainer: JQuery;
    let playersTemplate: JQuery;
    let playerImage: JQuery;

    // Call in player data and slice them into column data
    function setUpPlayers() {

        PlayerData.getPlayerData(function (playerData: any) {

            var dividedPlayerData = {
                gkLeft: playerData.goalkeepers.slice(0, Math.floor(playerData.goalkeepers.length / 2)),
                gkRight: playerData.goalkeepers.slice(Math.floor(playerData.goalkeepers.length / 2)),

                dfLeft: playerData.defenders.slice(0, Math.floor(playerData.defenders.length / 2)),
                dfRight: playerData.defenders.slice(Math.floor(playerData.defenders.length / 2)),

                mfLeft: playerData.midfielders.slice(0, Math.floor(playerData.midfielders.length / 2)),
                mfRight: playerData.midfielders.slice(Math.floor(playerData.midfielders.length / 2)),

                fwLeft: playerData.forwards.slice(0, Math.floor(playerData.forwards.length / 2)),
                fwRight: playerData.forwards.slice(Math.floor(playerData.forwards.length / 2)),
            };

            // Retrieve the template data from the HTML (jQuery is used here).
            var template = playersTemplate.html();

            // Compile the template data into a function
            var templateScript = Handlebars.compile(template);

            // Create HTML code
            var html = templateScript(dividedPlayerData);

            // Insert the HTML code into the page
            playerContainer.append(html);

        });
    }

    export function init() {

        // Declare Variables
        playerContainer = $('.player-container');
        playersTemplate = $('#players-template');
        playerImage = $('img')

        // Initialise functions
        setUpPlayers();

        // $(document).on('mouseenter', '.player-row', function () {
        //     $(this).addClass('show-data');
        // }).on('mouseleave', '.player-row', function () {
        //     $(this).removeClass('show-data');
        // });
    };

}

$(() => PlayerList.init());