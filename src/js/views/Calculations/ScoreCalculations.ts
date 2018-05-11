import * as $ from 'jquery';
import '../../../scss/calculations.scss';
import { CreateTeams } from '../../components/FantasyTeams/CreateFantasyTeams';
const FantasyTeamTemplate = require('../../components/Templates/FantasyTeamsTemplate.hbs');

namespace ScoreCalculations {
  export function init() {
    CreateTeams.CreateTeam((newFantasyTeams: any) => {
      $('.teams-container').append(
        FantasyTeamTemplate(newFantasyTeams)
      );
    });
  }
}
$(() => ScoreCalculations.init());
