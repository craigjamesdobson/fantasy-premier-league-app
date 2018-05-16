import * as $ from 'jquery';
import '../../../scss/calculations.scss';
import { DraftedTeamData } from '../../components/DraftedTeams/CreateDraftedTeams';
import { PlayerData } from '../../components/Players/PlayerData';
const DraftedTeamTemplate = require('../../components/Templates/FantasyTeamsTemplate.hbs');

namespace ScoreCalculations {
  async function getDraftedTeamData(): Promise<any> {
    const playerData = await PlayerData.getPlayerData();
    const draftedTeamData = await DraftedTeamData.getDraftedTeamData();

    console.log(draftedTeamData);
    console.log(playerData);

    $('.teams-container').append(DraftedTeamTemplate(draftedTeamData));
  }

  export function init() {
    // initialise functions
    getDraftedTeamData();
  }
}
$(() => ScoreCalculations.init());
