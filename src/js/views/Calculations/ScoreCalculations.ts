import * as Handlebars from "handlebars";
import * as $ from "jquery";
import { CreateTeams } from "../../components/CreatedTeams/CreateTeams";

namespace ScoreCalculations {
    export function init() {
        CreateTeams.CreateTeam((newFantasyTeams: any) => {
        // retrieve the template data from the HTML (jQuery is used here).
        const template: any = $("#fantasyteams-template").html();

        // compile the template data into a function
        const templateScript: any = Handlebars.compile(template);

        // create HTML code
        const html: HTMLElement = templateScript(newFantasyTeams);

        // insert the HTML code into the page
        $(".teams-container").append(html);

        });
    }
}
$(() => ScoreCalculations.init());
