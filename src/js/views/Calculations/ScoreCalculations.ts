import * as $ from 'jquery';
import '../../../scss/calculations.scss';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
const FantasyTeamTemplate = require('../../components/Templates/FantasyTeamsTemplate.hbs');

namespace ScoreCalculations {
  export function init() {
    DraftedTeamData.getDraftedTeamData((newFantasyTeams: any) => {
      $('.teams-container').append(
        FantasyTeamTemplate(newFantasyTeams)
      );
    });
  }
}
$(() => ScoreCalculations.init());
