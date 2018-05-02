import * as Handlebars from "handlebars";
import "../../../scss/calculations.scss";
import { CreateTeams } from "../../components/CreatedTeams/CreateTeams";

namespace ScoreCalculations {
    export function init() {
        CreateTeams.CreateTeam((newFantasyTeams: any) => {

            $.get( "/src/js/components/CreatedTeams/fantasyTeamsTemplate.hbs", (source: any) => {
            // retrieve the template data from the HTML (jQuery is used here).
            const template: any = source;

            const templateScript: any = Handlebars.compile(template);

            // create HTML code
            const html: HTMLElement = templateScript(newFantasyTeams);

            // insert the HTML code into the page
            $(".teams-container").append(html);
        });

        });
    }
}
$(() => ScoreCalculations.init());
