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

            // Retrieve the template data from the HTML (jQuery is used here).
            var template = $('#handlebars-demo').html();

            // Compile the template data into a function
            var templateScript = Handlebars.compile(template);

            //var context = PlayerData.getPlayerData();

            // html = 'My name is Ritesh Kumar. I am a developer.'
            var html = templateScript(playerData);

            // Insert the HTML code into the page
            $('.player-container').append(html);

        });
    };

}

$(() => PlayerList.init());