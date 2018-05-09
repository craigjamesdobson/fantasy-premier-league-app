import * as $ from 'jquery';
import '../../../scss/calculations.scss';
import { CreateTeams } from '../../components/FantasyTeams/CreateFantasyTeams';

namespace ScoreCalculations {
  export function init() {
    CreateTeams.CreateTeam((newFantasyTeams: any) => {
      $.get(
        '/src/js/components/Templates/FantasyTeamsTemplate.hbs',
        (source: any) => {
          // retrieve the template data from the HTML (jQuery is used here).
          const template: any = source;

          // compile the template
          const templateScript: any = Handlebars.compile(template);

          // create HTML code
          const html: HTMLElement = templateScript(newFantasyTeams);

          // insert the HTML code into the page
          $('.teams-container').append(html);
        }
      );
    });
  }
}
$(() => ScoreCalculations.init());
