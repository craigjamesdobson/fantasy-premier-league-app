/// <reference types="jquery" />
/// <reference types="handlebars" />

import * as $ from "jquery";
import { PlayerData } from "./playerData";
import './../scss/playerList.scss';
import * as Handlebars from 'handlebars';


namespace PlayerList {

    function setUpPlayers() {

    }

    export function init() {
        
        PlayerData.getPlayerData(function (playerData: any) {

            console.log(Math.ceil(playerData.goalkeepers.length / 2));

            var dividedPlayerData = {
                gkLeft: playerData.goalkeepers.slice(0, Math.floor(playerData.goalkeepers.length / 2)),
                gkRight: playerData.goalkeepers.slice(Math.floor(playerData.goalkeepers.length / 2)),
                dfLeft: playerData.defenders.slice(0, Math.floor(playerData.defenders.length / 2)),
                dfRight: playerData.defenders.slice(Math.floor(playerData.defenders.length / 2)),
            };

            
            console.log(dividedPlayerData);

            // Retrieve the template data from the HTML (jQuery is used here).
            var template = $('#players-template').html();

            // Compile the template data into a function
            var templateScript = Handlebars.compile(template);

            // html = 'My name is Ritesh Kumar. I am a developer.'
            var html = templateScript(dividedPlayerData);

            // Insert the HTML code into the page
            $('.player-container').append(html);

        });
    };

}

$(() => PlayerList.init());